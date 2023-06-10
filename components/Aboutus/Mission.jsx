import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { StyleSpan } from "../stylecomponents/Header.styled";
import renderHTML from "react-render-html";
export default function Mission({ content }) {
  return (
    <>
      <div className="our-mission mt-4">
        <h2 className="text-center" data-aos="fade-up">
          Vision and <StyleSpan color="#185b2d">Mission</StyleSpan>
        </h2>
        <Container>
          <Row>
            {content.map((cont) => (
              <Col sm={6} key={cont._id} Col md={6} data-aos="fade-right">
                <div class="card">
                  <div class="card__header"></div>
                  <div class="card__body">
                    <h4 className="text-center">{cont.title}</h4>
                    <p>{renderHTML(cont.description)}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}