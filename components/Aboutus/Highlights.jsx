import React from "react";
import { StyleSpan } from "../stylecomponents/Header.styled";
import { Container,Row,Col } from "react-bootstrap";
import renderHTML from "react-render-html";
import SliderComponent from "../Common/Slider";
import { settings3 } from "../../utils/slidersettings";
export default function Highlights({ hightlights }) {
  return (
    <>
      <div className="highlights mt-4">
        <h2 className="text-center">
          Our<StyleSpan color="#185b2d">Highlights</StyleSpan>{" "}
        </h2>
        <div className="highlight-content " data-aos="zoom-out">
          <Container>
            <h4>{hightlights.length > 0 && hightlights[0]?.title}</h4>
            <p>
              {hightlights.length > 0 &&
                renderHTML(hightlights[0]?.description)}
            </p>
          </Container>
        </div>
        <div className="bgRed">
          <Container>
            <Row>
              <Col sm={6} Col md={6} data-aos="fade-right">
                <div class="card">
                  <div class="card__header"></div>
                  <div class="card__body">
                    <h4 className="text-center">
                      ICSK SHOWS THE WAY WITH HAIYAN RELIEF
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi perferendis molestiae non nemo doloribus.
                      Doloremque, nihil! At ea atque quidem!
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={6} Col md={6} data-aos="fade-left">
                <div class="card">
                  <div class="card__header"></div>
                  <div class="card__body">
                    <h4 className="text-center">
                      ICSK SHOWS THE WAY WITH HAIYAN RELIEF
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi perferendis molestiae non nemo doloribus.
                      Doloremque, nihil! At ea atque quidem!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="cardwidth">
          <Container fluid>
            <Row>
              <Col sm={6} Col md={6}>
                <div class="card">
                  <div class="card__header"></div>
                  <div class="card__body">
                    <img src="https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1.jpg" />
                  </div>
                </div>
              </Col>
              <Col sm={6} Col md={6}>
                <div class="card">
                  <div class="card__header"></div>
                  <div class="card__body">
                    <h4 className="text-center">
                      ICSK SHOWS THE WAY WITH HAIYAN RELIEF
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi perferendis molestiae non nemo doloribus.
                      Doloremque, nihil! At ea atque quidem!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={6} Col md={6} data-aos="zoom-in">
                <div class="card">
                  <div class="card__header"></div>
                  <div class="card__body">
                    <h4 className="text-center">
                      ICSK SHOWS THE WAY WITH HAIYAN RELIEF
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi perferendis molestiae non nemo doloribus.
                      Doloremque, nihil! At ea atque quidem!
                    </p>
                  </div>
                </div>
              </Col>

              <Col sm={6} Col md={6} data-aos="zoom-in">
                <div class="card">
                  <div class="card__header"></div>
                  <div class="card__body">
                    <img src="https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1.jpg" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section-div bgRed mt-4">
          <h5 className="text-center p-2">
            <StyleSpan color="#fff">
              AN EDUCATION WITH VALUES & CULTURAL FIESTAS
            </StyleSpan>
          </h5>
          <Container fluid>
            <Row className="values-row">
              <SliderComponent settings={settings3}>
                <Col sm={4} Col md={4} data-aos="zoom-in mr-5">
                  <div class="card">
                    <div class="card__header"></div>
                    <div class="card__body">
                      <h4 className="text-center">
                        ICSK SHOWS THE WAY WITH HAIYAN RELIEF
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi perferendis molestiae non nemo doloribus.
                        Doloremque, nihil! At ea atque quidem!
                      </p>
                    </div>
                  </div>
                </Col>

                <Col sm={4} Col md={4} data-aos="zoom-in">
                  <div class="card">
                    <div class="card__header"></div>
                    <div class="card__body">
                      <h4 className="text-center">
                        ICSK SHOWS THE WAY WITH HAIYAN RELIEF
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi perferendis molestiae non nemo doloribus.
                        Doloremque, nihil! At ea atque quidem!
                      </p>
                    </div>
                  </div>
                </Col>

                <Col sm={4} Col md={4} data-aos="zoom-in">
                  <div class="card">
                    <div class="card__header"></div>
                    <div class="card__body">
                      <h4 className="text-center">
                        ICSK SHOWS THE WAY WITH HAIYAN RELIEF
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi perferendis molestiae non nemo doloribus.
                        Doloremque, nihil! At ea atque quidem!
                      </p>
                    </div>
                  </div>
                </Col>
              </SliderComponent>
            </Row>
          </Container>
        </div>
        <div className="highlight-content" data-aos="fade-up">
          <Container>
            <h4>
              <StyleSpan color="#185b2d">
                {hightlights.length > 0 && hightlights[1].title.toUpperCase()}
              </StyleSpan>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sequi perferendis molestiae non nemo doloribus. Doloremque,
              nihil! At ea atque quidem!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi perferendis molestiae non nemo doloribus.
              Doloremque, nihil! At ea atque quidem!
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}
