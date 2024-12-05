import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function NavBar() {
return (
    <div className="navbar-container">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">Products</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
                <NavLink to='/' className="nav-link-show">Products</NavLink>
                <NavLink to='/add' className="nav-link-add">Add Products</NavLink>
            </Nav>
        </Navbar>
    </div>
)
}

export default NavBar
