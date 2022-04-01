// install eventlistener
self.addEventListener('install', evt => {
    console.log('service worker has been installed')
})


// Activate eventlistener
self.addEventListener('activate', evt => {
    console.log('service worker has been activitated')
})


// Fetch eventlistener
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt)
})
