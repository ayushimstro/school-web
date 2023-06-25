import React from "react";
import {
  ShimmerPostList,
  ShimmerThumbnail,
  ShimmerText,
} from "react-shimmer-effects";

export default function Shimmer({ type }) {
  return type == "card" ? (
    <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
  ) : type == "card-text" ? (
    <ShimmerThumbnail height={250} rounded />
  ) : type == "text" ? (
    <ShimmerText line={5} gap={10} />
  ) : (
    ""
  );
}
