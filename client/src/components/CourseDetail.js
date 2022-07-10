import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Spinner,
} from "reactstrap";
import { getCourseById, reset } from "../features/courses/courseSlice";

export default function CourseDetail() {
    const dispatch = useDispatch();
    const { selectedCourse, isLoading, isError, message } = useSelector(
        state => state.courses
    );

    const { id } = useParams();

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
                <Button tag={Link} to={`/courses/${selectedCourse._id}`}>
                    Info
                </Button>
            </CardBody>
        </Card>
    );
}
