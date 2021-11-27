const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  switch (pathName) {
    case "/":
      res.end("Hello from the server!\nThis is Home page");
      break;
    case "/overview":
      res.end("This is Overview Page!");
      break;
    case "/product":
      res.end("This is the Product Page!");
      break;
    case "/api":
      fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
        const productData = JSON.parse(data);
        res.writeHead(200, {
          "Content-type": "application/json",
        });
        res.end(data);
      });

      break;
    default:
      res.writeHead(404, {
        "Content-type": "text/html",
        "my-own-header": "hello-world",
      });
      res.end("<h1>Page could not be found!</h1>");
    //   res.writeHead(404);
    //   res.end("Page could not be found!");
  }
});

const port = 8000;
server.listen(port, "127.0.0.1", () => {
  console.log(`Server listening on ${port}`);
});
