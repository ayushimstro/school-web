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
import { GetCMSData, GetNewsData } from "../redux/slices/websiteslices";
import HTMLReactParser from "html-react-parser";
import { StyledBanner } from "../components/stylecomponents/Banner.styled";
// import Footer from '../components/Common/Footer';
export default function Home() {
  const arr = [1, 2, 3, 4];
  const dispatch = useDispatch();
  const { news, cms } = useSelector((state) => state.websitecontent);
  // const { cms } = useSelector((state) => state.cms);
  const NewsEvent = news.filter(
    (onenew) => onenew.eventType.toLowerCase() == "news"
  );
  const Events = news.filter(
    (onenew) => onenew.eventType.toLowerCase() == "event"
  );
  const features = cms.filter((cm) => cm.sectionType == "features");
  const Banner = cms.filter((cm) => cm.sectionType == "banner" && cm.pageType == "home"
  );
  console.log(Banner,"Banner")
  useEffect(() => {
    async function GetNewss() {
      dispatch(GetNewsData());
      dispatch(GetCMSData("home"));
    }
    GetNewss();
  }, []);
  return (
    <Layout title={"Home"}>
      <SliderComponent settings={settings}>
        {Banner.map((ban) => (
          <StyledBanner key={ban._id} background={ban.image} />
        ))}
        
      </SliderComponent>
      <div className="Feature-events">
        <Container>
          <Row>
            <Col md={6} className="event-slider2">
              <h2 className="text-center">
                Our <span>Events</span>
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
                Our <span>Features</span>
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
              {NewsEvent?.map((ne) => (
                <Col key={ne._id} md={4}>
                  <Card
                    title={ne.eventTitle}
                    tag={ne.eventType}
                    Image={ne.Image}
                    description={
                      ne.eventDescription &&
                      HTMLReactParser(ne.eventDescription)
                    }
                  />
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
