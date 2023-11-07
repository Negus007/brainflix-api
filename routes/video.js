const express = require("express");
const router = express.Router();
const fs = require("fs");
const data = fs.readFileSync("./data/videos.json");
const videoData = JSON.parse(data);
const { v4: uuidv4 } = require("uuid");

function readVideos() {
  const parsedData = JSON.parse(data);
  return parsedData;
}
readVideos();

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
  const { title, description } = req.body;
  const newVideo = {
    id: uuidv4(),
    title,
    channel: "The Chosen One",
    image: "http://localhost:8081/photos/image9.jpg",
    description,
    views: "1,000,000",
    likes: "1,000,000",
    duration: "07.29",
    timestamp: Date.now(),
  };
  videoData.unshift(newVideo);
  fs.writeFileSync("./data/videos.json", JSON.stringify(videoData));
});

module.exports = router;
