import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import {
    getAssignments,
    reset,
} from "../../features/assignments/assignmentSlice";
import AssignmentItem from "./AssignmentItem";
import ItemModal from "./AssignmentModal";

const AssignmentList = () => {
    const dispatch = useDispatch();

    const { assignments, isLoading, isError, message } = useSelector(
        state => state.assignments
    );
    const { id } = useParams();

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getAssignments(id));

        return () => {
            dispatch(reset());
        };
    }, [isError, message, dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <h1>
                Assignments <ItemModal courseId={id} />
            </h1>
            <ListGroup>
                {assignments.map(assignment => (
                    <ListGroupItem key={assignment._id}>
                        <AssignmentItem assignment={assignment} />
                    </ListGroupItem>
                ))}
            </ListGroup>
        </>
    );
};

export default AssignmentList;
