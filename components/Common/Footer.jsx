import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

export default function Footer() {
  const [key, setKey] = useState("senior");
  return (
    <>
      <div className="footer">
        <Container fluid>
          <Row>
            <Col sm={3} md={6} lg={6}>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="senior" title="ICSK Senior">
                  <Row>
                    <Col>
                      The Indian Community School(Senior) Salmiya <br />
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontSize: 17,
                        }}
                      >
                        Tel
                      </span>{" "}
                      <p>
                        # 00965 25629583, 00965 25659126,00965 25613260, 00965
                        25652308 Fax # 00965 25652308
                      </p>{" "}
                      Email : icsksenior@icsk-kw.com <br />
                      Working Hours : Sunday - Thursday (7.15 a.m. to 6.20 p.m.)
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                </Tab>
                <Tab eventKey="junior" title="ICKS Junior">
                  <Row>
                    <Col>
                      The Indian Community School (Junior) Salmiya
                      <br />
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontSize: 17,
                        }}
                      >
                        Tel
                      </span>{" "}
                      <p>
                        # 00965 25613344 / 00965 25634626 <br /> Fax # 00965
                        25628728
                      </p>{" "}
                      Email : icskjunior@icsk-kw.com <br />
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                </Tab>
                <Tab eventKey="khaitan" title="ICSK Khaitan">
                  <Row>
                    <Col>
                      The Indian Community School (Khaitan) <br />
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontSize: 17,
                        }}
                      >
                        Tel
                      </span>{" "}
                      <p># 00965 24717193</p> Email : icskkhaitan@icsk-kw.com{" "}
                      <br />
                      Working Hours : Sunday - Thursday (7.15 a.m. to 6.20 p.m.)
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                </Tab>
                <Tab eventKey="amman" title="ICSK Amman">
                  <Row>
                    <Col>
                      The Indian Community School (Amman St.) <br />
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontSize: 17,
                        }}
                      >
                        Tel
                      </span>{" "}
                      <p>
                        # 00965 25624405, 00965 25624267, 00965 25624397 <br />{" "}
                        Fax # 00965 25624318
                      </p>{" "}
                      Email : icskamman@icsk-kw.com <br />
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className="">
                <img src="/logo.png" className="footer-logo" />
              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <h3
                className="mb-4"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Quick Links
              </h3>
              <ul>
                <li>
                  <Link
                    className="links"
                    href="https://icskcloud.com/students/auth/login/"
                  >
                    {" "}
                    Students Portal
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    className="links"
                    href="https://icskcloud.com/teacher-admin/auth/login/"
                  >
                    {" "}
                    Teacher Staffing
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    className="links"
                    href="https://icskcloud.com/admin/auth/login/"
                  >
                    {" "}
                    Admin Staff
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    className="links"
                    href="http://www.icskkw.edumilestones.com/"
                  >
                    {" "}
                    Career Guidance
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
