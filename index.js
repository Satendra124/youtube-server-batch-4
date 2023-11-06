const express = require("express");
const videoRouter = require("./routes/videoRoutes");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://youtubeclone:1234@cluster0.5ofd4si.mongodb.net/youtubeclone_19065081"
  )
  .then(() => {
    console.log("DB connected");
  });

const app = express();
app.use(express.json());

app.use(videoRouter);

app.listen(3000, myCallbackFunction);

function myCallbackFunction() {
  console.log("Server Started");
}