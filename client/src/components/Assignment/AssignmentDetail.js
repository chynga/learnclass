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
    getAssignmentById,
    reset,
} from "../../features/assignments/assignmentSlice";

export default function CourseDetail() {
    const dispatch = useDispatch();
    const { selectedAssignment, isLoading, isError, message } = useSelector(
        state => state.assignments
    );
    const { user } = useSelector(state => state.auth);

    const { id, assignmentId } = useParams();

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getAssignmentById({ courseId: id, assignmentId }));

        return () => {
            dispatch(reset());
        };
    }, [isError, message, dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    const Resourses = ({ assignment }) => {
        if (assignment.resourses) {
            return (
                <>
                    {assignment.resourses.map(resourse => {
                        return (
                            <CardText key={resourse._id}>
                                {resourse.url}
                            </CardText>
                        );
                    })}
                </>
            );
        }
        return <></>;
    };

    return (
        <Card className="text-start">
            <CardBody>
                <CardTitle tag="h5">{selectedAssignment.title}</CardTitle>
                <CardText>{selectedAssignment.description}</CardText>
                <Resourses assignment={selectedAssignment} />
            </CardBody>
        </Card>
    );
}
