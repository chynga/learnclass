import React, { useState, useRef, useEffect, Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { coursesSelector, fetchCourses } from "../slices/courses";
import CourseItem from "./CourseItem";

const CourseList = () => {
    const dispatch = useDispatch();
    const { courses, loading, hasErrors } = useSelector(coursesSelector);

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    return (
        <ListGroup>
            {courses.map(course => (
                <ListGroupItem key={course._id}>
                    <CourseItem course={course} />
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default CourseList;
