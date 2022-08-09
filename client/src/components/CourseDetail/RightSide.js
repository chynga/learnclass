import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsCameraVideoFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";

const RightSide = ({ course, iconSize }) => {
    return (
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
                        <h4 className="sm black bold">Introduction</h4>
                        <p>{course.intro}</p>
                        <h4 className="sm black bold">Goal of Course</h4>
                        <ul className="list-disc">
                            {course.goals.map(goal => (
                                <li key={uuid()}>
                                    <p>{goal}</p>
                                </li>
                            ))}
                        </ul>

                        <h4 className="sm black bold">Description</h4>
                        <p>{course.description}</p>
                    </TabPanel>
                    {/* <!-- END / INTRODUCTION --> */}

                    {/* <!-- OUTLINE --> */}
                    <TabPanel>
                        {/* <!-- SECTION OUTLINE --> */}
                        <div className="section-outline">
                            <ul className="section-list">
                                {course.lectures.map((lecture, i) => (
                                    <li key={lecture._id}>
                                        <div className="count">
                                            <span>{i + 1}</span>
                                        </div>
                                        <div className="list-body">
                                            <BsCameraVideoFill
                                                size={iconSize}
                                                className="icon"
                                            />
                                            <p>
                                                <a href="#">{lecture.title}</a>
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
                                ))}
                            </ul>
                        </div>
                        {/* <!-- END / SECTION OUTLINE --> */}
                    </TabPanel>
                    {/* <!-- END / OUTLINE --> */}

                    {/* <!-- STUDENT --> */}
                    <TabPanel>
                        <h3 className="md black">53618 Students applied</h3>
                        <div className="tab-list-student">
                            <ul className="list-student">
                                {/* <!-- LIST STUDENT --> */}
                                <li>
                                    <div className="image">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                    <div className="list-body">
                                        <cite className="xsm">
                                            <a href="#">Neo Khuat</a>
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
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                    <div className="list-body">
                                        <cite className="xsm">
                                            <a href="#">Neo Khuat</a>
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
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                    <div className="list-body">
                                        <cite className="xsm">
                                            <a href="#">Neo Khuat</a>
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
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                    <div className="list-body">
                                        <cite className="xsm">
                                            <a href="#">Neo Khuat</a>
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
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                    <div className="list-body">
                                        <cite className="xsm">
                                            <a href="#">Neo Khuat</a>
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
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                    <div className="list-body">
                                        <cite className="xsm">
                                            <a href="#">Neo Khuat</a>
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
    );
};

export default RightSide;
