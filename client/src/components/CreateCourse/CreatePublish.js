import moment from "moment";
import { BiTime } from "react-icons/bi";
import { BsCalendar2Check, BsPeopleFill } from "react-icons/bs";
import { Page } from "./CreateCourse";

const CreatePublish = ({
    courseData,
    user,
    iconSize,
    setFormPage,
    createCourse,
}) => {
    return (
        <div className="col-md-9">
            <div className="create-course-content">
                <div className="publish-course">
                    <h3 className="md black">Course summary</h3>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="mc-item mc-item-1">
                                <div className="image-heading">
                                    <img src={courseData.bannerURL} alt="" />
                                </div>
                                {/* <div className="meta-categories">
                                    <a href="#">Web design</a>
                                </div> */}
                                <div className="content-item">
                                    <div className="image-author">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                    <h4>{courseData.name}</h4>
                                    <div className="name-author">
                                        By <a href="#">{user.name}</a>
                                    </div>
                                </div>
                                <div className="ft-item">
                                    <div className="rating">
                                        <a href="#" className="active"></a>
                                        <a href="#" className="active"></a>
                                        <a href="#" className="active"></a>
                                        <a href="#"></a>
                                        <a href="#"></a>
                                    </div>
                                    <div className="view-info">
                                        <BsPeopleFill />0
                                    </div>
                                    <div className="price">Free</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <h2 className="big black">{courseData.name}</h2>

                            <div className="new-course">
                                <div className="item course-code">
                                    <BiTime size={iconSize} className="icon" />
                                    <h4>
                                        <a href="#">Duration</a>
                                    </h4>
                                    <p className="detail-course">
                                        {courseData.duration} weeks
                                    </p>
                                </div>
                                <div className="item course-code">
                                    <BsCalendar2Check
                                        size={iconSize}
                                        className="icon"
                                    />
                                    <h4>
                                        <a href="#">Open Date</a>
                                    </h4>
                                    <p className="detail-course">
                                        {moment().format("d MMMM YYYY")}
                                    </p>
                                    {/* 25 May 2014 */}
                                </div>
                            </div>

                            <hr className="line" />
                            <div className="about-instructor">
                                <h4 className="xsm black">About Instructor</h4>
                                <ul>
                                    <li>
                                        <div className="image-instructor text-center">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                                                alt=""
                                            />
                                        </div>
                                        <div className="info-instructor">
                                            <cite className="sm black">
                                                <a href="#">{user.name}</a>
                                            </cite>
                                            <p>
                                                Morbi nec nisi ante. Quisque
                                                lacus ligula, iaculis in elit
                                                et, interdum semper quam. Fusce
                                                in interdum tortor. Ut
                                                sollicitudin lectus dolor eget
                                                imperdiet libero
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <hr className="line" />
                            <div className="widget widget_equipment">
                                <i className="icon md-config"></i>
                                <h4 className="xsm black">Equipment</h4>
                                <div className="equipment-body">
                                    {courseData.tools_required.map(
                                        (tool, index, tools) =>
                                            tool +
                                            (index === tools.length - 1
                                                ? ""
                                                : ", ")
                                    )}
                                    {/* <a href="#">Photoshop CC</a>,
                                    <a href="#">Illustrator CC</a> */}
                                </div>
                            </div>

                            <div className="widget widget_tags">
                                <i className="icon md-download-2"></i>
                                <h4 className="xsm black">Tag</h4>
                                <div className="tagCould">
                                    {courseData.tags.map(
                                        (tag, index, tags) =>
                                            tag +
                                            (index === tags.length - 1
                                                ? ""
                                                : ", ")
                                    )}
                                </div>
                            </div>

                            <hr className="line" />

                            <div className="current-wrapper">
                                <h4 className="xsm black">Current outline</h4>
                                <ul className="current-outline">
                                    <li>
                                        <span>
                                            {courseData.lectures.length}
                                        </span>
                                        lectures
                                    </li>
                                    {/* <li>
                                        <span>1</span>quizzes
                                    </li>
                                    <li>
                                        <span>30</span>units
                                    </li>
                                    <li>
                                        <span>5</span>assignments
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-action confirm-save">
                    <input
                        type="submit"
                        value="Go Back"
                        className="submit mc-btn-3 btn-style-6"
                        onClick={() => setFormPage(Page.OUTLINE)}
                    />
                    <input
                        type="submit"
                        value="Confirm And Create"
                        className="submit mc-btn-3 btn-style-1"
                        onClick={createCourse}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreatePublish;
