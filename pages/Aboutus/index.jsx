import React from "react";
import Layout from "../../components/Common/Layout";
import Mission from "../../components/Aboutus/Mission";
import Prayer from "../../components/Aboutus/Prayer";
import Highlights from "../../components/Aboutus/Highlights";
import Team from "../../components/Aboutus/Team";


export default function Aboutus() {
  return (
    <>
    <Layout>
    <div className="about-us">
       
        <div className="bgImage">

        </div>
        <Mission/>
        <Prayer/>
        <Highlights/>
        <Team/>
      
     </div>
    </Layout>
    
    </>
  );
}
