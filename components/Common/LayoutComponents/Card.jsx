import React from "react";
import parser from "html-react-parser";
export default function Card({ title, tag, description, Image }) {
  return (
    <div data-aos="zoom-in">
      <div class="card">
        <div class="card__header">
          <img
            src={
              Image ? Image : "https://source.unsplash.com/600x400/?computer"
            }
            alt="card__image"
            class="card__image"
            width="600"
          />
        </div>
        <div class="card__body">
          <span class="tag tag-blue">{tag?.toUpperCase()}</span>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
