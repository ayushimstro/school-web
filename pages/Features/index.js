import React from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import { StyleSpan } from "../../components/stylecomponents/Header.styled";
import Layout from "../../components/Common/Layout";
export default function Feature() {
  return (
    <Layout title={"Features | "}>
      <div className="feature">
        <div className="bgImage"></div>

        <div className="cloud bgRed text-center mt-4">
          <Container>
            {" "}
            <h2 style={{ color: "#fff" }}>ICSK Cloud</h2>
            <p>
              The ICSK Cloud is an solution exclusively for parents and staff
              which comprises of Features such as attendance, timetable,
              document sharing, student corner, communications etc. It is one of
              the novel innovations that provide an easy access for parents to
              all school related issues.
            </p>
          </Container>
        </div>
        <div className="e-library container">
          <h2 className="text-center mb-3">
            High <StyleSpan style={{ color: "#185b2d" }}>Tech Labs</StyleSpan>
          </h2>
          <img src="https://media.istockphoto.com/id/1256323645/photo/multi-ethnic-female-team-studying-dna-mutations-using-microscope-in-protective-workwear.jpg?s=612x612&w=0&k=20&c=2G6dg3skp9mM7xwBlpw0HCeCZb4oHXDWKlCRpqyDyGA=" />
        </div>
        <div className="bgRed">
          <div className="container counsel">
            <div className="row">
              <div className="col-sm-6">
                <div class="card">
                  <div class="card__body">
                    <h4>
                      Dept of{" "}
                      <span style={{ color: "#185b2d" }}>Counseling</span>{" "}
                    </h4>
                    <p>
                      ICSK offers customized tutoring to each student enrolled
                      in the school. The institution also follows the method of
                      continuous evaluation for students who need to perform at
                      a better level at the boards. Reports are consolidated
                      after the evaluations. Students are expected to maintain a
                      specific average failing which the coordinators analyse
                      the specific reason for such failure and accordingly
                      advise for remedial classes. As soon as the grades of
                      students show improvement these classes are discontinued.
                      This process repeats itself in phases during the academic
                      year
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div class="card">
                  <div class="card__body">
                    <h4>
                      Digital{" "}
                      <span style={{ color: "#185b2d" }}>Classrooms</span>{" "}
                    </h4>
                    <p>
                      One ultra modern facility is the availability and
                      employment of smart boards wherewithal the teacher and
                      student are able to divulge in the subject and accommodate
                      different learning styles through interactive whiteboards
                      and projector. Visual learning students are able to
                      understand the subject in a better manner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="counceler">
          <div>
            {" "}
            <img src="https://blog.vantagecircle.com/content/images/2020/06/how-to-conduct-a-proper-employee-counseling-2.png" />
            <div className="d-flex justify-content-center align-items-center center-text flex-column">
              <h2>Comprehensive Career Counselling by Expert</h2>
              <p>
                Explore and Find out your Most Suitable Career Path Out of 18
                <br /> Career Clusters, 110 + Career Paths and 3000+ Occupations
              </p>
              <Button className="asses-btn">
                Start Career Assesement for Students
              </Button>
            </div>
          </div>
        </div>
        <div className="bgRed mt-4">
          <Container>
            <div className="text-center about-Counsel">
              <h2 style={{ color: "#fff" }}>About The Counsellor</h2>
              <p>
                The School has rich Psychology Department since the subject
                Psychology is offered at Sr Secondary level and opted by many
                students who score centum in CBSE exams quite often. The school
                has Psychology teachers and counsellors working together with
                the specialization in child psychology, academics and career
                guidance.
              </p>
              <p></p>
            </div>
          </Container>
        </div>
      </div>
      <div className="container mt-5">
        <div className="carrer-assessment">
          <h2 className="text-center mb-4">
            <StyleSpan style={{ color: "#185b2d" }}>Psychometric</StyleSpan>{" "}
            Career Assessments
          </h2>
          <div className="row">
            <div className="col-sm-4">
              <div class="card text-center">
                <div class="card__body">
                  <h4>Career Analysis for 8th, 9th & 10th Class</h4>
                  <p>
                    It will help you to find out most suitable career path and
                    subjects
                  </p>
                  <div className="">
                    <Button className="asses-btn">Start Now</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card text-center">
                <div class="card__body">
                  <h4>Career Analysis for 8th, 9th & 10th Class</h4>
                  <p>
                    It will help you to find out most suitable career path and
                    subjects
                  </p>
                  <div className="">
                    <Button className="asses-btn">Start Now</Button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-sm-4">
              <div class="card text-center">
                <div class="card__body">
                  <h4>Career Analysis for 8th, 9th & 10th Class</h4>
                  <p>
                    It will help you to find out most suitable career path and
                    subjects
                  </p>
                  <div className="">
                    <Button className="asses-btn">Start Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
