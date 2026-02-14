import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname + window.location.search;

    if (path.startsWith('/reels')) {
      document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px'>Accès aux Reels bloqué 🚫</h2>";
    } else {
      // Redirige vers notre proxy
      window.location.href = `/api/proxy${path}`;
    }
  }, []);

  return <p>Redirection en cours…</p>;
}
