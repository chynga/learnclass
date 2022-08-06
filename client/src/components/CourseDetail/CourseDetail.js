import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseById, reset } from "../../features/courses/courseSlice";
import { useParams } from "react-router-dom";

import { Spinner } from "reactstrap";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const CourseDetail = () => {
    const dispatch = useDispatch();
    const { selectedCourse, isLoading, isError, message } = useSelector(
        state => state.courses
    );
    const { user } = useSelector(state => state.auth);

    const { id } = useParams();
    const iconSize = 18;

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getCourseById(id));

        return () => {
            dispatch(reset());
        };
    }, [isError, message, dispatch]);

    if (!selectedCourse._id) {
        return <Spinner />;
    }

    return (
        <div>
            <Banner name={selectedCourse.name} />

            <section className="course-top">
                <div className="container">
                    <div className="row mt-5">
                        <LeftSide
                            course={selectedCourse}
                            iconSize={iconSize}
                            user={user}
                        />
                        <RightSide
                            course={selectedCourse}
                            iconSize={iconSize}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const Banner = ({ name }) => {
    return (
        <section className="sub-banner sub-banner-course">
            <div className="awe-static bg-sub-banner-course"></div>
            <div className="container">
                <div className="sub-banner-content">
                    <h2 className="text-center">{name}</h2>
                </div>
            </div>
        </section>
    );
};

export default CourseDetail;
