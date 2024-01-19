const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./public/index.html";
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType =
    {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
    }[extname] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf-8");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
