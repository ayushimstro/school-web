import { useEffect, useState } from "react";
import React from "react";
import { StyleSpan } from "../../components/stylecomponents/Header.styled";
import { Container, Row, Col, Table, Nav, Tab, Tabs } from "react-bootstrap";
import Layout from "../../components/Common/Layout";
import useWindowDimensions from "../../components/Common/Dimensions";
import { useDispatch, useSelector } from "react-redux";
import { GetCMSData } from "../../redux/slices/websiteslices";
import Shimmer from "../../components/Common/Shimmereffect";
import HTMLReactParser from "html-react-parser";
import SliderComponent from "../../components/Common/Slider";
import { settings, settings2, settings3 } from "../../utils/slidersettings";

export default function Amaan() {
  const [key, setKey] = useState("home");
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const { cms } = useSelector((state) => state.websitecontent);
  const About = cms?.filter((cm) => cm.sectionType == "about");
  const Admission = cms?.filter((cm) => cm.sectionType == "admission");
  const Curriculum = cms?.filter((cm) => cm.sectionType == "curriculum");
  const Fee = cms?.filter((cm) => cm.sectionType == "fee");
  // console.log(Data, "Datatat");
  const Banner = cms.filter((cm) => cm.sectionType == "banner");

  useEffect(() => {
    async function getCMS() {
      dispatch(GetCMSData("amaanbranch"));
    }
    getCMS();
  }, []);
  return (
    <>
      <Layout>
        <div className="senior-branch">
          {Banner.length > 0 ? (
            <SliderComponent settings={settings}>
              {Banner?.map((ban) => (
                // eslint-disable-next-line react/jsx-key
                <div style={{ width: "100%" }}>
                  <img
                    src={ban.image}
                    height={"600px"}
                    width={"100%"}
                    className="header-images"
                  />
                </div>
              ))}
            </SliderComponent>
          ) : (
            <div className="bgImage"></div>
          )}
          <div className="about-senior bgRed ">
            {About.length == 0 ? (
              <Shimmer type={"text"} />
            ) : (
              <Container data-aos={width < 768 ? "" : "zoom-in"}>
                <h3 className="text-center">
                  <StyleSpan color="#fff">{About[0].title}</StyleSpan>
                </h3>
                {HTMLReactParser(About[0].description)}
              </Container>
            )}
          </div>
          <div className="admission">
            {Admission.length == 0 ? (
              <Shimmer type={"text"} />
            ) : (
              <>
                <h3 className="text-center">{Admission[0].title}</h3>
                <Container>
                  <Row>
                    <Col
                      sm={12}
                      md={12}
                      data-aos={width < 768 ? "" : "fade-up"}
                    >
                      <div class="card">
                        <div class="card__header"></div>
                        <div class="card__body">
                          {HTMLReactParser(Admission[0].description)}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </>
            )}
          </div>

          <div className="ciriculam bgRed">
            <h3 className="text-center">
              {" "}
              <StyleSpan color="#fff">Curriculum</StyleSpan>
            </h3>
            <Container data-aos={width < 768 ? "" : "zoom-in"}>
              {Curriculum.length > 0 && (
                <div className="card">
                  <div className="card__body">
                    {HTMLReactParser(Curriculum[0]?.description)}
                  </div>
                </div>
              )}
            </Container>
          </div>
          <div className="Fees-section">
            <Container>
              <div class="card">
                <div class="card__header"></div>
                <div class="card__body">
                  {Fee.length > 0 && HTMLReactParser(Fee[0].description)}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
}
