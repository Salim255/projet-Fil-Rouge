const express = require("express");
const app = express();
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Server running 🚀🚀on port ${PORT}`);
  console.log("====================================");
});
