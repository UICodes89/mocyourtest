export const STORAGE_KEYS = {
  users: 'mockAppUsers',
  session: 'mockAppSession',
  attempts: 'mockAppAttempts'
};

export const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

function safeRead(key, fallback = null) {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeWrite(key, value) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // If full, trim oldest attempts if relevant
    if (key === STORAGE_KEYS.attempts) {
      const slice = Array.isArray(value) ? value.slice(1) : [];
      try {
        localStorage.setItem(key, JSON.stringify(slice));
      } catch {
        /* ignore */
      }
    }
  }
}

export function getUsers() {
  return safeRead(STORAGE_KEYS.users, []);
}

export function saveUsers(users) {
  safeWrite(STORAGE_KEYS.users, users);
}

export function getSession() {
  return safeRead(STORAGE_KEYS.session, null);
}

export function saveSession(session) {
  safeWrite(STORAGE_KEYS.session, session);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('mock-session-changed'));
  }
}

export function clearSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.session);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('mock-session-changed'));
  }
}

export function getAttempts() {
  const attempts = safeRead(STORAGE_KEYS.attempts, []);
  return pruneOldAttempts(attempts);
}

export function saveAttempts(attempts) {
  safeWrite(STORAGE_KEYS.attempts, pruneOldAttempts(attempts));
}

export function recordAttempt(attempt) {
  const attempts = getAttempts();
  attempts.push(attempt);
  saveAttempts(attempts);
  return attempts;
}

export function pruneOldAttempts(attempts) {
  const now = Date.now();
  return (attempts || []).filter(a => (now - a.finishedAt) <= MAX_AGE_MS);
}
