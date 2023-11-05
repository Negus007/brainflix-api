const express = require("express");
const router = express.Router();
const fs = require("fs");
const data = fs.readFileSync("./data/videos.json");

function readVideos() {
  const parsedData = JSON.parse(data);
  return parsedData;
}

router.get("/", (_req, res) => {
  const videoData = readVideos();
  function videoListData() {
    const videoList = [];
    videoData.forEach((video) => {
      const { id, title, channel, image } = video;
      const obj = {
        id,
        title,
        channel,
        image,
      };
      videoList.push(obj);
      return videoList;
    });
    return videoList;
  }
  const listData = videoListData();
  // const videoList = videoData.map((video) => {
  //  return ({ id, title, channel, image } = video);
  // });

  res.json(listData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const videoData = readVideos();
  const foundVideo = videoData.find((video) => video.id === id);
  res.json(foundVideo);
});

router.post("/", (req, res) => {
  res.send("Posted");
});

module.exports = router;
