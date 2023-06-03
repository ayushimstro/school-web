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
// import Footer from '../components/Common/Footer';
export default function Home() {
  const arr = [1, 2, 3];
  return (
    <Layout title={"Home"}>
      <div
        style={{ height: "1000px", color: "#000" }}
        className="headerBack"
      ></div>
      <div className="news-section">
        <h2>
          News <StyleSpan color="#185b2d">Section</StyleSpan>
        </h2>
        <Container>
          <Row>
            {arr.map((i) => (
              <Col key={i} md={4}>
                <Card />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center mt-4">
            {" "}
            <StyledButton color="#185b2d" backgroundcolor="#fff">
              See More News
            </StyledButton>
          </div>
        </Container>
      </div>
      <div className="videos-section">
        <h2>
          Our Popular <StyleSpan color="#fff">Videos</StyleSpan>
        </h2>
        <Container>
          <Row>
            {arr.map((i) => (
              <Col key={i} md={4}>
                <Card />
              </Col>
            ))}
          </Row>
          {/* <StyledButton color="#185b2d" backgroundcolor="#fff">
            See More News
          </StyledButton> */}
        </Container>
      </div>
      <div className="event-section">
        <h2>
          Our <StyleSpan color="#185b2d">Events</StyleSpan>
        </h2>
        <Container>
          <Row>
            {arr.map((i) => (
              <Col key={i} md={4}>
                <EventCard />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center mt-4">
            {" "}
            <StyledButton color="#185b2d" backgroundcolor="#fff">
              See More Events
            </StyledButton>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
