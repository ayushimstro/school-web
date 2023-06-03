import React from "react";
import {Button } from "react-bootstrap"
export default function EventCard() {
  return (
    <div data-aos="zoom-in">

    <div class="card p-3">
      <div class="card__header">
        
        <h5>Adrian Johns - “The Science of Reading”</h5>
      </div>
      <div class="card__body">
        <h4>6:00 pm - 7:00 pm</h4>
        <p>
        Seminary Co-op Bookstore
        </p>
        <Button variant="primary" className="calender-btn">Add to Calendar</Button>
      </div>
    </div>
    </div>
  );
}
