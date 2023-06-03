import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import {
    StyleSpan
  } from "../stylecomponents/Header.styled";
export default function Mission(){
    return(
        <>
        <div className="our-mission mt-4">
        <h2 className="text-center" data-aos="fade-up">
          Vision and <StyleSpan color="#810000">Mission</StyleSpan>
        </h2>
            <Container>
                <Row>
                    <Col sm={6} Col md={6} data-aos="fade-right">
                    <div class="card">
                        <div class="card__header">
                           
                        </div>
                        <div class="card__body">

                            <h4 className="text-center">Vision</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
                                atque quidem!
                            </p>
                        </div>
                        </div>

                    </Col>
                    <Col sm={6} Col md={6} data-aos="fade-left">
                    <div class="card">
                        <div class="card__header">
                           
                        </div>
                        <div class="card__body">
                            
                            <h4 className="text-center">Mission</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
                                atque quidem!
                            </p>
                        </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>

        </>
    )
}