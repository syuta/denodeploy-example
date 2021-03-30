addEventListener("fetch", (event) => {
  const response = new Response("Hello Deno Deploy from main.js!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
