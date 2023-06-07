import React from "react";
import { Button, Col, Row } from "react-bootstrap";
export default function EventCard({ type, text, image, button }) {
  return (
    <div data-aos="zoom-in">
      <div class="card p-3">
        {type == "event" ? (
          <Row>
            <Col md={4}>
              <img src={image} />
            </Col>
            <Col md={8} style={{ color: "#000" }}>
              {text}
            </Col>
          </Row>
        ) : (
          <>
            <div class="card__body">
              <h4>{text}</h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
