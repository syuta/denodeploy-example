addEventListener("fetch", (event) => {
  const response = new Response("Hello Deno Deploy from tsmain.ts!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
