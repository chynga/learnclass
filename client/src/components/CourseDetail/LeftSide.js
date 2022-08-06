import Moment from "moment";
import { AiFillTags } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BiTime } from "react-icons/bi";
import { BsCalendar2Check } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { enrollToCourse } from "../../features/courses/courseSlice";
import { useDispatch } from "react-redux";

const EnrollButton = ({ user, course }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    console.log(course);

    const enroll = () => {
        if (!user) {
            navigate("/login");
        }

        dispatch(enrollToCourse(id));
        window.location.reload();
    };

    if (user && user.role === "teacher") {
        return <p>Teachers can not enroll to courses</p>;
    }

    if (user && user.role === "student" && course.students.includes(user._id)) {
        return <p>you are enrolled</p>;
    }

    return (
        <a
            href="#"
            className="take-this-course mc-btn btn-style-1"
            onClick={enroll}
        >
            Take this course
        </a>
    );
};

const LeftSide = ({ course, iconSize, user }) => {
    return (
        <div className="col-md-5">
            <div className="sidebar-course-intro">
                <div className="video-course-intro">
                    <div className="inner">
                        <iframe
                            width="100%"
                            height="250vw"
                            src={
                                "https://www.youtube.com/embed/watch?v=hw3Bx5vxKl0"
                            }
                            // src={course.promoURL}
                        ></iframe>
                    </div>
                    <div className="price">Free</div>
                    <EnrollButton user={user} course={course} />
                </div>

                <div className="new-course">
                    <div className="item course-code">
                        <BiTime size={iconSize} className="icon" />
                        <h4>
                            <a href="#">Duration</a>
                        </h4>
                        <p className="detail-course">{course.duration} weeks</p>
                    </div>
                    <div className="item course-code">
                        <BsCalendar2Check size={iconSize} className="icon" />
                        <h4>
                            <a href="#">Open Date</a>
                        </h4>
                        <p className="detail-course">
                            {/* {Moment(course.createdAt).format("LL")} */}
                            {Moment(course.createdAt).format("d MMMM YYYY")}
                            {/* 25 May 2014 */}
                        </p>
                    </div>
                </div>
                <hr className="line" />
                <div className="about-instructor">
                    <h4 className="xsm black bold">About Instructor</h4>
                    <ul>
                        <li>
                            <div className="image-instructor">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU"
                                    alt=""
                                />
                            </div>
                            <div className="info-instructor">
                                <cite className="sm black">
                                    <a href="#">{course.teacher.name}</a>
                                </cite>
                                <p>
                                    Morbi nec nisi ante. Quisque lacus ligula,
                                    iaculis in elit et, interdum semper quam.
                                    Fusce in interdum tortor. Ut sollicitudin
                                    lectus dolor eget imperdiet libero
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className="line" />
                <div className="widget widget_equipment">
                    <IoMdSettings size={iconSize} className="icon" />
                    <h4 className="xsm black bold">Equipment</h4>
                    <div className="equipment-body">
                        {course.tools_required.map((tool, i, tools) => (
                            <a href="#" key={uuid()}>
                                {tool + (i + 1 === tools.length ? "" : ", ")}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="widget widget_tags mb-3">
                    <AiFillTags size={iconSize} className="icon" />
                    <h4 className="xsm black bold">Tag</h4>
                    <div className="tagCould">
                        {course.tags.map((tag, i, tags) => (
                            <a href="#" key={uuid()}>
                                {tag + (i + 1 === tags.length ? "" : ", ")}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;
