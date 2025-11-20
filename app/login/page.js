'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSession, getUsers, saveSession, saveUsers } from '../../lib/storage';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const session = getSession();
    if (session?.email) {
      router.replace('/dashboard');
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    const users = getUsers() || [];
    if (mode === 'signup') {
      if (!email || !password || !name) {
        setMessage('Please fill all fields.');
        return;
      }
      const exists = users.find((u) => u.email === email);
      if (exists) {
        setMessage('User already exists. Try logging in.');
        return;
      }
      const nextUsers = [...users, { email, password, name }];
      saveUsers(nextUsers);
      saveSession({ email, name });
      router.replace('/dashboard');
    } else {
      const user = users.find((u) => u.email === email && u.password === password);
      if (!user) {
        setMessage('Invalid credentials. Try again or sign up.');
        return;
      }
      saveSession({ email: user.email, name: user.name });
      router.replace('/dashboard');
    }
  };

  return (
    <div style={{ maxWidth: 1100, margin: '48px auto 0 auto' }}>
      <div className="auth-card">
        <div className="auth-header" style={{ gap: 6 }}>
          <h2 style={{ margin: 0 }}>{mode === 'login' ? 'Login' : 'Create account'}</h2>
        </div>
        <form className="grid inputs" onSubmit={handleSubmit} style={{ gap: 12 }}>
          {mode === 'signup' && (
            <div>
              <label>Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
            </div>
          )}
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary">
            {mode === 'login' ? 'Login' : 'Sign up'}
          </button>
          {message && <div className={message.includes('Invalid') || message.includes('exists') ? 'error' : 'success'}>{message}</div>}
        </form>
        <div style={{ marginTop: 12, textAlign: 'center' }}>
          {mode === 'login' ? (
            <span>
              Need an account?{' '}
              <button className="btn btn-secondary" type="button" onClick={() => setMode('signup')}>
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button className="btn btn-secondary" type="button" onClick={() => setMode('login')}>
                Login
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
