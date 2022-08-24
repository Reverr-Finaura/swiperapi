const express = require("express");
const thread = require("./swipe");
const app = express();

app.listen(3000, () => {
  console.log("Listening...");
});
