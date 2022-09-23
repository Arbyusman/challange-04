const express = require("express");
const app = express();
const port = 2424;
const path = require("path");
const public = path.join(__dirname, "../public");

// load public directori
app.use(express.static(public));

app.get("/", function (req, res) {
  res
    .status(200)
    .set("Content-Type", "text/html")
    .sendFile(path.join(public, "landing_page.html"));
});

app.get("/cars", function (req, res) {
  res
    .status(200)
    .set("Content-Type", "text/html")
    .sendFile(path.join(public, "cari_mobil.html"));
});

app.get("*", function (req, res) {
  res
    .status(404)
    .set("Content-Type", "text/html")
    .sendFile(path.join(public, "404.html"));
});

app.listen(port, () => {
  console.log("Example app listening on http://localhost:%d", port);
});
