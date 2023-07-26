/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { StyleSpan } from "../stylecomponents/Header.styled";
import { Container, Row, Col, Tab, Tabs, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetTeamData } from "../../redux/slices/websiteslices";
import SliderComponent from "../Common/Slider";
import { settings3 } from "../../utils/slidersettings";
export default function Team({ width }) {
  const { team } = useSelector((state) => state.websitecontent);
  const [key, setKey] = useState("home");
  const dispatch = useDispatch();
  useEffect(() => {
    async function GetT() {
      dispatch(GetTeamData());
    }
    GetT();
  }, []);
  const BOT = team.filter((tem) => tem.TeamType == "Bot");
  const Principles = team.filter((tem) => tem.TeamType == "Principles");
  const VicePrinciples = team.filter((tem) => tem.TeamType == "Viceprinciples");
  const HOD = team.filter((tem) => tem.TeamType == "HOD");
  const AHOD = team.filter((tem) => tem.TeamType == "AHOD");
  return (
    <>
      <div className="team bgRed mb-4">
        <h3 className="text-center">
          {" "}
          <StyleSpan color="#fcc92f">TEAM</StyleSpan>
        </h3>

        <div
          className="fee-details mt-4 p-4"
          data-aos={width < 768 ? "" : "zoom-in"}
        >
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Board of Trustees">
              <Container fluid>
                <Row>
                  {BOT.map((bt) =>
                    BOT.length > 3 ? (
                      <SliderComponent settings={settings3}>
                        <Col
                          sm={3}
                          md={3}
                          data-aos={width < 768 ? "" : "zoom-in"}
                        >
                          <div class="card">
                            <div class="card__header2">
                              <img
                                src={bt.image}
                                alt="card__image"
                                class="card__image"
                                width="600"
                              />
                            </div>
                            <div class="card__body">
                              <h4> {bt.memberName}</h4>
                              <p>{bt.position}</p>
                            </div>
                          </div>
                        </Col>
                      </SliderComponent>
                    ) : (
                      <Col
                        sm={3}
                        md={3}
                        data-aos={width < 768 ? "" : "zoom-in"}
                      >
                        <div class="card">
                          <div class="card__header2">
                            <img
                              src={bt.image}
                              alt="card__image"
                              class="card__image"
                              // width="600"
                            />
                          </div>
                          <div class="card__body">
                            <h4> {bt.memberName}</h4>
                            <p>{bt.position}</p>
                          </div>
                        </div>
                      </Col>
                    )
                  )}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="P" title="Principles">
              <Container fluid>
                <Row>
                  {Principles.map((bt) =>
                    Principles.length > 3 ? (
                      <SliderComponent settings={settings3}>
                        <Col
                          sm={3}
                          md={3}
                          data-aos={width < 768 ? "" : "zoom-in"}
                        >
                          <div class="card">
                            <div class="card__header2">
                              <img
                                src={bt.image}
                                alt="card__image"
                                class="card__image"
                                width="600"
                              />
                            </div>
                            <div class="card__body">
                              <h4> {bt.memberName}</h4>
                              <p>{bt.position}</p>
                              {bt.branch ? (
                                <p>
                                  Branch -{" "}
                                  <span
                                    color="#185b2d"
                                    className="tag tag-blue"
                                  >
                                    {bt.branch.branch_name}
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </Col>
                      </SliderComponent>
                    ) : (
                      <Col
                        sm={3}
                        md={3}
                        data-aos={width < 768 ? "" : "zoom-in"}
                      >
                        <div class="card">
                          <div class="card__header2">
                            <img
                              src={bt.image}
                              alt="card__image"
                              class="card__image"
                              // width="600"
                            />
                          </div>
                          <div class="card__body">
                            <h4> {bt.memberName}</h4>
                            <p>{bt.position}</p>
                            {bt.branch ? (
                              <p>
                                Branch -{" "}
                                <span color="#185b2d" className="tag tag-blue">
                                  {bt.branch.branch_name}
                                </span>
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Col>
                    )
                  )}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="VP" title="Vice Principles">
              <Container fluid>
                <Row>
                  {VicePrinciples.map((bt) =>
                    VicePrinciples.length > 3 ? (
                      <SliderComponent settings={settings3}>
                        <Col
                          sm={3}
                          md={3}
                          data-aos={width < 768 ? "" : "zoom-in"}
                        >
                          <div class="card">
                            <div class="card__header2">
                              <img
                                src={bt.image}
                                alt="card__image"
                                class="card__image"
                                width="600"
                              />
                            </div>
                            <div class="card__body">
                              <h4> {bt.memberName}</h4>
                              <p>{bt.position}</p>
                              {bt.branch ? (
                                <p>
                                  Branch -{" "}
                                  <span
                                    color="#185b2d"
                                    className="tag tag-blue"
                                  >
                                    {bt.branch.branch_name}
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </Col>
                      </SliderComponent>
                    ) : (
                      <Col
                        sm={3}
                        md={3}
                        data-aos={width < 768 ? "" : "zoom-in"}
                      >
                        <div class="card">
                          <div class="card__header2">
                            <img
                              src={bt.image}
                              alt="card__image"
                              class="card__image"
                              // width="600"
                            />
                          </div>
                          <div class="card__body">
                            <h4> {bt.memberName}</h4>
                            <p>{bt.position}</p>
                            {bt.branch ? (
                              <p>
                                Branch -{" "}
                                <span color="#185b2d" className="tag tag-blue">
                                  {bt.branch.branch_name}
                                </span>
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Col>
                    )
                  )}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="HOD" title="Head of Departments">
              <Container fluid>
                <Row>
                  {HOD.map((bt) =>
                    HOD.length > 3 ? (
                      <SliderComponent settings={settings3}>
                        <Col
                          sm={3}
                          md={3}
                          data-aos={width < 768 ? "" : "zoom-in"}
                        >
                          <div class="card">
                            <div class="card__header">
                              <img
                                src={bt.image}
                                alt="card__image"
                                class="card__image"
                                width="600"
                              />
                            </div>
                            <div class="card__body">
                              <h4> {bt.memberName}</h4>
                              <p>{bt.position}</p>
                              {bt.branch ? (
                                <p className="tag tag-blue">
                                  Branch-{bt.branch.branch_name}
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </Col>
                      </SliderComponent>
                    ) : (
                      <Col
                        sm={3}
                        md={3}
                        data-aos={width < 768 ? "" : "zoom-in"}
                      >
                        <div class="card">
                          <div class="card__header">
                            <img
                              src={bt.image}
                              alt="card__image"
                              class="card__image"
                              // width="600"
                            />
                          </div>
                          <div class="card__body">
                            <h4> {bt.memberName}</h4>
                            <p className="tag tag-blue">{bt.position}</p>
                            {bt.branch ? (
                              <p>
                                Branch -{" "}
                                <span color="#185b2d" className="tag tag-blue">
                                  {bt.branch.branch_name}
                                </span>
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Col>
                    )
                  )}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="AHOD" title="Asst. Head of Departments">
              <Container fluid>
                <Row>
                  {AHOD.map((bt) =>
                    AHOD.length > 3 ? (
                      <SliderComponent settings={settings3}>
                        <Col
                          sm={3}
                          md={3}
                          data-aos={width < 768 ? "" : "zoom-in"}
                        >
                          <div class="card">
                            <div class="card__header">
                              <img
                                src={bt.image}
                                alt="card__image"
                                class="card__image"
                                width="600"
                              />
                            </div>
                            <div class="card__body">
                              <h4> {bt.memberName}</h4>
                              <p>{bt.position}</p>
                              {bt.branch ? (
                                <p className="tag tag-blue">
                                  Branch-{bt.branch.branch_name}
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </Col>
                      </SliderComponent>
                    ) : (
                      <Col
                        sm={3}
                        md={3}
                        data-aos={width < 768 ? "" : "zoom-in"}
                      >
                        <div class="card">
                          <div class="card__header">
                            <img
                              src={bt.image}
                              alt="card__image"
                              class="card__image"
                              // width="600"
                            />
                          </div>
                          <div class="card__body">
                            <h4> {bt.memberName}</h4>
                            <p className="tag tag-blue">{bt.position}</p>
                            {bt.branch ? (
                              <p>
                                Branch -{" "}
                                <span color="#185b2d" className="tag tag-blue">
                                  {bt.branch.branch_name}
                                </span>
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Col>
                    )
                  )}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="DOC" title="Department of Counselling">
              <Container fluid>
                <Row>
                  <Col sm={3} md={3} data-aos={width < 768 ? "" : "zoom-in"}>
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
                  <Col sm={3} md={3} data-aos={width < 768 ? "" : "zoom-out"}>
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
                  <Col sm={3} md={3} data-aos={width < 768 ? "" : "zoom-up"}>
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
                  <Col sm={3} md={3} data-aos={width < 768 ? "" : "zoom-in"}>
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
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
