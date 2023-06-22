import { useState } from "react";
import React from "react";
import { StyleSpan } from "../../components/stylecomponents/Header.styled";
import { Container, Row, Col, Table,Nav,Tab,Tabs } from "react-bootstrap";
import useWindowDimensions from "../../components/Common/Dimensions";
import Layout from "../../components/Common/Layout";
export default function Khaitan() {
  const [key, setKey] = useState("home");
  const { width } = useWindowDimensions();
  return (
    <>
      <Layout>
        <div className="senior-branch">
          <div className="bgImage"></div>
          <div className="about-senior bgRed ">
            <Container data-aos={width < 768 ? "" : "zoom-in"}>
              <h3 className="text-center">
                <StyleSpan color="#fff">About Senior</StyleSpan>
              </h3>
              <p>
                The result oriented teaching has been instrumental in the
                students securing top ranks in the AISS he result oriented
                teaching has been instrumental he result oriented teaching has
                been instrumental he result oriented teaching has been
                instrumental he result oriented teaching has been instrumental
                and AISSC examinations{" "}
              </p>
              <p>
                The result oriented teaching has been instrumental in the
                students securing top ranks in the AISS he result oriented
                teaching has been instrumental he result oriented teaching has
                been instrumental he result oriented teaching has been
                instrumental he result oriented teaching has been instrumental
                and AISSC examinations{" "}
              </p>
              <p>
                The result oriented teaching has been instrumental in the
                students securing top ranks in the AISS he result oriented
                teaching has been instrumental he result oriented teaching has
                been instrumental he result oriented teaching has been
                instrumental he result oriented teaching has been instrumental
                and AISSC examinations{" "}
              </p>
            </Container>
          </div>
          <div className="admission">
            <h3 className="text-center">LKG Admission</h3>
            <Container>
              <Row>
                <Col sm={6} md={6} data-aos={width < 768 ? "" : "fade-up"}>
                  <div class="card">
                    <div class="card__header"></div>
                    <div class="card__body">
                      <h4>
                        The age requirements for admission to LKG for the
                        academic year 2019 - 2020 is as follows:
                      </h4>
                      <ul>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            Children born not later than 30th March, 2015.
                          </div>
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            Children born not later than 30th March, 2015.
                          </div>
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            Children born not later than 30th March, 2015.
                          </div>
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            Children born not later than 30th March, 2015.
                          </div>
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            Children born not later than 30th March, 2015.
                          </div>
                        </li>
                      </ul>
                      <p className="fw-bold">
                        Admission file duly filled in and supported by relevant
                        documents* and fees must be submitted in the school
                        office on the given date.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={6} data-aos={width < 768 ? "" : "fade-up"}>
                  <div class="card">
                    <div class="card__body">
                      <h4>
                        Mere registration / collecting an admission file from
                        the school does not guarantee admission
                      </h4>
                      <ul>
                        <li>
                          {" "}
                          <img src="data:image/png;base64,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" />
                          <div>
                            Three passport size photographs of the student..
                          </div>
                        </li>
                        <li>
                          {" "}
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEX///8AgAAAewCgwqAAfQBJoEkAegDi8eK93L0AdQD2+fYzlzMAeAAAggCy1bKjyKPX69eqz6objxsAhgDM5cyu1a4NiA3D38Pv+O/2/Pbn8+eVxpXf798tkC3T6NOfyZ8+lj4gjCBxs3FirGKTxZOJvImAuIBMm0xVolV4tnimz6aJwIlqrmpTpFMqlCqXwpd3rHdkpGRaoFoxjjFCnUJFmEVvq28tZY/HAAALt0lEQVR4nN2daUPiPBDHaXYMiIXF5UbORfEC3cdd/f4f7SmXQjJJJ+0EUv8vC9T+TJpjrpRKWVQ9pzI9sU298e3iz8d/b/f300R/Z6PZaDTrbFVTJEy6zCb5eQPY/YXkjyZP8Hd6//bfn8Xt9bjcz4nXur3vxBI0RefU/iGElDH8XdZ7mfGGdx0pzwuTLgAJ80oWvGp9GstzPz5REDdfnRsy4Qu99Y4km3dOjPVR8L1Tk5xdk/kGD8Vqv50gfh/SAJ9qReRbC2BC4Os9xOd+0ByK31LfxuFInPspc0mMGnbAblTUHroXCOvkWD/zaoVFom4DPPfTsQiejF30ewAmU6NhZmx9F8BkSEXfxUHn+xBG0RghfLAArjcqG31u106t/R+WXxKWYRFG+rx4a5rok9t3po/1SqWbqLXVuHGkMr8aisa7v5w8QyVRvf50s5hfRcIEKR60UcawUwLx63c3+xbTsxrPIxNjrM4ZM/yL8qUdLN5GfeM2qHn84DdoE0Jzwm/34Vb1qYkuNMXj4bcGNfQ7D2G33179OdqKsnXwnUfkvwC1m7M9s6vaTYQR3r6+MMQ+r3XP98TOamGI8mub8VtvwmIBJo2ErFdguf90gAwzzWIBlkpjpBXjvVXjVic0L8+DVQXppne7z/S5UCytNwtTz1pDwWz7SUv/5CX8aRDRldZScrsAX2jjjN0QEKzGWjcV2246VdFhdeZHzaqlRjJdX0YmQ2xzVQQ1NJKonFyuq9sm0DYehZHWiJvNvvYagsVWFbg0S5NYJFfvlavQyetWPZ+q6sQH78nFpor9mH6nYKXPidVSVb0kizlVbKWZKmRCqF4TRR1J12qoL+JlQnipXAOiEy5IDTTCAUIY4Ma+12i1BpQv9hHCgUYY3FDaWs5qAjpLSufSJsQhQhjYqrv3uLOKig7Bw6sRNkoNbUnj/6Fd1F99DoUgLlLcn6WSOvfFreAJHw/HeqjdpPQwCmF0micnSl2HiZV9MkMIWyph80TPTlJP29VC0/o2/lK+nyy9wyZErICRtL2NRSPE3e62ZiQQQueEBCkaGPxFAEvT/I8QVlTCXyeFsGpujO0RM8P+QCWU9ZAJ25boTxC36G9eikQ4VNtDacYltrxUx96gCXGf2SEi8iOEsK50hWAIJ6kBdpoju4QQXgdL2ECdtsePith1i0NYvSBE99T0rWxxCPHAAkVHfuytKIQvZ+DR1ErvoxFqNEMIr1XCqzMAqepT+mjy+LobVyP8GSahbvZEJcraLwtCSIySFHP9p/8KQdjXXZ2YoKM3YUnt3mES6i5bnBCLNSgEYZfEF4kHbF1aBMKeuj0wtGAHNZ8WgfA3bRyVeDwMQvgzMMIK8SU0xBqohOJHaITEPho1Ddao8Akx4xrWhCZbVPCExJwWWJncR6ETDuyGi0+Z+mj4hGbj2pGk2V4aOKHNuHb4iJaYrbAJywYDsArYsVj1wyYk9lFhc80ETfiUv4+GTVgmGS6ScdTqzg+Z8CH3OLoWQvhDufG5CCdEw0VK7CuF8OI0RIoIBuDN0+F7pi8FS0gyAEeW9ehewRKSDMDpfTRcQi3gztCCTcT2dKxACauqDdBEmJ7nEighkrSDAiL2UVVhEup5Ejhg2ji6VpCE/RHRxN0m3CxIQqqTgtBHwyQkOimgQwqhDZCwryUlGQgpfTRIwgWxjxLzBcMjpPbRGamPBkjYpxku1mExNAVH+Eh0UpBzWkMjJNb8gRdyhkRghNS5HuiJSoEREvuo+E2/ZViEXVrtO3hxyHEJirBPLNsELsUPgiIkOtKkUz5kSIQV4qbwyinTLCDCHrW0mFuBjoAIl8Q+unC7bTiEWo48LqdxdK1gCHtEJwXoEaR2BUP4RnSkPbveOBRCNWzX1IL/nPNZAyHES4shcu2jwRC+EzeFzn2Uj3B48/Fxk2phN+mJOI5m8fPxEPYXkQSQ0V22nGhyH81S+oCFcDjbjRNymil131ZG9PDZMhXE4yCsfJUNtcZ9mDQh9tFs4wED4dNhPWxwL+um1XUwqJbhn8dCqORbQeRarodoAJYZizbmJtS7WOxWu+7Vax/NT4g5o0nV+vciO3uzFljJSXiDriZdEIl91BrY5ZHQFPJCf2fuOAK7/BGaY3piIuJYraNiAEwPSPBC+GTpYLTZmWoANiQa+Ca0R2CTEKmOtDwV8bITpqVBSDw9/lBdYhg+zdnLTdhKPXsmdbihOtKIzl5mQkp8MqQgErN9aAEJ7ISk+GT7u2gqa6/+n5r5So1lJCS6UGLLu9gjZlI4ONI4CbGC5pgs7yLxFi6ONE5C4p7V8i5SM9JmecvhZSOs0vJy1zJMGj2sZDpGmLsqZcY2JAbwroW/i9RMivyFRTMSEj19G2EmQGq2j6uTgo9QrWFjlW6Jp57R4+Ts5SXsX7gcxharDrEVcVPo6EjjJCwN6GONjkjMpIArjqKbmdelQ2J67u62hyNGmfhLYKl9m31vMSSO91vJg4mb2EezOClYCUtj4rJrq3i+t/gTMyngHwtgrj1+y+nUMjnfvlXEbJ+oxlSfOZedBj3LxSix2izAiJkU2ZwU3ISuiFcDcpQ6Vx/NbS/tOiHCqDGmOinYKmzntXlX3BBnRMMFWx9l8FtUfBxUyulYz+97qng4Djmzk4JI6JgHXHfqqBQJzpOXODKd68ytyHuqDUsuN++hwdDMYwD2Q1hqc7Yi85kvTPn4jIjcp4NxVRxocx3fnc9J4ZGQDZH9yBe+qhE8HZX/BDvGuhgciDBjPy2Es/JHO/+kwWFc80iYvxVZjGs+CfMiwsjDiTbM9WnyjajCPQLYnVD+yFcZMs+7yGRcSyPMW/sye0eFqZdTl/ire2ZG5DKueSfM2lEJ0SmhEGYbbviMa4q81KDN0lH5jGuK/FS7dkdMKUmWQ54qlru+i7ki1+xCCFnORnBrRfZN4YG8nf7ghIidLcIlf+dbOIyoMl/kml0eT/AgI8Ivn4dk+jyjhNpR80cF2YQQ8p2GRDMVu6XXO8vveU91Qkf1YLg4kucTrQitiBx+wyrfp5Kl+hf9bAoPhJwsp50OmOv8wxQvMUx9H1Tr/4THrr2jZku5c9AJzrC0BaXE3hbcnzrFKZ0tY2jRKdLEEUL+84DHplasZU9nIus0Jx4bjmZMlhf+hRAOPZzpPMQiofi9MJjUILOE0MvJ44MLLRYqfxg+Seq/Nm54Oj2+P1enWec6LNmkEQ5LVY2QZwP+fGTZgNppAPsq4eUAIWQyg1Vmnz0V5Mr7VL+Vlu2/JlTfGDaHSW/RiaWUcVy7uPa9WNtLyxW/rJaqyiV6Ic10DVqTm5t26wTT4F5ahpyslvrqDEKpmh2stASyWtJ73tSG7ZxkWPciLU8V3pOrdyq2OMXaw4+0eqgbR7qWPnmmEy44pB10vTHN6iV/PIRInEZ6+XrYjHL3KnhhG1FrQphurr9qa0jh0ezuUXrl7F08S0NLTMubUH0e9fVN296yp5dUOc1Oh1l6MjXMdh8h9dOcyuqEIaQyyWduubYgj9hDd/2rojNE8ec2CcndgcirA4VdWOGOg+T+AcIPEWeSgG+h/gR5sGVDS4eDbws8n24xn9DRcImXMpRXJ9q35tTwCs+QO9rK45meUHv2F1PApcEz7khQaywbSjiJzl3YjIPnDp5Jrzkqx6ZUSFFbVU5lg3BVtfJQM1UKiLXtgzkjGWT0slou7l5fJ5PJ007tuq4Kn5C7t/d/OnmK19e7xXL1EkmjFwipA161nSEJAELItcT5tXsOsAViwT1i9e0Rq6kVQYA7gYZcqT5nF5jqM6SXLCuGwGyk6H6PVrTFJLW+ASII656h4VQaIkSl+oDK77QqCKFKTlMdS/1HWpHRMHW5pHg/68aVUOgSEbGq5GBuXg0FLBBz+i6hO42LxgjxXydTfbU+uiwSI1yO6s47oO49FKSzJs/5kM3VUn6dJj8Om3J9CsX0NYeXuXz9MZJxGLsmVesYATn7uM7vRO91r3/+CFE/r7sE/8r/XQvuNk18n1IAAAAASUVORK5CYII=" />
                          <div>
                            Three passport size photographs of the student..
                          </div>
                        </li>
                        <li>
                          {" "}
                          <img src="data:image/png;base64,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" />
                          <div>
                            Three passport size photographs of the student..
                          </div>
                        </li>
                        <li>
                          {" "}
                          <img src="data:image/png;base64,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" />
                          <div>
                            Three passport size photographs of the student..
                          </div>
                        </li>
                        <li>
                          {" "}
                          <img src="data:image/png;base64,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" />
                          <div>
                            Three passport size photographs of the student..
                          </div>
                        </li>
                      </ul>
                      <p className="fw-bold">
                        The originals of the above documents also must be
                        produced at the time of admission which will be returned
                        after verification.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="admission small-adm">
            <h3 className="text-center">UKG Admission</h3>
            <Container>
              <Row>
                <Col sm={6} md={6} data-aos={width < 768 ? "" : "fade-up"}>
                  <div class="card">
                    <div class="card__header"></div>
                    <div class="card__body">
                      <h4>
                        The age requirements for admission for the academic year
                        2019 - 2020 is as follows:
                      </h4>
                      <ul>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            UKG(PREP) -Students born not later than – 30th
                            March,
                          </div>
                          2014
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />{" "}
                          <div>
                            CLASS I -Students born not later than – 30th March,
                            2013
                          </div>
                        </li>
                        <li>
                          {" "}
                          <img src="data:image/png;base64,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" />{" "}
                          <div>
                            Registration will commence from January 2nd.
                          </div>
                        </li>
                        <li>
                          {" "}
                          <img src="data:image/png;base64,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" />{" "}
                          <div>
                            Children born not later than 30th March, 2015.
                          </div>
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />{" "}
                          <div>
                            {" "}
                            Selected students will be intimated to collect
                            admission
                          </div>
                        </li>
                      </ul>
                      <p className="fw-bold">
                        Admission file duly filled in and supported by relevant
                        documents* and fees must be submitted in the school
                        office on the given date.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={6} data-aos={width < 768 ? "" : "fade-up"}>
                  <div class="card card-height">
                    <div class="card__header"></div>
                    <div class="card__body">
                      <h4>
                        Mere registration / collecting an admission file from
                        the school does not guarantee admission
                      </h4>

                      <ul>
                        <li>
                          {" "}
                          <img src="data:image/png;base64,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" />
                          <div>
                            Three passport size photographs of the student..
                          </div>
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            {" "}
                            Photocopies of the passport of the student, father
                            and
                          </div>
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            Three passport size photographs of the student.
                          </div>
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            {" "}
                            Copies of Civil-id of student, father and mother..
                          </div>
                        </li>
                        <li>
                          <img src="data:image/png;base64,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" />
                          <div>
                            Three passport size photographs of the student
                          </div>
                          .
                        </li>
                      </ul>
                      <p className="fw-bold">
                        The originals of the above documents also must be
                        produced at the time of admission which will be returned
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="ciriculam bgRed">
            <h3 className="text-center">
              {" "}
              <StyleSpan color="#fff">Curriculum</StyleSpan>
            </h3>
            <Container data-aos={width < 768 ? "" : "zoom-in"}>
              <p>
                The School is affiliated to the Central Board of Secondary
                Education and is recognized by the Ministry of Education, State
                of Kuwait. The medium of instruction is English and the second
                language for all classes up to VIII is Hindi. Arabic is the
                third language up to class VIII. Students can opt for French or
                Hindi in class IX and X. In classes XI and XII three streams are
                offered - Commerce, Science and Humanities. The Syllabus for
                classes VI to XII is according to the guidelines laid down by
                the NCERT, with classes IX to XII following NCERT books.
                Physical Education, Art, Music and Work Experience are an
                essential part of the curriculum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
              <Row>
                <Col sm={6} md={6} data-aos={width < 768 ? "" : "fade-up"}>
                  <div className="card">
                    <div className="card__body">
                      <h3>SCHEME OF STUDIES (KG-5)</h3>

                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={6} data-aos={width < 768 ? "" : "fade-up"}>
                  <div className="card">
                    <div className="card__body">
                      <h3>SCHEME OF STUDIES (KG-5)</h3>

                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12} data-aos={width < 768 ? "" : "zoom-in"}>
                  <div className="card mt-4">
                    <div className="card__body">
                      <h3>Overall Streams</h3>
                      <Table responsive="sm">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="Fees-section">
            <Container>
              <p>
                Afternoon batches for class XI students are functional at
                ICSK(Senior) with various options to suit the career aptitudes
                of students, and of classes VI, VII, VII & IX afternoon batches
                are functional at ICSK(Amman)
              </p>
              <div className="academic-year">
                <h3>
                  Tuition fee structure for the academic year 2019 - 2020.
                </h3>
                <Table responsive data-aos={width < 768 ? "" : "zoom-in"}>
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Per Year</th>
                      <th>1st Installment</th>
                      <th>2nd Installment</th>
                      <th>2nd Installment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> LKG-UKG</td>
                      <td>KD. 340.000</td>
                      <td>KD. 340.000</td>
                      <td>KD. 340.000</td>
                      <td>KD. 340.000</td>
                    </tr>
                    <tr>
                      <td> LKG-UKG</td>
                      <td>KD. 340.000</td>
                      <td>KD. 340.000</td>
                      <td>KD. 340.000</td>
                      <td>KD. 340.000</td>
                    </tr>
                    <tr>
                      <td> LKG-UKG</td>
                      <td>KD. 340.000</td>
                      <td>KD. 340.000</td>
                      <td>KD. 340.000</td>
                      <td>KD. 340.000</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div
                className="fee-details mt-4"
                data-aos={width < 768 ? "" : "zoom-in"}
              >
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Additional tuition fee">
                    <Table hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td colSpan={2}>Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab>
                  <Tab eventKey="profile" title="Transport Fee">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Stage</th>
                          <th>Per Year</th>
                          <th>1st Installment</th>
                          <th>2nd Installment</th>
                          <th>2nd Installment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> LKG-UKG</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                        </tr>
                        <tr>
                          <td> LKG-UKG</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                        </tr>
                        <tr>
                          <td> LKG-UKG</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab>
                  <Tab eventKey="contact" title="Khaitan Route">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Stage</th>
                          <th>Per Year</th>
                          <th>1st Installment</th>
                          <th>2nd Installment</th>
                          <th>2nd Installment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> LKG-UKG</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                        </tr>
                        <tr>
                          <td> LKG-UKG</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                        </tr>
                        <tr>
                          <td> LKG-UKG</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab>
                  <Tab eventKey="asd" title="ONE WAY TRANSPORT">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Stage</th>
                          <th>Per Year</th>
                          <th>1st Installment</th>
                          <th>2nd Installment</th>
                          <th>2nd Installment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> LKG-UKG</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                        </tr>
                        <tr>
                          <td> LKG-UKG</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                        </tr>
                        <tr>
                          <td> LKG-UKG</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                          <td>KD. 340.000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab>
                </Tabs>
              </div>
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
}
