import React from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// skills
import { skills } from "./Tech-Skills-List";

import "./Tech-Skills.styles.css";


const Skills = () => {
    return (
        <div>

            <h1 className="text-center pb-5">TECHNOLOGY STACK</h1>

            <CardDeck>
                <Row className="d-flex">

                    {/* Frontend */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            {/* Frontend */}
                            <Card.Title className="text-center  card-title">Frontend Tech</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                            {skills.frontend.map((skill, index) => (
                                <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                     {skill.skillName}
                                </a>
                                </span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">.Net TECHOLOGIES</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                            {skills.dot_NET_Technologies.map((skill, index) => (
                                <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                     {skill.skillName}
                                </a>
                                </span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                
                {/* Programming Languages */}
                <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                            {skills.programmingLanguages.map((skill, index) => (
                                <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    {skill.skillName}
                                </a>
                                </span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                        </Card>     


                        {/* Database */}

                        <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Database</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                            {skills.databases.map((skill, index) => (
                                <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    {skill.skillName}
                                </a>
                                </span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                        </Card>


                        {/* Version Control */}

                        <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Version Control</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                            {skills.versionControl.map((skill, index) => (
                                <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    {skill.skillName}
                                </a>
                                </span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>        

                
                    <Col md={4}>           
                    {/* Hosting Platforms */}
                        <Card className="focus mt-2 mb-2 ">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                            {skills.hostingPlatforms.map((skill, index) => (
                                <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                     {skill.skillName}
                                </a>
                                </span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                        </Card>

                    {/*  IDE */}
                        <Card className="focus mt-2 mb-2 ">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">IDE</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                            {skills.IDE.map((skill, index) => (
                                <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    {skill.skillName}
                                </a>
                                </span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    
                    {/*  Mthodology */}
                        <Card className="focus mt-2 mb-2 ">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Methodology</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                            {skills.Mthodology.map((skill, index) => (
                                <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                     {skill.skillName}
                                </a>
                                </span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>

                    

                </Row>
            </CardDeck>

        </div>
    )
}

export default Skills;