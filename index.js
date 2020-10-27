const express = require("express");

const postsRouter = require("./posts/postsRouter.js");

const server = express();
server.use(express.json());

server.use("/api/posts", postsRouter);

server.use("/", (req, res) => {
  res.json({ message: "working" });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
