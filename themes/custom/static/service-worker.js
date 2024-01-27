// On install, cache some stuff
addEventListener('install', function (event) {
	event.waitUntil(caches.open('core').then(function (cache) {
		cache.add(new Request('/offline/'));
		return;
	}));
});