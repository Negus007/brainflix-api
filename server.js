const express = require("express");
const app = express();
const cors = "cors";

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
