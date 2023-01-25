const express = require("express");
const app = express();
const path = require("path");

//Setting the template
app.set("views", path.resolve(__dirname, "src/views"));
app.set("view engine", "ejs");

const PORT = 9000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Server running 🚀🚀on port ${PORT}`);
  console.log("====================================");
});
