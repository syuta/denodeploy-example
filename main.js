addEventListener("fetch", (event) => {
  console.log(Deno.env.get("DENO_DEPLOYMENT_ID"));

  const response = new Response("Hello Deno Deploy from main.js!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
