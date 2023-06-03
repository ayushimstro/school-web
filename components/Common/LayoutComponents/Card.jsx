import React from "react";

export default function Card() {
  return (
    <div data-aos="zoom-in">
    <div class="card" >
      <div class="card__header">
        <img
          src="https://source.unsplash.com/600x400/?computer"
          alt="card__image"
          class="card__image"
          width="600"
        />
      </div>
      <div class="card__body">
        <span class="tag tag-blue">Technology</span>
        <h4>Whats new in 2022 Tech</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
          atque quidem!
        </p>
        </div>
      </div>
    </div>
  );
}
