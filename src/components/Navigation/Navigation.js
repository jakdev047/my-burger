import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

import logo from '../../assets/images/logo.png';
import { authCheck } from '../../redux/actions/auth';

class Navigation extends Component {

    state = {
        isOpen: false,
    }

    toggle = () => this.setState({
        isOpen: !this.state.isOpen
    });

    componentDidMount(){
        this.props.authCheck();
    }

    render() {
        let links = null;
        if (this.props.token === null) {
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
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {links}
                    </Collapse>
                </div>
            </Navbar>
        )
    }
};
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);