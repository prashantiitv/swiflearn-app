import React, { Component } from "react";
import styled from "@emotion/styled";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Dot = styled.span`
    height: 8px;
    width: 8px;
    background-color: orange;
    border-radius: 50%;
    display: inline-block;
`;

export default class NavBar extends Component {    
    render(){
        return(
            <>
                <Navbar className="justify-content-end" fixed="top" expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Swiflearn Logo </Navbar.Brand>
                    <Nav className="justify-content-end" >
                        <Nav.Link href="#"> Upcoming <Dot/> <br/> Live Consultation &nbsp; </Nav.Link>
                        <Nav.Link href="#"> <br/>Buy Plans &nbsp; </Nav.Link>
                        <Nav.Link href="#"> <br/>ViewPlans &nbsp;&nbsp; </Nav.Link>
                    </Nav>
                    <Button variant="danger"> Log In </Button>
                </Navbar>
            </>
        );
    }
}
