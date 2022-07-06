import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

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
                        {user ? (
                            <NavItem>
                                <button
                                    className="btn btn-success"
                                    onClick={onLogout}
                                >
                                    Logout
                                </button>
                            </NavItem>
                        ) : (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/register">
                                        Register
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/login">
                                        Login
                                    </NavLink>
                                </NavItem>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
