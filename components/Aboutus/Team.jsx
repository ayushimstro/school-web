import React from "react";
import { StyleSpan } from "../stylecomponents/Header.styled";
import { Container, Row, Col } from "react-bootstrap";
export default function Team() {
  return (
    <>
      <div className="team bgRed mb-4">
        <h3 className="text-center">
          {" "}
          <StyleSpan color="#fff">TEAM</StyleSpan>
        </h3>
        <Container fluid>
          <Row>
            <Col sm={3} md={3} data-aos="zoom-in">
              <div class="card">
                <div class="card__header">
                  <img
                    src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg"
                    alt="card__image"
                    class="card__image"
                    width="600"
                  />
                </div>
                <div class="card__body">
                  <h4> Ajshdkkshdkls</h4>
                  <p>Chairman</p>
                </div>
              </div>
            </Col>
            <Col sm={3} md={3} data-aos="zoom-out">
              <div class="card">
                <div class="card__header">
                  <img
                    src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg"
                    alt="card__image"
                    class="card__image"
                    width="600"
                  />
                </div>
                <div class="card__body">
                  <h4> Ajshdkkshdkls</h4>
                  <p>Chairman</p>
                </div>
              </div>
            </Col>{" "}
            <Col sm={3} md={3} data-aos="zoom-up">
              <div class="card">
                <div class="card__header">
                  <img
                    src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg"
                    alt="card__image"
                    class="card__image"
                    width="600"
                  />
                </div>
                <div class="card__body">
                  <h4> Ajshdkkshdkls</h4>
                  <p>Chairman</p>
                </div>
              </div>
            </Col>{" "}
            <Col sm={3} md={3} data-aos="zoom-in">
              <div class="card">
                <div class="card__header">
                  <img
                    src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg"
                    alt="card__image"
                    class="card__image"
                    width="600"
                  />
                </div>
                <div class="card__body">
                  <h4> Ajshdkkshdkls</h4>
                  <p>Chairman</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
