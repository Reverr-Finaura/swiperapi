const express = require("express");
const thread = require("./swipe");
const app = express();

app.get("/",(req,res)=>{
  res.send("Swiper API is working!");
})

app.listen(3000, () => {
  console.log("Listening...");
});
