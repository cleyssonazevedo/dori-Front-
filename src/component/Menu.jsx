import React,  { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default class Menu extends Component {
    render() {
        return (
            <Navbar
                fixedTop={ true }
                fluid={ true }
            >
                <Navbar.Header>
                    <Navbar.Brand>
                    <span>Dori</span>
                    </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem active>Home</NavItem>
                    <NavItem>Concursos</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}