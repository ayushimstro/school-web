import React from "react";
import Slider from "react-slick";

export default function SliderComponent({ settings, children }) {
  return <Slider {...settings}>{children}</Slider>;
}
