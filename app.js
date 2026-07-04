import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {

  res.setHeader("Content-Type", "image/svg+xml");

res.send(`
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 1280 320">

<image
        href="https://raw.githubusercontent.com/princi-2306/banner-svg/main/public/banner.jpeg"
        x="0"
        y="0"
        width="1280"
        height="320"
        preserveAspectRatio="xMidYMid slice"/>

<style>
        .title{
            font: bold 48px Arial, sans-serif;
            fill:#000000;
            opacity:0;

            animation:fadeIn 2s forwards;
        }

        .subtitle{
            font:bold 22px Arial, sans-serif;
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

    <!-- Heading -->
    <!-- Title -->
<text
    class="title"
    x="640"
    y="145"
    text-anchor="middle"
    fill="#000"
    stroke="#8b0000"
    stroke-width="2.5"
    paint-order="stroke fill">
    Priyanshi
</text>

<!-- Subtitle -->
<text
    class="subtitle"
    x="640"
    y="190"
    text-anchor="middle"
     fill="#000"
      stroke="#8b0000"
      stroke-width="2.5"
    paint-order="stroke fill">
    a fullstack developer
</text>
</svg>
`);

});

export default app;
