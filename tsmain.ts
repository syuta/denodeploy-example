class Env {
    getVar(key:string):any {
        return Deno.env.get(key);
    }
}

addEventListener("fetch", (event) => {
  const msg = new Env().getVar("FOO");
  const response = new Response("FOO : " + msg, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
