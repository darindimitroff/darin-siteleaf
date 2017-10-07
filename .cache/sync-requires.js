// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/deezel/darin-siteleaf/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/deezel/darin-siteleaf/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/deezel/darin-siteleaf/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/deezel/darin-siteleaf/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/deezel/darin-siteleaf/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/deezel/darin-siteleaf/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/deezel/darin-siteleaf/.cache/json/layout-index.json"),
  "404.json": require("/Users/deezel/darin-siteleaf/.cache/json/404.json"),
  "layout-index.json": require("/Users/deezel/darin-siteleaf/.cache/json/layout-index.json"),
  "index.json": require("/Users/deezel/darin-siteleaf/.cache/json/index.json"),
  "layout-index.json": require("/Users/deezel/darin-siteleaf/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/deezel/darin-siteleaf/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/deezel/darin-siteleaf/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/deezel/darin-siteleaf/.cache/json/404-html.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/deezel/darin-siteleaf/.cache/layouts/index.js"))
}