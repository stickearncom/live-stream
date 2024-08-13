// Cache name for the video file
const VIDEO_CACHE = 'video-cache-v1';

// The video file URL to cache
const videoUrl = './src/assets/center.mp4';

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VIDEO_CACHE)
      .then(cache => {
        return cache.add(videoUrl);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('.mp4')) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If not in cache, fetch from the network and cache it
          return fetch(event.request).then(networkResponse => {
            return caches.open(VIDEO_CACHE).then(cache => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          });
        })
    );
  }
});