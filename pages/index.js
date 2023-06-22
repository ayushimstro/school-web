import React from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Header.module.css";
import Layout from "../components/Common/Layout";
import Card from "../components/Common/LayoutComponents/Card";
import EventCard from "../components/Common/LayoutComponents/EventCard";
import RenderHTML from "react-render-html";
import {
  StyleSpan,
  StyledButton,
} from "../components/stylecomponents/Header.styled";
import { Col, Container, Row } from "react-bootstrap";
import CounterUp from "../components/Common/Counter";
import SliderComponent from "../components/Common/Slider";
import { settings, settings2, settings3 } from "../utils/slidersettings";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCMSData,
  GetNewsData,
  GetGallerycData,
} from "../redux/slices/websiteslices";
import HTMLReactParser from "html-react-parser";
import { StyledBanner } from "../components/stylecomponents/Banner.styled";
import useWindowDimensions from "../components/Common/Dimensions";
import Link from "next/link";
import { useRouter } from "next/router";

// import Footer from '../components/Common/Footer';
export default function Home() {
  const arr = [1, 2, 3, 4];
  const dispatch = useDispatch();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { news, cms, gallery } = useSelector((state) => state.websitecontent);
  // const { cms } = useSelector((state) => state.cms);
  const NewsEvent = news.filter(
    (onenew) => onenew.eventType.toLowerCase() == "news"
  );
  const Videos = gallery.filter((ga) => ga?.assetExt == "Video");
  const GalleryImages = gallery.filter((ga) => ga?.assetExt !== "Video");
  const Events = news.filter(
    (onenew) => onenew.eventType.toLowerCase() == "event"
  );
  const features = cms.filter((cm) => cm.sectionType == "features");
  const Banner = cms.filter(
    (cm) => cm.sectionType == "banner" && cm.pageType == "home"
  );
  console.log(Videos, "VideBanner");
  useEffect(() => {
    async function GetNewss() {
      dispatch(GetNewsData());
      dispatch(GetCMSData("home"));
      dispatch(GetGallerycData());
    }
    GetNewss();
  }, [dispatch]);
  return (
    <Layout title={"Home"}>
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
      <div className="Feature-events">
        <Container>
          <Row>
            <Col md={6} className="event-slider2">
              <h2 className="text-center">
                Our <StyleSpan>Events</StyleSpan>
              </h2>
              <SliderComponent settings={settings}>
                {Events.map((eve, i) => (
                  <Col key={eve._id} md={3}>
                    <EventCard
                      type={eve?.eventType}
                      button={true}
                      image={
                        "https://w7.pngwing.com/pngs/894/996/png-transparent-school-building-cip-art-halton-catholic-district-school-board-student-building-school-angle-reading-school-supplies-thumbnail.png"
                      }
                      text={
                        eve?.eventDescription &&
                        HTMLReactParser(eve?.eventDescription)
                      }
                    />
                  </Col>
                ))}
              </SliderComponent>
            </Col>
            <Col md={6} className="event-slider">
              <h2 className="text-center">
                Our <StyleSpan color="#185b2d">Features</StyleSpan>
              </h2>
              <SliderComponent settings={settings}>
                {features.map((featu, i) => (
                  <Col key={featu._id} md={3}>
                    <EventCard
                      text={
                        featu?.description && RenderHTML(featu?.description)
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
          <StyleSpan color="#fff">Our Popular</StyleSpan>{" "}
          <StyleSpan color="#fff">Videos</StyleSpan>
        </h2>
        <Container>
          <Row>
            <SliderComponent settings={settings3}>
              {Videos.length > 0 &&
                Videos?.map((ne) => (
                  <Col key={ne._id} md={4}>
                    <Card
                      click={true}
                      title={ne.assetName}
                      tag={ne.assetExt}
                      Image={ne.assetUrl}
                      description={
                        ne.eventDescription &&
                        HTMLReactParser(ne.eventDescription)
                      }
                    />
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
              {NewsEvent?.map((ne) => (
                <Col key={ne._id} md={4}>
                  <Link
                    href={"/NewsDetail"}
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        localStorage.setItem("news", ne._id);
                      }
                    }}
                  >
                    <Card
                      title={ne.eventTitle}
                      click={false}
                      tag={ne.eventType}
                      Image={ne.Image}
                      description={
                        ne.eventDescription &&
                        HTMLReactParser(ne.eventDescription)
                      }
                    />
                  </Link>
                </Col>
              ))}
            </SliderComponent>
          </Row>
          <div className="d-flex justify-content-center mt-4">
            {" "}
            <StyledButton
              color="#185b2d"
              backgroundcolor="#fff"
              onClick={() => router.push("/News")}
            >
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
      <div className="news-section">
        <h2>
          School <StyleSpan color="#185b2d">Gallery</StyleSpan>
        </h2>
        <Container>
          <Row>
            <SliderComponent settings={settings3}>
              {GalleryImages?.map((ne) => (
                <Col key={ne._id} md={4}>
                  <Card
                    click={true}
                    title={ne.assetName}
                    tag={"Gallery"}
                    Image={ne.assetUrl}
                    description={
                      ne.eventDescription &&
                      HTMLReactParser(ne.eventDescription)
                    }
                  />
                </Col>
              ))}
            </SliderComponent>
          </Row>
          {/* <div className="d-flex justify-content-center mt-4">
            {" "}
            <StyledButton
              color="#185b2d"
              backgroundcolor="#fff"
              onClick={() => router.push("/News")}
            >
              See More News
            </StyledButton>
          </div> */}
        </Container>
      </div>
      {/* </Container> */}
    </Layout>
  );
}
