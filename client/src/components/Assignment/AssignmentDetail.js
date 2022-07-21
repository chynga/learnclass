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
import AssignmentModal from "./AssignmentModal";

import {
    deleteAssignment,
    getAssignmentById,
    reset,
} from "../../features/assignments/assignmentSlice";
import { DeleteButton } from "../Buttons";

export default function CourseDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const onDelete = () => {
        dispatch(deleteAssignment({ courseId: id, assignmentId }));
        navigate(`/courses/${id}/assignments`);
    };

    return (
        <Card className="text-start">
            <CardBody>
                <CardTitle tag="h5">
                    {selectedAssignment.title}
                    <AssignmentModal
                        courseId={id}
                        assignment={selectedAssignment}
                    />
                    <DeleteButton onDelete={onDelete} />
                </CardTitle>
                <CardText>{selectedAssignment.description}</CardText>
                <Resourses assignment={selectedAssignment} />
            </CardBody>
        </Card>
    );
}
