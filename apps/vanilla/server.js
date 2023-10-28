const express = require("express");
const app = express();
const port = 5000;

const serverData = {
  arrayTest: [1, 2, 3],
  objectTest: {
    a: {
      b: 1,
    },
    c: 4,
  },
};

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>SSR TEST</title>
      <link href="./test.css" rel="stylesheet" />
    </head>
    
    <body>
    <div id="app">
      <ul>
        <li class="test">SSR PRACTICE</li>
        <li>#1 : ssr only 만들기</li>
        <li>#2 : ssr + csr(hydration)</li>
        <li>#3 : react + ssr</li>
        <li>#4 : react + streaming ssr</li>
      </ul>
    </div>
    </body>
    <script src='./event-binding.js'></script>
    <script>window.__INITIAL_MODEL__ = ${JSON.stringify({
      serverData,
    })};</script>
    </html>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
