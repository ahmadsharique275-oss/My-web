// Yeh ek basic service worker file hai
self.addEventListener('install', event => {
  console.log('Service worker install ho raha hai...');
});

self.addEventListener('fetch', event => {
  // Abhi ke liye hum network requests ko pass through kar rahe hain
  event.respondWith(fetch(event.request));
});
