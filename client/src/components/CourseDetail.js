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
} from "reactstrap";
import { courseSelector, fetchCourse } from "../slices/course";

export default function CourseDetail() {
    const dispatch = useDispatch();
    const { course, loading, hasErrors } = useSelector(courseSelector);
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchCourse(id));
    }, [dispatch]);

    return (
        <Card className="text-start">
            <CardBody>
                <CardTitle tag="h5">{course.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {course.credits}
                </CardSubtitle>
                <CardText>{course.description}</CardText>
                <Button tag={Link} to={`/courses/${course._id}`}>
                    Info
                </Button>
            </CardBody>
        </Card>
    );
}
