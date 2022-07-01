import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

export default function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <NavbarBrand tag={Link} to="/">
                    learnclass
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/courses">
                                Courses
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/chynga">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
