import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CoursePreview = ({ course, user }) => {
    return (
        <div className="col-sm-6 col-md-4">
            <div className="mc-item mc-item-2">
                <div className="image-heading">
                    <img src={course.bannerURL} alt="" />
                </div>
                <div className="content-item">
                    <div className="image-author">
                        <img src="images/avatar-1.jpg" alt="" />
                    </div>
                    <h4>
                        <Link to={`/courses/${course._id}`}>{course.name}</Link>
                    </h4>
                    <div className="name-author">
                        By <a href="#">{course.teacher.name}</a>
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
                        <BsPeopleFill />
                        {course.students.length}
                    </div>
                    <div className="price">Free</div>
                </div>
            </div>
        </div>
    );
};

export default CoursePreview;
