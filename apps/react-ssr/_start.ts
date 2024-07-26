import fs from "node:fs";
import path from "node:path";
import express from "express";
import { fileURLToPath } from "node:url";

const ssrModule = await import("./dist/server/entry_server");
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use("/assets", express.static(path.resolve("./dist/client/assets")));

app.use("*", async (req, res, next) => {
  try {
    let template = fs.readFileSync(
      path.resolve(__dirname, "client/index.html"),
      "utf-8"
    );

    const response = await ssrModule.render({
      template,
      req,
    });

    res.status(200).set({ "Content-Type": "text/html" }).end(response);
  } catch (e) {
    next(e);
  }
});

app.listen(2133, () => {
  console.log("server is running at http://localhost:2133");
});
