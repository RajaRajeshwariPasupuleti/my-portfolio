import React from 'react'

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";

import OfficeLogo from "../../../assests/icons/NCR_Corporation_logo.svg";
import "./work-experience.styles.css";

const Experience = () => {
    return (
        <div>
             <h1 className="text-center textAlign">WORK EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                <Tilt options={{ max: 25 }}>             
                    <Card>  
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize" src={OfficeLogo} alt="NCR logo" />
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                        <Card.Title className="text-center">Software Engineer I</Card.Title>
                        </div>
                        <div>
                        <Card.Text className="text-center style">
                            <strong className="body-title-style ">Full Stack Developer</strong>
                            <br />
                            <strong>Technology:</strong> DOTNET-MVC, C#, DOTNET-WEBAPI, MS-SQL
                            <br />
                            <strong>Duration:</strong> August 2020 - Present
                            <br/>
                            <strong> Description </strong>
                            <ul className="text-left">
                            <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                            <li><strong>Developed</strong> the cloud first enterprise POS platform that gives you everything you need to run your supermarket from 
                                POS to payments to back office and beyond.
                            </li>
                            <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                            </li>
                            <li><strong>Performed</strong> CRUD operations through EF and Dapper on multiple databases to load/ remove data according 
                            to the business requirements.</li>           
                            </ul>
                        
                        </Card.Text>
                        </div>
                    </Card.Body>
                    </Card>
                </Tilt>
                <hr />
                <Tilt options={{ max: 25 }}>             
                    <Card>  
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize" src={OfficeLogo} alt="NCR logo" />
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                        <Card.Title className="text-center">Software Engineer</Card.Title>
                        </div>
                        <div>
                        <Card.Text className="text-center style">
                            <strong className="body-title-style ">Full Stack Developer</strong>
                            <br />
                            <strong>Technology:</strong>  C#, DOTNET-WEBAPI, MS-SQL
                            <br />
                            <strong>Duration:</strong> July 2018 - May 2020
                            <br/>
                            <strong> Description </strong>
                            <ul className="text-left">
                            <li><strong>Developed &amp; enhanced</strong> retail software solution developed for large-scale general merchandise retailers 
                            who require a robust Point of Sale (POS) application</li>
                            <li>Fully <strong>configurable</strong> through parameters that can meet the retailer’s specific business requirements.
.
                            </li>
                            <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                            </li>
                            <li><strong>Performed</strong> CRUD operations through EF and Dapper on multiple databases to load/ remove data according 
                            to the business requirements.</li>           
                            </ul>
                        
                        </Card.Text>
                        </div>
                    </Card.Body>
                    </Card>
                </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience