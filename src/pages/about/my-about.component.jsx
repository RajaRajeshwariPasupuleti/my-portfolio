import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./my-about.styles.css";
import Profile from "../../assests/icons/Raaji.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about" >
      <div className="about">
        <h1 className="pt-4 text-center pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5">
            <Col xs={12} md={6}>
              <Row className="profile">
                <Image  alt="profile" src={Profile} ALIGN="left" thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" my-details">
              Heyyy Hiii! I am <strong>&nbsp;Raja Rajeshwari 😃</strong>
              <p> &emsp; Having <strong>3 years of software development experience</strong>  in Design and Developing Web using .Net
                technologies across all stages of Software Development Life Cycle (SDLC) including business requirement
                analysis, coding, unit testing, systems integration and user acceptance testing.  </p>

                <p>&emsp; Have hands-on and the learning experience on ASP.NET Core Web API, MVC, ReactJS, HTML, CSS, Microservices Architecture, Docker, Kubernetes, Web Hosting.</p>
                
                <p> &emsp; Experience of working in Agile/Waterfall, Confluence, Jira, SVN, GIT, Jenkins, TFS. Good interpersonal skills, committed, result oriented, hard working with a quest and zeal to learn new
                technologies. Ability to quickly master new technologies & apply full range of capabilities. Highly motivated, problem solving and a team player with excellent communication, Analytical and interpersonal skills </p>
            
                <Col className="d-flex justify-content-center ">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="mailto: rajipasupuleti97@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-secondary">
                        Gmail
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/raja-rajeshwari-pasupulati-2a8139159/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/RajaRajeshwariPasupuleti" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        GitHub
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About