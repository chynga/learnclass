const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="first-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="widget megacourse">
                                <h3 className="md">MegaCourse</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat
                                </p>
                                <a href="#" className="mc-btn btn-style-1">
                                    Get started
                                </a>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="widget widget_latest_new">
                                <h3 className="sm">Latest News</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div className="image-thumb">
                                                <img
                                                    src="images/team-13.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <span>
                                                How to have a good Boyfriend in
                                                college?
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="image-thumb">
                                                <img
                                                    src="images/team-13.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <span>
                                                How to have a good Boyfriend in
                                                college?
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="widget quick_link">
                                <h3 className="sm">Quick Links</h3>
                                <ul className="list-style-block">
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms of use</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="widget news_letter">
                                <div className="inner">
                                    <div className="letter-heading">
                                        <h3 className="md">News letter</h3>
                                        <p>
                                            Don’t miss a course sale! Join our
                                            network today and keep it up!
                                        </p>
                                    </div>
                                    <div className="letter">
                                        <form>
                                            <input
                                                className="input-text"
                                                type="text"
                                            />
                                            <span className="no-spam">
                                                * No spam guaranteed
                                            </span>
                                            <input
                                                type="submit"
                                                value="Submit now"
                                                className="mc-btn btn-style-2"
                                            />
                                        </form>
                                    </div>
                                </div>

                                <div className="overlay-color-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="second-footer">
                <div className="container">
                    <div className="contact">
                        <div className="email">
                            <i className="icon md-email"></i>
                            <a href="#">course@megadrupal.com</a>
                        </div>
                        <div className="phone">
                            <i className="fa fa-mobile"></i>
                            <span>+84 989 999 888</span>
                        </div>
                        <div className="address">
                            <i className="fa fa-map-marker"></i>
                            <span>Maecenas sodales, nisl eget</span>
                        </div>
                    </div>
                    <p className="copyright">
                        Copyright © 2014 Megadrupal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
