const Navbar = () => {
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="logo">
                    <a href="index.html">
                        <img src="images/logo.png" alt="" />
                    </a>
                </div>

                <nav className="navigation">
                    <div className="open-menu">
                        <span className="item item-1"></span>
                        <span className="item item-2"></span>
                        <span className="item item-3"></span>
                    </div>

                    <ul className="menu">
                        <li>
                            <a href="index.html">Home</a>
                        </li>

                        <li className="menu-item-has-children">
                            <a href="#">Login</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="register.html">Register</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="categories.html">Course</a>
                        </li>
                    </ul>

                    <div className="search-box">
                        <i className="icon md-search"></i>
                        <div className="search-inner">
                            <form>
                                <input type="text" placeholder="key words" />
                            </form>
                        </div>
                    </div>

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
