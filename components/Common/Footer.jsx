import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Container fluid>
          <Row>
            <Col sm={3} md={3} lg={3}>
              <div className="">
                <img src="/logo.png" className="footer-logo" />
              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className="">
                <address>
                  Edward H. Levi Hall 5801 S. Ellis Ave. Chicago, IL 60637
                </address>
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
            {/* <Col sm={3} md={3} lg={3}>
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
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
}
