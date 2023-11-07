const express = require("express");
const Video = require("../models/videoSchema");

const videoRouter = express.Router();

videoRouter.get("/video", async (req, res) => {
  try {
    const videos = await Video.find();
    res.send(videos);
  } catch (error) {
    res.send(error);
  }
});

videoRouter.get("/video/:id", async (req, res) => {
  try {
    const data = req.params;
    const videoId = data.id;
    const video = await Video.findById(videoId);
    res.send(video);
  } catch (error) {
    res.send(error);
  }
});

videoRouter.post("/video", async (req, res) => {
  try {
    const data = req.body;
    const video = new Video(data);
    await video.save();
    res.send(video);
  } catch (error) {
    res.send(error);
  }
});

module.exports = videoRouter;
