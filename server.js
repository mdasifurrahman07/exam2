const next = require("next");
const express = require("express");

const port = process.env.PORT || 3000;
const dev = false;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use((req, res) => {
    handle(req, res);
  });

  server.listen(port, () => {
    console.log("Next.js is running on port " + port);
  });
});
