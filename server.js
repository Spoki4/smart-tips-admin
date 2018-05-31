const path = require("path");
const express = require("express");
const compression = require("compression");

const app = express();
const publicPath = path.join(__dirname, "build");
const port = process.env.PORT || 7777;

app.use(compression());
app.use(express.static(publicPath));
app.disable("x-powered-by");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is up!");
});
