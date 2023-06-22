/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import Layout from "../../components/Common/Layout";
import Mission from "../../components/Aboutus/Mission";
import Prayer from "../../components/Aboutus/Prayer";
import Highlights from "../../components/Aboutus/Highlights";
import Team from "../../components/Aboutus/Team";
import CommonSLider from "../../components/Slider";
import { settings } from "../../utils/slidersettings";
import { useDispatch, useSelector } from "react-redux";
import { GetCMSData } from "../../redux/slices/websiteslices";
import { StyledBanner } from "../../components/stylecomponents/Banner.styled";
import SliderComponent from "../../components/Common/Slider";
import useWindowDimensions from "../../components/Common/Dimensions";
export default function Aboutus() {
  const { cms } = useSelector((state) => state.websitecontent);
  const dispatch = useDispatch();
  const banner = cms.filter(
    (cm) => cm.sectionType == "banner" && cm.pageType == "about"
  );
  const missionvission = cms.filter(
    (cm) => cm.sectionType == "mission" || cm.sectionType == "vission"
  );
  const prayer = cms.filter((cm) => cm.sectionType == "prayer");
  const hightlights = cms.filter(
    (cm) => cm.sectionType == "highlights" || cm.sectionType == "charity"
  );
  // const coaching = cms.filter((cm) => cm.sectionType == "coaching");
  console.log(hightlights, "missionvission");
  const { width } = useWindowDimensions();
  useEffect(() => {
    async function getCMSD() {
      dispatch(GetCMSData("about"));
    }
    getCMSD();
  }, []);
  return (
    <>
      <Layout>
        <div className="about-us">
          <SliderComponent settings={settings}>
            {banner.map((ban) => (
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
          <Mission content={missionvission} width={width} />
          <Prayer prayer={prayer} width={width} />
          <Highlights hightlights={hightlights} width={width} cms={cms} />
          <Team width={width} />
        </div>
      </Layout>
    </>
  );
}
