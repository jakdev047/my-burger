import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

import logo from '../../assets/images/logo.png';

const Navigation = props => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    let links = null;
    if (props.token === null) {
        links = (
            <Nav className="ml-auto" navbar>
                <NavItem><NavLink exact to="/about">About</NavLink></NavItem>
                <NavItem><NavLink exact to="/login">Login</NavLink></NavItem>
            </Nav>
        )
    }
    else {
        links = (
            <Nav className="ml-auto" navbar>
                <NavItem><NavLink exact to="/">Home</NavLink></NavItem>
                <NavItem><NavLink exact to="/orders">Orders</NavLink></NavItem>
                <NavItem><NavLink exact to="/checkout">Checkout</NavLink></NavItem>
                <NavItem><NavLink exact to="/about">About</NavLink></NavItem>
            </Nav>
        )
    }
    return (
        <Navbar dark color="dark" expand="md">
            <div className="container">
                <NavbarBrand href="/">
                    <img src={logo} alt="burger-builder" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    {links}
                </Collapse>
            </div>
        </Navbar>
    )
};
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
    }
};
export default connect(mapStateToProps)(Navigation);