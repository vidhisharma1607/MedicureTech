import React from "react";
// import { Slide } from "@mui/material";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://c0.wallpaperflare.com/preview/767/442/400/desk-doctor-health-laptop.jpg",
  },
  {
    url: "https://i.pinimg.com/originals/9f/f7/d1/9ff7d1a690e7bf508eda106f9bc13dab.jpg",
  },
  {
    url: "https://img.freepik.com/premium-photo/pill-box-stethoscope-syringe-capsule-medicine-medical-treatment-flu-virus_945447-1340.jpg?w=2000",
  },
  {
    url: "https://www.pixelstalk.net/wp-content/uploads/images1/Medical-Wallpapers-HD-Free-download.jpg",
  },
  // { url: "images/5.jpg" },
  // { url: "images/6.jpg" },
  // { url: "images/7.jpg" },
];
const Home = () => {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={"80vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        margin="auto"
        slideDuration={1}
        autoPlay={true}
      />
    </div>
  );
};

export default Home;
