import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Common/Layout";
import Card from "../components/Common/LayoutComponents/Card";
import {
  StyleSpan,
  StyledButton,
} from "../components/stylecomponents/Header.styled";
import { Col, Container, Row } from "react-bootstrap";
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
          News <StyleSpan color="#810000">Section</StyleSpan>
        </h2>
        <Container>
          <Row>
            {arr.map((i) => (
              <Col key={i} md={4}>
                <Card />
              </Col>
            ))}
          </Row>
          <StyledButton>See More News</StyledButton>
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
          <StyledButton color="#810000" backgroundcolor="#fff">
            See More News
          </StyledButton>
        </Container>
      </div>
    </Layout>
  );
}
