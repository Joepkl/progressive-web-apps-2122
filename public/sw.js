const staticCacheName = 'site-static'
const assets = [
    '/',
    '/styles/style.css',
    '/images/icon-192x192.png',
    '/images/icon-256x256.png',
    '/images/icon-384x384.png',
    '/images/icon-512x512.png',
    '/fonts/ayar.ttf'
]

// PLEURIS APP.JS GEEFT FOUTMELDING 



// install eventlistener
self.addEventListener('install', evt => {
    // console.log('service worker has been installed')
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets')
            cache.addAll(assets)
        })
    )
    self.skipWaiting()
})



//Activate eventlistener
self.addEventListener('activate', (event) => {
    //console.log('The server worker has been activated');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
                )
        })
    )
});



// Fetch eventlistener
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request)
        })
    )
})
