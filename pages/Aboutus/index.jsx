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
              <StyledBanner key={ban._id} background={ban.image} />
            ))}
          </SliderComponent>
          <Mission content={missionvission} />
          <Prayer prayer={prayer} />
          <Highlights hightlights={hightlights} />
          <Team />
        </div>
      </Layout>
    </>
  );
}
