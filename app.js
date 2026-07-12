import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static("public"));

// Read the banner image once at startup and convert to base64
const imagePath = path.join(__dirname, "public", "banner.jpeg");
const imageBase64 = fs.readFileSync(imagePath).toString("base64");
const imageDataUri = `data:image/jpeg;base64,${imageBase64}`;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  res.send(`
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1280 320">

  <image
    href="${imageDataUri}"
    x="0"
    y="0"
    width="1280"
    height="320"
    preserveAspectRatio="xMidYMid slice"/>

  <style>
  .title{
    font: bold 84px Arial, sans-serif;
    fill:#000000;
    opacity:0;
    animation:fadeIn 2s forwards;
  }

  .subtitle{
    font:bold 36px Arial, sans-serif;
    fill:#000000;
    opacity:0;
    animation:fadeIn 2s .6s forwards;
  }

  @keyframes fadeIn{
    from{
      opacity:0;
      transform:translateY(20px);
    }
    to{
      opacity:1;
      transform:translateY(0px);
    }
  }
</style>

<text
  class="title"
  x="640"
  y="150"
  text-anchor="middle"
  fill="#000"
  stroke="#8b0000"
  stroke-width="3.5"
  paint-order="stroke fill">
  Priyanshi
</text>

<text
  class="subtitle"
  x="640"
  y="215"
  text-anchor="middle"
  fill="#000"
  stroke="#8b0000"
  stroke-width="2.5"
  paint-order="stroke fill">
  Full Stack Developer
</text>
</svg>
`);
});

export default app;