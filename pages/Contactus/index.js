import React, { useEffect, useState } from "react";
import { Tabs, Tab, Toast } from "react-bootstrap";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Layout from "../../components/Common/Layout";
import { useDispatch, useSelector } from "react-redux";
import { CreateENQ, GetBranch } from "../../redux/slices/websiteslices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactUs() {
  const [open, setOpen] = useState(false);
  const { branch } = useSelector((state) => state.websitecontent);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    EnquiryType: "",
    EnquiryName: "",
    Message: "",
    Branch: "",
  });
  useEffect(() => {
    async function Getbranch() {
      dispatch(GetBranch());
    }
    Getbranch();
  }, []);
  const OnHandleSubmit = async () => {
    await dispatch(CreateENQ(data));
    toast.success("Enquriy Sent to Admin. Team will get back to you soon");
    setOpen(false);
  };
  return (
    <Layout>
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
                  width={"100%"}
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
                  <button className="button" onClick={() => setOpen(!open)}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Senior">
            <div className="row">
              <div className="col-sm-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.3890432727103!2d48.05981567525006!3d29.3295921520864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf7621ccb0f409%3A0xfacd751aafeb8aaa!2s83H6%2BRXJ%2C%20Salmiya%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1686306893905!5m2!1sen!2sin” width=“800"
                  height="450"
                  width={"100%"}
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
                  <button className="button">Contact Us</button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Junior">
            <div className="row">
              <div className="col-sm-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.3890432727103!2d48.05981567525006!3d29.3295921520864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf7621ccb0f409%3A0xfacd751aafeb8aaa!2s83H6%2BRXJ%2C%20Salmiya%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1686306893905!5m2!1sen!2sin” width=“800"
                  height="450"
                  width={"100%"}
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
                  <button className="button">Contact Us</button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="abc" title="Amaan">
            <div className="row">
              <div className="col-sm-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.3890432727103!2d48.05981567525006!3d29.3295921520864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf7621ccb0f409%3A0xfacd751aafeb8aaa!2s83H6%2BRXJ%2C%20Salmiya%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1686306893905!5m2!1sen!2sin” width=“800"
                  height="450"
                  width={"100%"}
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
                  <button className="button">Contact Us</button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="wer" title="Khaitan">
            <div className="row">
              <div className="col-sm-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.3890432727103!2d48.05981567525006!3d29.3295921520864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf7621ccb0f409%3A0xfacd751aafeb8aaa!2s83H6%2BRXJ%2C%20Salmiya%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1686306893905!5m2!1sen!2sin” width=“800"
                  height="450"
                  width={"100%"}
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
                  <button className="button">Contact Us</button>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        center
        styles={{
          modal: {
            width: 500,
          },
        }}
      >
        <h2 className="text-center">Enquiry</h2>
        <div className="form mb-4">
          <label class="form-label">Name</label>
          <input
            type="text"
            onChange={(e) => setData({ ...data, EnquiryName: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="form mb-4">
          <label class="form-label">Equiry Type</label>
          <select
            class="form-select"
            onChange={(e) => setData({ ...data, EnquiryType: e.target.value })}
          >
            <option>General</option>
            <option>Parent</option>
          </select>
        </div>
        <div className="form mb-4">
          <label class="form-label">Branch</label>
          <select
            class="form-select"
            onChange={(e) => setData({ ...data, Branch: e.target.value })}
          >
            {branch?.map((bra) => (
              <option key={bra._id} value={bra._id}>
                {bra.branch_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form mb-4">
          <label class="form-label">Message</label>
          <textarea
            className="form-control"
            onChange={(e) => setData({ ...data, Message: e.target.value })}
          />
        </div>
        <div className="text-center">
          <button className="button" onClick={() => OnHandleSubmit()}>
            Submit
          </button>
        </div>
      </Modal>
      {/* <ToastContainer /> */}
    </Layout>
  );
}
