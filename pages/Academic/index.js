import React from "react";
import { Container, Accordion, Tabs, Tab, Table,Row,Col } from "react-bootstrap";
import { StyleSpan } from "../../components/stylecomponents/Header.styled";
import Layout from "../../components/Common/Layout";
export default function Academic() {
  return (
    <>
    <Layout>
      <div className="">
        <div className="bgImage"></div>

        <div className="board-exam bgRed">
          <Container>
            <h3 className="text-center">
              <StyleSpan color="#fff">Board of Examination</StyleSpan>
            </h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Classes 1 to 5</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Classes VI to VX</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Classes X</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Classes X</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>NIOS</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
        <div className="coaching">
          <Container>
            {" "}
            <h3 className="text-center">
              <StyleSpan color="#810000">Enrichment coaching</StyleSpan>
            </h3>
            <p data-aos="zoom-in">
              Enrichment classes for the high achievers are inculcated as a
              special feature of the school calendar of curricular activities.
              The school identifies the apex club of students through periodic
              and term examinations, and through scholastic programs as well.
              The school provides them with counselling sessions and extra
              coaching classes involving the use of additional practice
              materials so that they can be effectively engaged and excel in
              their studies and which will also bring laurels to the school in
              the board exam. The Apex Club is led by the team of academic
              supervisors and subject experts where plans are being made to
              schedule enrichment classes with a difference. The same will be
              updated shortly
            </p>
          </Container>
        </div>
        <div className="remedial-coaching bgRed">
          <Container>
            {" "}
            <h3 className="text-center">
              <StyleSpan color="#fff">Remedial coaching</StyleSpan>
            </h3>
            <p data-aos="zoom-out">
              Enrichment classes for the high achievers are inculcated as a
              special feature of the school calendar of curricular activities.
              The school identifies the apex club of students through periodic
              and term examinations, and through scholastic programs as well.
              The school provides them with counselling sessions and extra
              coaching classes involving the use of additional practice
              materials so that they can be effectively engaged and excel in
              their studies and which will also bring laurels to the school in
              the board exam. The Apex Club is led by the team of academic
              supervisors and subject experts where plans are being made to
              schedule enrichment classes with a difference. The same will be
              updated shortly
            </p>
          </Container>
        </div>
        <div className="our-course mt-4">
          <Container>
            {" "}
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3 d-flex justify-content-center"
            >
              <Tab eventKey="home" title="CBSE SOURCES">
                <h3>CBSE-COURCES STREAMS</h3>
                <div data-aos="zoom-in">
                <div className="card">
                  {" "}
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
              </Tab>
              <Tab eventKey="profile" title="NIOS">
                <h3>NATIONAL INSTITUTE OF OPEN SCHOOLING 2019-2020</h3>
                <p>
                  The Indian Community School, Kuwait holds open school classes
                  from the National Institute of Open Schooling, Ministry of
                  HRD, New Delhi. NIOS offers certification for the Secondary
                  and Senior Secondary classes which is equivalent to that of
                  CBSE. ICSK is the first school in the Gulf region to conduct
                  and orchestrate the CBSE and NIOS curriculum in parallel. NIOS
                  extends favourable circumstances to students who face
                  challenges in continuing regular schooling. The students of
                  the NIOS curriculum are proffered the same resources from
                  committed and enthusiastic faculty in a world-class
                  infrastructure.
                </p>
                <div className="course-class">
                  <h3 className="mt-4 mb-3">CLASS X COURSE</h3>
                  <div>
                    {" "}
                    <span>Language1</span>
                    <label className="ms-4">ENGLISH</label>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <span>Language2</span>
                    <label className="ms-4">HINDI</label>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <span>Subject</span>
                    <label className="ms-4">
                      DATA ENTRY,MATHEMATICS, SCIENCE, SOCIAL SCIENCE,
                      ECONOMICS, BUSINESS STUDIES, HOME SCIENCE,
                    </label>
                  </div>
                </div>
                <div className="course-class mt-4">
                  <h3 className="mt-4 mb-3">CLASS Xii COURSE</h3>
                  <div>
                    {" "}
                    <span>Language1</span>
                    <label className="ms-4">ENGLISH</label>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <span>Language2</span>
                    <label className="ms-4">HINDI</label>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <span>Subject</span>
                    <label className="ms-4">
                      DATA ENTRY,MATHEMATICS, SCIENCE, SOCIAL SCIENCE,
                      ECONOMICS, BUSINESS STUDIES, HOME SCIENCE,
                    </label>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="contact" title="ACCA">
                Tab content for Contact
              </Tab>
            </Tabs>
          </Container>
        </div>
        <div className="value-education bgRed mt-4">
          <h3 className="text-center p-3">
            <StyleSpan color="#fff">Value Education</StyleSpan>
          </h3>
          <Container>
            <Row>
              <Col sm={6} md={6} data-aos="fade-right" >
                <div className="card">
                  <div className="card__body">
                    <h3>Sparsh</h3>
                    <p>
                      To instill the feelings of empathy and compassion in the
                      students, the school has initiated many activities.
                      ‘SPARSH‘ is an activity initiated by ICSK to sensitize the
                      students on the sufferings and undue discrimination around
                      them. Through this activity, students are encouraged to
                      visit, share, contribute and understand the sufferings of
                      the people around. Short video clippings on their visits
                      are screened and appreciated at the school to encourage
                      participation by all.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} data-aos="fade-left">
                <div className="card">
                  <div className="card__body">
                    <h3>Sparsh</h3>
                    <p>
                      To instill the feelings of empathy and compassion in the
                      students, the school has initiated many activities.
                      ‘SPARSH‘ is an activity initiated by ICSK to sensitize the
                      students on the sufferings and undue discrimination around
                      them. Through this activity, students are encouraged to
                      visit, share, contribute and understand the sufferings of
                      the people around. Short video clippings on their visits
                      are screened and appreciated at the school to encourage
                      participation by all.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="special-coaching">
        <h3 className="text-center p-4">Special Coaching</h3>

            <Container> 
                  <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 d-flex justify-content-center"
            >
              <Tab eventKey="home" title="CBSE SOURCES">
                <h3>CBSE-COURCES STREAMS</h3>
                <div className="" data-aos="fade-left">
                <div className="card">
                  {" "}
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
           
              </Tab>
              <Tab eventKey="profile" title="NIOS">
              <div className="" data-aos="fade-right">

                <h3>NATIONAL INSTITUTE OF OPEN SCHOOLING 2019-2020</h3>
                <p>
                  The Indian Community School, Kuwait holds open school classes
                  from the National Institute of Open Schooling, Ministry of
                  HRD, New Delhi. NIOS offers certification for the Secondary
                  and Senior Secondary classes which is equivalent to that of
                  CBSE. ICSK is the first school in the Gulf region to conduct
                  and orchestrate the CBSE and NIOS curriculum in parallel. NIOS
                  extends favourable circumstances to students who face
                  challenges in continuing regular schooling. The students of
                  the NIOS curriculum are proffered the same resources from
                  committed and enthusiastic faculty in a world-class
                  infrastructure.
                </p>
                <div className="course-class">
                  <h3 className="mt-4 mb-3">CLASS X COURSE</h3>
                  <div>
                    {" "}
                    <span>Language1</span>
                    <label className="ms-4">ENGLISH</label>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <span>Language2</span>
                    <label className="ms-4">HINDI</label>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <span>Subject</span>
                    <label className="ms-4">
                      DATA ENTRY,MATHEMATICS, SCIENCE, SOCIAL SCIENCE,
                      ECONOMICS, BUSINESS STUDIES, HOME SCIENCE,
                    </label>
                  </div>
                  </div>
                </div>
                <div className="course-class mt-4">
                  <h3 className="mt-4 mb-3">CLASS Xii COURSE</h3>
                  <div>
                    {" "}
                    <span>Language1</span>
                    <label className="ms-4">ENGLISH</label>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <span>Language2</span>
                    <label className="ms-4">HINDI</label>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <span>Subject</span>
                    <label className="ms-4">
                      DATA ENTRY,MATHEMATICS, SCIENCE, SOCIAL SCIENCE,
                      ECONOMICS, BUSINESS STUDIES, HOME SCIENCE,
                    </label>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="contact" title="ACCA">
                Tab content for Contact
              </Tab>
            </Tabs>
</Container>
         
        </div>
      </div>
      </Layout>
    </>
  );
}
738253;