
class Env {
    getVal(key:string):any {
        return Deno.env.get(key);
    }
}

const env = new Env();

function handleRequest(request:Request) {
  const pathname:URL = new URL(request.url);
  const value:string = env.getVal("FOO");
  const txt = ` Hello DenoDeploy!\n path : ${pathname}\n value:${value}\n`;
  return new Response(txt, {
    headers: { "content-type": "text/plain" },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
