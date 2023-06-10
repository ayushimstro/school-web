import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";

export default function ContactUs() {
  return (
    <>
      <Header />
      <div className="bgImage"></div>
      <div className="contact-us container">
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="ICSK admin">
            <div className="row">
              <div className="col-sm-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.3890432727103!2d48.05981567525006!3d29.3295921520864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf7621ccb0f409%3A0xfacd751aafeb8aaa!2s83H6%2BRXJ%2C%20Salmiya%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1686306893905!5m2!1sen!2sin” width=“800"
                  height="450"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-sm-3">
                <div className="contact-detail">
                  <h4 className="text-uppercase">
                    <span style={{ color: " #185b2d" }}>Contact us</span>
                  </h4>
                  <h6>THE INDIAN COMMUNITY SCHOOL - Khaitan BRANCH</h6>
                  <div className="mt-3">
                    <label>Phone:</label>
                    <span> 24717192, 24717193</span>
                  </div>
                  <div className="mt-3">
                    <label>Address:</label>
                    <span>
                      ABRAQ KHAITAN, STREET NO. 23,
                      <br /> BLOCK - 9, BLDG.NO. 900018,
                      <br />( PREVIOUSLY BIN NAZEER GOVT. KG. SCHOOL, OPP. MAIN
                      JAMIAH)
                    </span>
                  </div>
                  <div className="mt-3">
                    <label>Email:</label>
                    <span>sajdhajk@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Senior">
            Tab content for Profile
          </Tab>
          <Tab eventKey="contact" title="Junior">
            Tab content for Contact
          </Tab>
          <Tab eventKey="abc" title="Amaan">
            Tab content for Contact
          </Tab>
          <Tab eventKey="wer" title="Khaitan">
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}
