import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const Navbar = () => {
    return (
        <div>
            <section className="sub-banner sub-banner-course">
                <div className="awe-static bg-sub-banner-course"></div>
                <div className="container">
                    <div className="sub-banner-content">
                        <h2 className="text-center">Home Fitness Training</h2>
                    </div>
                </div>
            </section>

            <section className="course-top">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <div className="sidebar-course-intro">
                                <div className="video-course-intro">
                                    <div className="inner">
                                        <div className="video-place">
                                            <div className="img-thumb">
                                                <img
                                                    src="images/thumb-intro.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="awe-overlay"></div>
                                            <a href="#" className="play-icon">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                        <div className="video embed-responsive embed-responsive-16by9">
                                            <iframe
                                                src="//player.vimeo.com/video/100872038"
                                                className="embed-responsive-item"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className="price">Free</div>
                                    <a
                                        href="#"
                                        className="take-this-course mc-btn btn-style-1"
                                    >
                                        Take this course
                                    </a>
                                </div>

                                <div className="new-course">
                                    <div className="item course-code">
                                        <i className="icon md-barcode"></i>
                                        <h4>
                                            <a href="#">Course Code</a>
                                        </h4>
                                        <p className="detail-course">
                                            # A 15273
                                        </p>
                                    </div>
                                    <div className="item course-code">
                                        <i className="icon md-time"></i>
                                        <h4>
                                            <a href="#">Duration</a>
                                        </h4>
                                        <p className="detail-course">3 weeks</p>
                                    </div>
                                    <div className="item course-code">
                                        <i className="icon md-img-check"></i>
                                        <h4>
                                            <a href="#">Open Date</a>
                                        </h4>
                                        <p className="detail-course">
                                            25 May 2014
                                        </p>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="about-instructor">
                                    <h4 className="xsm black bold">
                                        About Instructor
                                    </h4>
                                    <ul>
                                        <li>
                                            <div className="image-instructor text-center">
                                                <img
                                                    src="images/team-13.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="info-instructor">
                                                <cite className="sm black">
                                                    <a href="#">John Doe</a>
                                                </cite>
                                                <a href="#">
                                                    <i className="fa fa-star"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-envelope"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-check-square"></i>
                                                </a>
                                                <p>
                                                    Morbi nec nisi ante. Quisque
                                                    lacus ligula, iaculis in
                                                    elit et, interdum semper
                                                    quam. Fusce in interdum
                                                    tortor. Ut sollicitudin
                                                    lectus dolor eget imperdiet
                                                    libero
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-instructor">
                                                <img
                                                    src="images/team-13.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="info-instructor">
                                                <cite className="sm black">
                                                    <a href="#">John Doe</a>
                                                </cite>
                                                <a href="#">
                                                    <i className="fa fa-envelope"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="icon md-user-plus"></i>
                                                </a>
                                                <p>
                                                    Morbi nec nisi ante. Quisque
                                                    lacus ligula, iaculis in
                                                    elit et, interdum semper
                                                    quam. Fusce in interdum
                                                    tortor. Ut sollicitudin
                                                    lectus dolor eget imperdiet
                                                    libero
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="line" />
                                <div className="widget widget_equipment">
                                    <i className="icon md-config"></i>
                                    <h4 className="xsm black bold">
                                        Equipment
                                    </h4>
                                    <div className="equipment-body">
                                        <a href="#">Photoshop CC</a>,
                                        <a href="#">Illustrator CC</a>
                                    </div>
                                </div>
                                <div className="widget widget_tags">
                                    <i className="icon md-download-2"></i>
                                    <h4 className="xsm black bold">Tag</h4>
                                    <div className="tagCould">
                                        <a href="#">Design</a>,
                                        <a href="#">Photoshop</a>,
                                        <a href="#">Illustrator</a>,
                                        <a href="">Art</a>,
                                        <a href="">Graphic Design</a>
                                    </div>
                                </div>
                                <div className="widget widget_share">
                                    <i className="icon md-forward"></i>
                                    <h4 className="xsm black bold">
                                        Share course
                                    </h4>
                                    <div className="share-body">
                                        <a
                                            href="#"
                                            className="twitter"
                                            title="twitter"
                                        >
                                            <i className="icon md-twitter"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="pinterest"
                                            title="pinterest"
                                        >
                                            <i className="icon md-pinterest-1"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="facebook"
                                            title="facebook"
                                        >
                                            <i className="icon md-facebook-1"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="google-plus"
                                            title="google plus"
                                        >
                                            <i className="icon md-google-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <Tabs className="tabs-page">
                                <TabList className="nav-tabs" role="tablist">
                                    <Tab>Introduction</Tab>
                                    <Tab>Outline</Tab>
                                    <Tab>Student</Tab>
                                </TabList>
                                {/* <!-- Tab panes --> */}
                                <div className="tab-content">
                                    {/* <!-- INTRODUCTION --> */}
                                    <TabPanel>
                                        <h4 className="sm black bold">
                                            Introduction
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt
                                            ut laoreet dolore magna aliquam erat
                                            volutpat. Ut wisi enim ad minim
                                            veniam, quis nostrud exerci tation
                                            ullamcorper suscipit lobortis nisl
                                            ut aliquip ex ea commodo consequat.
                                            Duis autem vel eum iriure dolor in
                                            hendrerit in vulputate velit esse
                                            molestie consequat, vel illum dolore
                                            eu feugiat nulla facilisis at vero
                                            eros et accumsan et iusto odio
                                            dignissim qui blandit praesent
                                            luptatum zzril delenit augue duis
                                            dolore te feugait nulla facilisi.
                                        </p>
                                        <h4 className="sm black bold">
                                            Goal of Course
                                        </h4>
                                        <ul className="list-disc">
                                            <li>
                                                <p>
                                                    sed diam nonummy nibh
                                                    euismod tincidunt ut laoreet
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    sed diam nonummy nibh
                                                    euismod tincidunt utrlaoreet
                                                </p>
                                            </li>
                                        </ul>

                                        <h4 className="sm black bold">
                                            About Judgement
                                        </h4>
                                        <p>
                                            Nunc quis vulputate metus, ac
                                            dapibus ligula. Etiam interdum
                                            ornare rutrum. ClassName aptent
                                            taciti sociosqu ad litora torquent
                                            per conubia nostra, per inceptos
                                            himenaeos. Nam elementum felis diam,
                                            non pellentesque est iaculis ac.
                                            Pellentesque habitant morbi
                                            tristique senectus et netus et
                                            malesuada fames ac turpis egestas.
                                            Sed ultricies hendrerit diam, eget
                                            molestie ipsum gravida vel. Mauris
                                            aliquam ante scelerisque odio
                                            tincidunt porttitor. Nulla vitae
                                            tellus dictum, vehicula elit eu,
                                            elementum arcu. Vestibulum ante
                                            ipsum primis in faucibus orci luctus
                                            et ultrices posuere cubilia Curae;
                                            Nam sodales lacinia ligula sed
                                            egestas. Suspendisse purus metus,
                                            pharetra non convallis eget, aliquet
                                            ut nisi. Etiam malesuada porta
                                            posuere. Integer eget erat enim.
                                            Maecenas rhoncus tincidunt dui id
                                            tincidunt. Pellentesque quis dapibus
                                            erat.
                                            <br />
                                            <br />
                                            Etiam dignissim tellus quis nulla
                                            accumsan, eget elementum ipsum
                                            blandit. Morbi sodales tellus id
                                            nisl porta cursus. Nam nisl mauris,
                                            convallis non accumsan ac, auctor
                                            sed lacus. Maecenas laoreet, nibh a
                                            facilisis sagittis, sem ante
                                            facilisis lectus, non porta mi odio
                                            sit amet ligula. Phasellus ac dolor
                                            nec odio dictum tristique. Donec
                                            convallis libero eros, nec imperdiet
                                            sem vulputate non. Vestibulum in
                                            lacus id nisi pulvinar elementum.
                                            Fusce lorem libero, tempus id elit
                                            vitae, ultrices tincidunt sapien.
                                            Nunc vestibulum libero vel ligula
                                            gravida, a convallis massa
                                            ultricies. Donec tristique ligula ut
                                            turpis auctor, ut ornare elit porta.
                                            Morbi sit amet velit laoreet,
                                            feugiat purus non, lobortis tellus.
                                            Maecenas eu eros sit amet erat
                                            condimentum auctor eu at diam.
                                            Phasellus id sem nis
                                        </p>
                                    </TabPanel>
                                    {/* <!-- END / INTRODUCTION --> */}

                                    {/* <!-- OUTLINE --> */}
                                    <TabPanel>
                                        {/* <!-- SECTION OUTLINE --> */}
                                        <div className="section-outline">
                                            <ul className="section-list">
                                                <li>
                                                    <div className="count">
                                                        <span>1</span>
                                                    </div>
                                                    <div className="list-body">
                                                        <i className="icon md-camera"></i>
                                                        <p>
                                                            <a href="#">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetuer
                                                                adipiscing elita
                                                            </a>
                                                        </p>
                                                        <div className="data-lessons">
                                                            <span>36:56</span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="mc-btn-2 btn-style-2"
                                                    >
                                                        Preview
                                                    </a>
                                                </li>

                                                <li>
                                                    <div className="count">
                                                        <span>2</span>
                                                    </div>
                                                    <div className="list-body">
                                                        <i className="icon md-gallery-1"></i>
                                                        <p>
                                                            <a href="#">
                                                                Lorem ipsum
                                                                dolor sit ameUt
                                                                wisi enim ad
                                                                minim veniam,
                                                                quis nostrud
                                                                Lorem ipsum
                                                                dolor sit ame
                                                                tation
                                                                ullamcorper
                                                                suscipit loborti
                                                            </a>
                                                        </p>
                                                        <div className="data-lessons">
                                                            <span>
                                                                15 images
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="mc-btn-2 btn-style-2"
                                                    >
                                                        Preview
                                                    </a>
                                                </li>

                                                <li>
                                                    <div className="count">
                                                        <span>3</span>
                                                    </div>
                                                    <div className="list-body">
                                                        <i className="icon md-volume-down"></i>
                                                        <p>
                                                            <a href="#">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetuer
                                                                adipiscing elita
                                                            </a>
                                                        </p>
                                                        <div className="data-lessons">
                                                            <span>36:56</span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="mc-btn-2 btn-style-2"
                                                    >
                                                        Preview
                                                    </a>
                                                </li>

                                                <li>
                                                    <div className="count">
                                                        <span>4</span>
                                                    </div>
                                                    <div className="list-body">
                                                        <i className="icon md-gallery-2"></i>
                                                        <p>
                                                            <a href="#">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetuer
                                                                adipiscing elita
                                                            </a>
                                                        </p>
                                                        <div className="data-lessons">
                                                            <span>
                                                                45 slides
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="mc-btn-2 btn-style-2"
                                                    >
                                                        Preview
                                                    </a>
                                                </li>

                                                <li>
                                                    <div className="count">
                                                        <span>
                                                            <i className="icon md-search"></i>
                                                        </span>
                                                    </div>
                                                    <div className="list-body">
                                                        <i className="icon md-files"></i>
                                                        <p>
                                                            <a href="#">
                                                                <span>
                                                                    Quizz 1 :
                                                                </span>{" "}
                                                                Lorem ipsum
                                                                dolor sit ameUt
                                                                wisi enim ad
                                                                minim veniam
                                                            </a>
                                                        </p>
                                                        <div className="data-lessons">
                                                            <span>
                                                                10 questions
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="mc-btn-2 btn-style-2"
                                                    >
                                                        Preview
                                                    </a>
                                                </li>

                                                <li>
                                                    <div className="count">
                                                        <span>a</span>
                                                    </div>
                                                    <div className="list-body">
                                                        <i className="icon md-files"></i>
                                                        <p>
                                                            <a href="#">
                                                                <span>
                                                                    Assignment :
                                                                </span>{" "}
                                                                Lorem ipsum
                                                                dolor sit ameUt
                                                                wisi enim ad
                                                                minim veniam
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="mc-btn-2 btn-style-2"
                                                    >
                                                        Preview
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- END / SECTION OUTLINE --> */}
                                    </TabPanel>
                                    {/* <!-- END / OUTLINE --> */}

                                    {/* <!-- STUDENT --> */}
                                    <TabPanel>
                                        <h3 className="md black">
                                            53618 Students applied
                                        </h3>
                                        <div className="tab-list-student">
                                            <ul className="list-student">
                                                {/* <!-- LIST STUDENT --> */}
                                                <li>
                                                    <div className="image">
                                                        <img
                                                            src="images/team-13.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="list-body">
                                                        <cite className="xsm">
                                                            <a href="#">
                                                                Neo Khuat
                                                            </a>
                                                        </cite>
                                                        <span className="address">
                                                            Hanoi, Vietnam
                                                        </span>
                                                        <div className="icon-wrap">
                                                            <a href="#">
                                                                <i className="icon md-email"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="icon md-user-plus"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- END / LIST STUDENT --> */}

                                                {/* <!-- LIST STUDENT --> */}
                                                <li>
                                                    <div className="image">
                                                        <img
                                                            src="images/team-13.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="list-body">
                                                        <cite className="xsm">
                                                            <a href="#">
                                                                Neo Khuat
                                                            </a>
                                                        </cite>
                                                        <span className="address">
                                                            Hanoi, Vietnam
                                                        </span>
                                                        <div className="icon-wrap">
                                                            <a href="#">
                                                                <i className="icon md-email"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="icon md-user-plus"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- END / LIST STUDENT --> */}

                                                {/* <!-- LIST STUDENT --> */}
                                                <li>
                                                    <div className="image">
                                                        <img
                                                            src="images/team-13.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="list-body">
                                                        <cite className="xsm">
                                                            <a href="#">
                                                                Neo Khuat
                                                            </a>
                                                        </cite>
                                                        <span className="address">
                                                            Hanoi, Vietnam
                                                        </span>
                                                        <div className="icon-wrap">
                                                            <a href="#">
                                                                <i className="icon md-email"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="icon md-user-plus"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- END / LIST STUDENT --> */}

                                                {/* <!-- LIST STUDENT --> */}
                                                <li>
                                                    <div className="image">
                                                        <img
                                                            src="images/team-13.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="list-body">
                                                        <cite className="xsm">
                                                            <a href="#">
                                                                Neo Khuat
                                                            </a>
                                                        </cite>
                                                        <span className="address">
                                                            Hanoi, Vietnam
                                                        </span>
                                                        <div className="icon-wrap">
                                                            <a href="#">
                                                                <i className="icon md-email"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="icon md-user-plus"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- END / LIST STUDENT --> */}

                                                {/* <!-- LIST STUDENT --> */}
                                                <li>
                                                    <div className="image">
                                                        <img
                                                            src="images/team-13.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="list-body">
                                                        <cite className="xsm">
                                                            <a href="#">
                                                                Neo Khuat
                                                            </a>
                                                        </cite>
                                                        <span className="address">
                                                            Hanoi, Vietnam
                                                        </span>
                                                        <div className="icon-wrap">
                                                            <a href="#">
                                                                <i className="icon md-email"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="icon md-user-plus"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- END / LIST STUDENT --> */}

                                                {/* <!-- LIST STUDENT --> */}
                                                <li>
                                                    <div className="image">
                                                        <img
                                                            src="images/team-13.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="list-body">
                                                        <cite className="xsm">
                                                            <a href="#">
                                                                Neo Khuat
                                                            </a>
                                                        </cite>
                                                        <span className="address">
                                                            Hanoi, Vietnam
                                                        </span>
                                                        <div className="icon-wrap">
                                                            <a href="#">
                                                                <i className="icon md-email"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="icon md-user-plus"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- END / LIST STUDENT --> */}
                                            </ul>
                                        </div>
                                        <div className="load-more">
                                            <a href="">
                                                <i className="icon md-time"></i>
                                                Load more previous update
                                            </a>
                                        </div>
                                    </TabPanel>
                                    {/* <!-- END / STUDENT --> */}
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;
