import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from "reactstrap";

export default function CourseItem({ course }) {
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
