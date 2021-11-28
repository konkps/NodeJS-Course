const http = require("http");
const url = require("url");
const fs = require("fs");

const replaceTemplate = require("./modules/replaceTemplate");

const templOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const templCard = fs.readFileSync(`${__dirname}/templates/card.html`, "utf-8");
const templProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

// Create SERVER
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  // const pathname = req.url;
  let output;
  switch (pathname) {
    case "/":
      res.end("Hello from the server!\nThis is Home page");
      break;
    // Overview Page
    case "/overview":
      res.writeHead(200, { "Content-type": "text/html" });

      const cardsHtml = dataObj
        .map((item) => replaceTemplate(templCard, item))
        .join("");
      output = templOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);

      res.end(output);
      break;
    // Product Page
    case "/product":
      const product = dataObj[query.id];
      output = replaceTemplate(templProduct, product);

      res.writeHead(200, { "Content-type": "text/html" });
      res.end(output);
      break;
    // API
    case "/api":
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
      break;
    // Not Found
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
