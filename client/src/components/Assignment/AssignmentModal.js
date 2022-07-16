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
import { createAssignment } from "../../features/assignments/assignmentSlice";
import style from "./Assignment.module.css";
import { v4 as uuid } from "uuid";
// import { WithContext as ReactTags } from "react-tag-input";

// const KeyCodes = {
//     comma: 188,
//     enter: 13,
// };

// const delimiters = [KeyCodes.comma, KeyCodes.enter];

const ItemModal = ({ assignment, courseId }) => {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(assignment ? assignment.title : "");
    const [description, setDescription] = useState(
        assignment ? assignment.description : ""
    );
    const [urls, setUrls] = useState(
        assignment ? assignment.resourses.map(r => r.url) : []
    );
    const [input, setInput] = useState("");
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    const dispatch = useDispatch();

    const handleToggle = () => setModal(!modal);

    const handleChangeTitle = e => setTitle(e.target.value);
    const handleChangeDescription = e => setDescription(e.target.value);

    const onChange = e => {
        const { value } = e.target;
        setInput(value);
    };
    const deleteUrl = index => {
        setUrls(prevState => prevState.filter((_, i) => i !== index));
    };

    const onKeyDown = e => {
        const { key } = e;
        const trimmedInput = input.trim();

        if (
            (key === "," || key === "Enter") &&
            trimmedInput.length
            // && !urls.includes(trimmedInput)
        ) {
            e.preventDefault();
            setUrls(prevState => [...prevState, trimmedInput]);
            setInput("");
        }

        if (
            key === "Backspace" &&
            !input.length &&
            urls.length &&
            isKeyReleased
        ) {
            const urlsCopy = [...urls];
            const poppedUrl = urlsCopy.pop();
            e.preventDefault();
            setUrls(urlsCopy);
            setInput(poppedUrl);
        }

        setIsKeyReleased(false);
    };

    const onKeyUp = () => {
        setIsKeyReleased(true);
    };

    // const handleDeleteResourse = i => {
    //     setResourses(resourses.filter((resourse, index) => index !== i));
    // };
    // const handleAdditionResourse = resourse => {
    //     resourses([...resourses, resourse]);
    // };
    // const handleDragResourse = (resourse, currPos, newPos) => {
    //     const newResourses = resourses.slice();

    //     newResourses.splice(currPos, 1);
    //     newResourses.splice(newPos, 0, resourse);

    //     // re-render
    //     setResourses(newResourses);
    // };

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
                            <div className={style.container}>
                                {urls.map((url, i) => (
                                    <div id={uuid()} className={style.tag}>
                                        {url}
                                        <button onClick={() => deleteUrl(i)}>
                                            x
                                        </button>
                                    </div>
                                ))}
                                <input
                                    value={input}
                                    placeholder="Enter a url"
                                    onKeyDown={onKeyDown}
                                    onKeyUp={onKeyUp}
                                    onChange={onChange}
                                />
                            </div>
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
