let CACHE_VERSION = 'restaurant-app-static-v1';
let CACHE_FILES = [
    './',
    './css/styles.css',
    './index.html',
    './sw.js',
    './restaurant.html',
    './js/main.js',
    './js/restaurant_info.js',
    './js/dbhelper.js',
    './js/sw_register.js',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg'
];


//installing the service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_VERSION)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(CACHE_FILES);
        })
    );
});
//activating the service worker
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('restaurant-') &&
                        cacheName != CACHE_VERSION;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

//fetch event is fired

/*self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(resp) {
            return resp || fetch(event.request).then(function(response) {
                return caches.open('restaurant-app-static-v1').then(function(cache) {
                    if (event.request.url.indexOf('restaurant.html') != -1 || event.request.url.indexOf('leaflet') != -1) {
                        cache.put(event.request, response.clone());
                        return response;
                    }
                });
            });
        })
    );
});
*/

/*self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open('restaurant-app-static-v1')
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});*/
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp){
      // if it's not in the cache, server the regular network request. And save it to the cache
      return resp || fetch(event.request).then(function(response) {
        return caches.open('restaurant-app-static-v1').then(function(cache) {
          cache.put(event.request, response.clone());
         });
        return response;
      };
