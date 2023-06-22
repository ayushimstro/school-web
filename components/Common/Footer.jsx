import React, { useEffect, useState } from "react";
import { Container,Row,Col } from "react-bootstrap";

export default function Footer() {

    return (
      <>
        <div className="footer">
          <Container fluid>
            <Row>
              <Col sm={3} md={3} lg={3}>
                <div className="">
                  <img src="/logo.png" className="footer-logo"/>
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
                <div className="mb-4">Links</div>
                <ul>
                  <li>Link1</li>
                  <li>Link2</li>
                  <li>Link3</li>
                  <li>Link4</li>
                </ul>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <div className="mb-4">Links</div>
                <ul>
                  <li>Link1</li>
                  <li>Link2</li>
                  <li>Link3</li>
                  <li>Link4</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
   
}