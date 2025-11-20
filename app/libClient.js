'use client';
import { clearSession as clearSessionStorage, getSession as getSessionStorage } from '../lib/storage';

export function getSession() {
  return getSessionStorage();
}

export function clearSession() {
  return clearSessionStorage();
}
