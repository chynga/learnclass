import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Spinner,
} from "reactstrap";
import {
    enrollToCourse,
    getCourseById,
    reset,
} from "../features/courses/courseSlice";
import { EnrollButton, GoToCourseButton } from "./Buttons";

export default function CourseDetail() {
    const dispatch = useDispatch();
    const { selectedCourse, isLoading, isError, message } = useSelector(
        state => state.courses
    );
    const { user } = useSelector(state => state.auth);

    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getCourseById(id));

        return () => {
            dispatch(reset());
        };
    }, [isError, message, dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    const enroll = () => {
        dispatch(enrollToCourse(id));
        navigate(`${location.pathname}/assignments`);
        // navigate("/");
    };

    const CourseButton = props => {
        if (!props.course._id) {
            return <></>;
        }
        if (!user) {
            return <></>;
        } else if (
            props.course.students.includes(user._id) ||
            props.course.teacher === user._id
        ) {
            return <GoToCourseButton id={props.course._id} />;
        } else if (!props.course.students.includes(user._id)) {
            return <EnrollButton onClick={enroll} />;
        }
    };

    return (
        <Card className="text-start">
            <CardBody>
                <CardTitle tag="h5">
                    {selectedCourse.name || "course name"}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {selectedCourse.credits || "no credit"}
                </CardSubtitle>
                <CardText>
                    {selectedCourse.description || "COurse Descr"}
                </CardText>
                <CourseButton course={selectedCourse} />
            </CardBody>
        </Card>
    );
}
