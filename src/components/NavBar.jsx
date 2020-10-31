import React, { Component } from "react";
import "./NavBar.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default class NavBar extends Component {    
    render(){
        return(
            <Navbar className="justify-content-end" fixed="top" expand="lg" variant="light" bg="light">
                <Nav className="justify-content-end" >
                    <Nav.Link href="#">Upcoming <span className="dot" /> <br/> Live Consultation </Nav.Link>
                    <Nav.Link href="#"> <br/>Buy Plans </Nav.Link>
                    <Nav.Link href="#"> <br/>View Plans </Nav.Link>
                </Nav>
                <Button className="btn-login" variant="danger"> Log In </Button>
            </Navbar>
        );
    }
}


