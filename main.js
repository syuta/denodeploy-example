addEventListener("fetch", (event) => {
  const response = new Response("Hello Deno Deploy2!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
