const staticKvout = "kvout-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.min.css",
  "/js/app.min.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticKvout).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })