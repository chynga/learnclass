import CoursePreview from "../CoursePreview";
import Sidebar from "./Sidebar";
import { Spinner } from "reactstrap";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourses, reset } from "../../features/courses/courseSlice";

const CourseCatalog = () => {
    const dispatch = useDispatch();

    const { courses, isLoading, isError, message } = useSelector(
        state => state.courses
    );

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getCourses());

        return () => {
            dispatch(reset());
        };
    }, [isError, message, dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section id="categories-content" className="categories-content">
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-9">
                        <div className="content grid">
                            <div className="row">
                                {courses.map(course => (
                                    <CoursePreview
                                        key={course._id}
                                        course={course}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCatalog;
