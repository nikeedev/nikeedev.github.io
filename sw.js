const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/sw.js",
            "/",
            "/index.html",
            "/style.css",
            "/assets/github-mark-white.png",
            "/assets/github-mark.png",
            "/assets/nikee_256.png",
            "/assets/nikee.png",
            "/404.html",
            "/manifest.json",
            "/script.js",
            "/welcome.txt",
        ]),
    );
});


self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});


const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

