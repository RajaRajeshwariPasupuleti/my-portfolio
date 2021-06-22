import React from 'react';

import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import './projects.styles.css'


const Projects = () => {
    return(
        <div>
            <h1 className=" text-center textAlign">PROJECTS</h1>
            <Timeline>
                <Events>
                <ImageEvent date="March 2021" className="text-center" text="SIMPLE PORTFOLIO"  >
                    <div className="justify-content-between flex-column mt-2">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main" >
                                PROJECT DETAILS
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This is a <strong>Simple portfolio </strong>created with HTML-5 and CSS that contains all my details like experience, self projects, technology stack and blogs.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                        <li> Portfolio featuring all my details</li>
                                        <li>Powered by HTML-5 and CSS</li>                              
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                        <li>
                                            <span className="p-2">                                       
                                            HTML5
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            CSS3
                                            </span>
                                        </li>                                                     
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">

                            <UrlButton href="https://rajarajeshwari-portfolio.netlify.app/"  target="_blank" >
                            SEE LIVE
                            </UrlButton>

                            <UrlButton href="https://github.com/RajaRajeshwariPasupuleti/Portfolio" target="_blank" >
                            SOURCE CODE
                            </UrlButton>
                        </div>
                    </div>
                </ImageEvent>



                <ImageEvent date="April 2021" className="text-center" text="TRANSLATORY APP"  >
                    <div className="justify-content-between flex-column mt-2">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main" >
                                PROJECT DETAILS
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This is a Translatory APP created with Vanilla JS and CSS that translates our words to <strong>GIBBERISH (Minions)</strong>  language.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                        <li>Translates the words to Banana language</li>
                                        <li>Powered by VannilaJS and CSS</li>                              
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                        <li>
                                            <span className="p-2">                                       
                                            HTML5
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            CSS3
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            Vannila JS
                                            </span>
                                        </li>                              
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">

                            <UrlButton href="https://translation-banana.netlify.app/"  target="_blank" >
                            SEE LIVE
                            </UrlButton>

                            <UrlButton href="https://github.com/RajaRajeshwariPasupuleti/Translatory-BANANA" target="_blank" >
                            SOURCE CODE
                            </UrlButton>
                        </div>
                    </div>
                </ImageEvent>


                <ImageEvent date="May 2021" className="text-center" text="EMOJI FINDER"  >
                    <div className="justify-content-between flex-column mt-3">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main" >
                                PROJECT DETAILS
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This is a <strong>Emoji Finder App</strong> created with React JS and CSS that helps in finding out the available emoji meanings.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                        <li>Finding out the descriptions for the available emojis </li>
                                        <li>Powered by React JS and CSS</li>                              
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                       
                                        <li>
                                            <span className="p-2">
                                            React JS
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            CSS3
                                            </span>
                                        </li>                              
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">

                            <UrlButton href="https://translation-banana.netlify.app/"  target="_blank" >
                            SEE LIVE
                            </UrlButton>

                            <UrlButton href="https://github.com/RajaRajeshwariPasupuleti/React-Emoji-Finder" target="_blank" >
                            SOURCE CODE
                            </UrlButton>
                        </div>
                    </div>
                </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
}

export default Projects