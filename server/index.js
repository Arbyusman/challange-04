const express = require("express");
const app = express();
const port = 2424;
const path = require("path");
const public = path.join(__dirname, "../public");

app.use(express.static(public));

app.get("/", function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(public, "landing_page.html"));
  res.status(200);

});
app.get("/cars", function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(public, "cari_mobil.html"));
  res.status(200);
});

app.get("*", function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(public, "404.html"));
  res.status(404);
});


app.listen(port, () => {
  console.log("Example app listening on http://localhost:%d", port);
});
