const CACHE = 'x2-v2';
const ASSETS = [
  'https://dzakynx2-alt.github.io/X.2/',
  'https://dzakynx2-alt.github.io/X.2/index.html'
];

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
