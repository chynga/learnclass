import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import { createAssignment } from "../features/assignments/assignmentSlice";

const ItemModal = ({ assignment, courseId }) => {
    const tempAssignment = {
        title: "",
        description: "",
        resourses: [],
        course: courseId,
    };
    if (assignment) {
        tempAssignment = assignment;
    }

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(assignment ? assignment.title : "");
    const [description, setDescription] = useState(
        assignment ? assignment.description : ""
    );
    const [resourses, setResourses] = useState(
        assignment ? assignment.resourses : []
    );

    const dispatch = useDispatch();

    const handleToggle = () => setModal(!modal);

    const handleChangeTitle = e => setTitle(e.target.value);
    const handleChangeDescription = e => setDescription(e.target.value);

    const handleOnSubmit = e => {
        e.preventDefault();

        const assignmentData = {
            title,
            description,
            course: courseId,
        };

        // Add assignment via action
        dispatch(createAssignment(assignmentData));
        // Close modal
        handleToggle();
    };

    return (
        <div>
            <Button
                color="dark"
                style={{ marginBottom: "2rem" }}
                onClick={handleToggle}
            >
                Add
            </Button>

            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>
                    Add To Shopping List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleOnSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Add assignment"
                                onChange={handleChangeTitle}
                            />
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Add description"
                                onChange={handleChangeDescription}
                            />
                            <Button
                                color="dark"
                                style={{ marginTop: "2rem" }}
                                block
                            >
                                Add Assignment
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ItemModal;
