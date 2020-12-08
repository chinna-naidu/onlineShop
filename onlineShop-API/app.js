const { Server } = require("@hapi/hapi");
const path = require("path");

const init = async () => {
  const server = new Server({
    port: 3000,
    routes: {
      cors: true,
      files: {
        relativeTo: path.join(__dirname, "public"),
      },
    },
  });

  await server.start();
  console.log(server.info.uri);
};

init();
