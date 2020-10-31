import React from "react";
import { Carousel } from "3d-react-carousal";

const slides = [
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/tgbNymZ7vqY"
  ></iframe>,
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/25QyCxVkXwQ"
  ></iframe>,
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/GibiNy4d4gc"
  ></iframe>,
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/L0MK7qz13bU"
  ></iframe>,
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/UFatVn1hP3o"
  ></iframe>,
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/nLGBEETtEPc"
  ></iframe>,
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/moSFlvxnbgk"
  ></iframe>,
  <iframe
    width="420"
    height="315"
    src="https://www.youtube.com/embed/iEKLFS-aKcw"
  ></iframe>,
];

export default function AppCarousal() {
  return <Carousel slides={slides} autoplay={true} interval={3000} />;
}
