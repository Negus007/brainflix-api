const express = require("express");
const app = express();
const cors = require("cors");
const videoRoutes = require("./routes/video.js");

app.use("/photos", express.static("./public/images"));
app.use(cors());
app.use(express.json());
app.use("/videos", videoRoutes);

app.listen(8081, () => {
  console.log("Listening on port 8080");
});
