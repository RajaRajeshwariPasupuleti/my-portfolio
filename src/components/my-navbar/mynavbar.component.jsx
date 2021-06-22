import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logoV1 from '../../assests/icons/logoV1.jpg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 

import "./mynavbar.style.css";

const Mynavbar = () => {
    return (

        <div>
            <Navbar fixed = "top" expand="md" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between" ALIGN="left">
            <Navbar.Brand href="#home">
                <img className = "logo" src = {logoV1} alt = "My Portfolio Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href = "/"  >Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                
                <Nav.Link href="#projects">Projects</Nav.Link>

                <Nav.Link as={Link} to = "/Skills">Skills</Nav.Link>
               
                <Nav.Link as={Link} to = "/Experience">Experience</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
               
                </Nav>
            </Navbar.Collapse>
            </Navbar>


         
           
          
        </div>

    )
}

export default Mynavbar