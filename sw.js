// Service worker minimal — requis par certains navigateurs pour proposer
// "Installer l'application". Ne met rien en cache pour l'instant :
// l'application a besoin d'une connexion active pour lire/écrire les
// données (Google Sheets), donc pas de mode hors-ligne pour le moment.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
