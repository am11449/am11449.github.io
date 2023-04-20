import React from "react";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/peep.svg";
import Tilt from "react-parallax-tilt";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <span class = "purple">Software Engineer</span> with a Master's in Computer Science from <b><i><span class = "purple">New York University</span>. </i></b><br />I have almost a year of internship experience in software and data science.<br /><br />
              My areas of strength are Machine Learning and Backend development, 
              but I love doing fullstack development and tapping into my creativity, and Data Science to feed my inner Nerd. 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Java and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning and Image Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Java Spring</b> and
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
              </Container>
    </Container>
  );
}
export default Home2;
