export function bumpSessionCount(): number {
  try {
    const n = parseInt(sessionStorage.getItem('apa_sc') ?? '0', 10);
    sessionStorage.setItem('apa_sc', String(n + 1));
    return n + 1;
  } catch { return 0; }
}

export function bumpLifetimeCount(): number {
  try {
    const n = parseInt(localStorage.getItem('apa_lc') ?? '0', 10);
    localStorage.setItem('apa_lc', String(n + 1));
    return n + 1;
  } catch { return 0; }
}
