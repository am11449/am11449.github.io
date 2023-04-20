import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CourseConnect"
              description="Leveraged the Java Spring Boot framework to create a robust REST API for managing courses. The
              API provides endpoints for creating, reading, updating, and deleting course records using a MongoDB database connected
              using JPA."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LinkedOut"
              description="Built a job portal using microservices architecture using AWS Lambda (in Java) backend that runs AWS
              Textract and AWS Comprehend to extract skills from user’s resume and matches them to jobs scraped from LinkedIn
              based on content-based and collaborative filtering"
              ghLink="https://github.com/am11449/CCBD_Project"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Voice Driven Searchable Photos"
              description="Designed an asynchronous event-driven web app to query photos through text and
              voice with the help of AWS using Java and Javascript. Employed Rekognition and Open Search to create an intelligent
              search layer to query photos for people, landmarks, etc"
              ghLink="https://github.com/am11449/cc2-lambda-fn"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NYC Accessible Streets"
              description="Developed a Django web app as part of an Agile team that maps accessible ramps, signals,
              and crosswalks using NYC OpenData with features like user favorites, and user reporting using Git version control, Travis
              CI and AWS EB for deployments."
              ghLink="https://github.com/gcivil-nyu-org/team-1-inperson"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Analysis and correlation between Airbnb and crime rates in NYC"
              description="Built an Apache Kafka pipeline that fetches Airbnb data and NYC Crime data (using NYCOpenData Platform API). Leveraged Apache Spark to analyze the relationship between them and provide visualizations in Tableau."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Analyzing crime hotspots in NYC"
              description="Performed Exploratory Data Analysis on the NYC Open Data crime dataset to
              form insights about peak crime times, the effect of COVID on crime rates by borough and precinct etc. Also performed
              geo-spatial analysis to estimate crime hotspots based on parameters like time of day, degree of crime, type of crime etc.
              and clustering to summarize weeks of data."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" Instrument recognition from polyphonic music"
              description="Developed a Convolution Neural Network to identify individual
              instruments in polyphonic music with a precision score of 0.77, which was an improvement over the current state of the
              art by 18% using Mel spectrogram extracted in Python and Librosa."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Rapid Rescuer bot (Winner, e-Yantra Robotics Competition, 2020)"
              description="Developed Embedded C code to read sensor data
              from ToF using I2C protocol for a palm-sized maze solver robot, along with PID for robot manipulation. Also used SPI
              protocol to read data from IR sensors to detect maze lines. Worked on motion planning and execution for the bot to solve
              a room-sized maze."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Disk I/O performance analysis"
              description="Developed C++ programs in Linux to implement the functionality of the dd command,
              to measure the read/write speeds of an internal hard drive with and without caching for varied block sizes using Linux
              system calls."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Interactive Restaurant Recommendation Chatbot"
              description="Built an interactive chatbot to personalize restaurant recommendations with the help of
               AWS Open Search, Lex, Lambda, and CloudWatch to create an intelligent search layer to enable restaurant
              searches with different cuisines, locations, etc."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real-time obstacle avoidance system for visually impaired"
              description="Developed a YoloV5 based object detection model and deployed it on AWS EC2 instance 
              using Python Flask backend to detect obstacles on the road such as vehicles, potholes, animals, with 
              audio and video transmission using websockets."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
