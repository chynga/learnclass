import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src="images/logo.png" alt="" />
                    </Link>
                </div>

                <nav className="navigation">
                    <div className="open-menu">
                        <span className="item item-1"></span>
                        <span className="item item-2"></span>
                        <span className="item item-3"></span>
                    </div>

                    <ul className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/login">Login</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                    </ul>

                    <ul className="list-account-info">
                        <li className="list-item account">
                            <div className="account-info item-click">
                                <img src="images/team-13.jpg" alt="" />
                            </div>
                            <div className="toggle-account toggle-list">
                                <ul className="list-account">
                                    <li>
                                        <a href="setting.html">
                                            <i className="icon md-config"></i>
                                            Setting
                                        </a>
                                    </li>
                                    <li>
                                        <a href="login.html">
                                            <i className="icon md-arrow-right"></i>
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
