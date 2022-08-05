const Sidebar = () => {
    return (
        <div className="col-md-3">
            <aside className="sidebar-categories">
                <div className="inner">
                    <div className="widget">
                        <ul className="list-style-block">
                            <li className="current">
                                <a href="#">Featured</a>
                            </li>
                            <li>
                                <a href="#">Staff pick</a>
                            </li>
                            <li>
                                <a href="#">Free</a>
                            </li>
                            <li>
                                <a href="#">Top paid</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- END / WIDGET TOP --> */}

                    {/* <!-- WIDGET CATEGORIES --> */}
                    <div className="widget widget_categories">
                        <ul className="list-style-block">
                            <li>
                                <a href="#">Technology</a>
                            </li>
                            <li>
                                <a href="#">Business</a>
                            </li>
                            <li>
                                <a href="#">Design</a>
                            </li>
                            <li>
                                <a href="#">Art and Photography</a>
                            </li>
                            <li>
                                <a href="#">Health and Fitness</a>
                            </li>
                            <li>
                                <a href="#">Lifestyle</a>
                            </li>
                            <li>
                                <a href="#">Math and Science</a>
                            </li>
                            <li>
                                <a href="#">Education</a>
                            </li>
                            <li>
                                <a href="#">Social Science</a>
                            </li>
                            <li>
                                <a href="#">Game</a>
                            </li>
                            <li>
                                <a href="#">Crafts and Hobbies</a>
                            </li>
                            <li>
                                <a href="#">Music</a>
                            </li>
                            <li>
                                <a href="#">Sports</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- END / WIDGET CATEGORIES --> */}
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
