import React, { useState } from 'react'
import {
    BrowserRouter as
        Link
} from "react-router-dom";
import { Navbar, NavbarBrand } from 'reactstrap';
import Collapse from 'reactstrap/lib/Collapse';
import Nav from 'reactstrap/lib/Nav';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import NavItem from 'reactstrap/lib/NavItem';
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark color='dark'>
                <div className="container">
                    <NavbarToggler onClick={toggle} />
                    <NavbarBrand>Takeway restaurant</NavbarBrand>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/home" className="nav-link active">Home</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/manu" className="nav-link ">Manu</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/about" className="nav-link ">About</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/contact" className="nav-link ">Contact</Link>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

        </div>
    )
}
