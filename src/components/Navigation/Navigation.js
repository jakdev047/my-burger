import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

import logo from '../../assets/images/logo.png';

export const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar dark color="dark" expand="md">
             <div className="container">
                <NavbarBrand href="/">
                    <img src={logo} alt="burger-builder"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem><NavLink to="/">Home</NavLink></NavItem>
                        <NavItem><NavLink to="/about">About</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
};