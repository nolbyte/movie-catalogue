self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // todo caching App Shell resource
});

self.addEventListener('active', (event) => {
  console.log('Activating Service Worker ...');
  // todo: delete old cache
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // todo add/get fetch request to/from cache
});
