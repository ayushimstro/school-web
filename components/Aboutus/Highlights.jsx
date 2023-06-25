import React from "react";
import { StyleSpan } from "../stylecomponents/Header.styled";
import { Container,Row,Col } from "react-bootstrap";
import renderHTML from "react-render-html";
import SliderComponent from "../Common/Slider";
import { settings3 } from "../../utils/slidersettings";
import HTMLReactParser from "html-react-parser";
import Shimmer from "../Common/Shimmereffect";
export default function Highlights({ width, hightlights, cms }) {
  const edvalues = cms.filter((cm) => cm.sectionType == "values&culture");
  const initativesvalues = cms.filter((cm) => cm.sectionType == "initatives");
  return (
    <>
      <div className="highlights mt-4">
        <h2 className="text-center">
          Our<StyleSpan color="#185b2d">Highlights</StyleSpan>{" "}
        </h2>
        <div
          className="highlight-content "
          data-aos={width < 768 ? "" : "zoom-out"}
        >
          {hightlights.length == 0 ? (
            <Shimmer type={"text"} />
          ) : (
            <Container>
              <h4>{hightlights.length > 0 && hightlights[0]?.title}</h4>
              <p>
                {hightlights.length > 0 &&
                  renderHTML(hightlights[0]?.description)}
              </p>
            </Container>
          )}
        </div>
        <div className="bgRed bg-card">
          <Container>
            {initativesvalues.length == 0 ? (
              <Shimmer type={"card"} />
            ) : (
              <Row>
                {initativesvalues.slice(0, 2).map((intv) => (
                  <Col
                    sm={6}
                    Col
                    md={6}
                    key={intv._id}
                    data-aos={width < 768 ? "" : "fade-right"}
                  >
                    <div class="card">
                      <div class="card__header"></div>
                      <div class="card__body">
                        <h4 className="text-center">{intv.title}</h4>
                        {HTMLReactParser(intv.description)}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </div>
        <div className="cardwidth">
          <Container fluid>
            {initativesvalues.length == 0 ? (
              <Shimmer type={"card"} />
            ) : (
              <Row>
                {initativesvalues
                  .slice(3, initativesvalues.length - 1)
                  .map((intv) => (
                    <Col
                      sm={6}
                      Col
                      md={6}
                      key={intv._id}
                      data-aos={width < 768 ? "" : "fade-right"}
                    >
                      <div class="card">
                        <div class="card__header"></div>
                        <div class="card__body">
                          <h4 className="text-center">{intv.title}</h4>
                          {HTMLReactParser(intv.description)}
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>
            )}
          </Container>
        </div>
        <div className="section-div bgRed mt-4">
          <h5 className="text-center p-2">
            <StyleSpan color="#fff">
              AN EDUCATION WITH VALUES & CULTURAL FIESTAS
            </StyleSpan>
          </h5>
          <Container fluid>
            {edvalues.length == 0 ? (
              <Shimmer type={"card"} />
            ) : (
              <Row className="values-row">
                <SliderComponent settings={settings3}>
                  {edvalues.map((edv) => (
                    // eslint-disable-next-line react/jsx-key
                    <Col
                      sm={4}
                      Col
                      md={4}
                      data-aos={width < 768 ? "" : "zoom-in"}
                    >
                      <div class="card">
                        <div class="card__header"></div>
                        <div class="card__body">
                          <h4 className="text-center">{edv.title}</h4>
                          {HTMLReactParser(edv.description)}
                        </div>
                      </div>
                    </Col>
                  ))}
                </SliderComponent>
              </Row>
            )}
          </Container>
        </div>
        <div
          className="highlight-content"
          data-aos={width < 768 ? "" : "fade-up"}
        >

          <Container>
          {hightlights.length == 0 ? <Shimmer type={"text"}/> : <><h4>
              <StyleSpan color="#185b2d">
                {hightlights.length > 0 && hightlights[1].title.toUpperCase()}
              </StyleSpan>
            </h4>
            {hightlights.length > 0 &&
              HTMLReactParser(hightlights[1].description)}</>}
            
          </Container>
        </div>
      </div>
    </>
  );
}
