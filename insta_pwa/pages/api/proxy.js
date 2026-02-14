import fetch from 'node-fetch';

export default async function handler(req, res) {
  const path = req.url.replace('/api/proxy', '');

  // Bloque /reels
  if (path.startsWith('/reels')) {
    res.status(403).send('<h1 style="text-align:center;margin-top:50px">Accès aux Reels bloqué 🚫</h1>');
    return;
  }

  const url = `https://www.instagram.com${path}`;

  try {
    const response = await fetch(url);
    const text = await response.text();

    // Attention : certaines ressources (JS/CSS) d’Instagram peuvent bloquer
    res.status(response.status).send(text);
  } catch (err) {
    res.status(500).send('<h1>Erreur proxy 😅</h1>');
  }
}
