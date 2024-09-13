// const file = async (name: string) =>
//     new Response(await Bun.file(name).bytes(), {
//         headers: { "Content-Type": "text/html" },
//     });
//
// const paths = {
//     showhide: await file("./showhide/index.html"),
//     duck: await file("./duck/index.html"),
// };

const remove_index_re = /\/index\.html+$/;
const server = Bun.serve({
  fetch(req) {
    const path = new URL(req.url).pathname;
    if (path.endsWith(".js")) {
      return new Response(Bun.file(path));
    }
    const htmlpath = path.replace(remove_index_re, "");
    const file = Bun.file(`./${htmlpath}/index.html`);
    return new Response(file);
  },
});
console.log(`Listening on ${server.url}`);
