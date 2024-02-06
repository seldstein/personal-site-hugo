// https://css-tricks.com/add-a-service-worker-to-your-site/

// On install, cache some stuff
self.addEventListener('install', event => {
	event.waitUntil(caches.open('core').then(cache => {
		cache.add(new Request('/offline/'));
	}));
});

// listen for requests
addEventListener('fetch', event => {

	// Get the request
	let request = event.request;

	// Bug fix
	// https://stackoverflow.com/a/49719964
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

	// HTML files
	// Network-first
	// Send the request to the network first
	// If it's not found, look in the cache
	if (request.headers.get('Accept').includes('text/html')) {
		event.respondWith(
			fetch(request).then(response => {
				return response;
			}).catch(error => {
				return caches.match('/offline/');
			})
		);
	}

	// CSS & JavaScript
	// Offline-first
	if (request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript')) {
		event.respondWith(
			caches.match(request).then(function (response) {
				return response || fetch(request).then(function (response) {
					return response;
				});
			})
		);
		return;
	}

	// Images
	// Offline-first
	if (request.headers.get('Accept').includes('image')) {
		event.respondWith(
			caches.match(request).then(function (response) {
				return response || fetch(request).then(function (response) {
					return response;
				});
			})
		);
	}
});