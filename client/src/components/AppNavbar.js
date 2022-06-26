import { Component } from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

class AppNavbar extends Component {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/">learnclass</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
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
}

export default AppNavbar;
