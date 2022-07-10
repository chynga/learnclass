import React, { useState, useRef, useEffect, Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Container, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import { getCourses, reset } from "../features/courses/courseSlice";
import CourseItem from "./CourseItem";

const CourseList = () => {
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
