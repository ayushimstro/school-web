import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Common/Layout";
import Card from "../components/Common/LayoutComponents/Card";
import EventCard from "../components/Common/LayoutComponents/EventCard";

import {
  StyleSpan,
  StyledButton,
} from "../components/stylecomponents/Header.styled";
import { Col, Container, Row } from "react-bootstrap";
import CounterUp from "../components/Common/Counter";
import SliderComponent from "../components/Common/Slider";
import { settings, settings2, settings3 } from "../utils/slidersettings";
// import Footer from '../components/Common/Footer';
export default function Home() {
  const arr = [1, 2, 3, 4];

  return (
    <Layout title={"Home"}>
      <div
        style={{ height: "1000px", color: "#000" }}
        className="headerBack"
      ></div>

      <div className="Feature-events">
        <Container>
          <Row>
            <Col md={6} className="event-slider2">
              <h2 className="text-center">
                Our <span>Events</span>
              </h2>
              <SliderComponent settings={settings}>
                {arr.map((i) => (
                  <Col key={i} md={3}>
                    <EventCard
                      type={"event"}
                      button={true}
                      image={
                        "https://w7.pngwing.com/pngs/894/996/png-transparent-school-building-cip-art-halton-catholic-district-school-board-student-building-school-angle-reading-school-supplies-thumbnail.png"
                      }
                      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                    />
                  </Col>
                ))}
              </SliderComponent>
            </Col>
            <Col md={6} className="event-slider">
              <h2 className="text-center">
                Our <span>Features</span>
              </h2>
              <SliderComponent settings={settings2}>
                {arr.map((i) => (
                  <Col key={i} md={3}>
                    <EventCard
                      text={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting"
                      }
                    />
                  </Col>
                ))}
              </SliderComponent>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="videos-section">
        <h2>
          Our Popular <StyleSpan color="#fff">Videos</StyleSpan>
        </h2>
        <Container>
          <Row>
            <SliderComponent settings={settings3}>
              {arr.map((i) => (
                <Col key={i} md={4}>
                  <Card />
                </Col>
              ))}
            </SliderComponent>
          </Row>
          {/* <StyledButton color="#185b2d" backgroundcolor="#fff">
            See More News
          </StyledButton> */}
        </Container>
      </div>
      <div className="news-section">
        <h2>
          News <StyleSpan color="#185b2d">Section</StyleSpan>
        </h2>
        <Container>
          <Row>
            <SliderComponent settings={settings3}>
              {arr.map((i) => (
                <Col key={i} md={4}>
                  <Card />
                </Col>
              ))}
            </SliderComponent>
          </Row>
          <div className="d-flex justify-content-center mt-4">
            {" "}
            <StyledButton color="#185b2d" backgroundcolor="#fff">
              See More News
            </StyledButton>
          </div>
        </Container>
      </div>
      <div className="event-section">
        <Container className="p-5" style={{ margin: "0 auto" }}>
          <Row>
            <CounterUp />
          </Row>
        </Container>
      </div>
      {/* </Container> */}
    </Layout>
  );
}
