import { BsCameraVideoFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { BsCheckSquareFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

const CreateBasicInformation = ({
    iconSize,
    courseData,
    onChange,
    onGoalsChange,
    onCategoriesChange,
}) => {
    const {
        intro,
        description,
        goals,
        bannerURL,
        promoURL,
        duration,
        difficulty,
        categories,
        tools_required,
        tags,
        lectures,
    } = courseData;

    return (
        <section id="create-course-section" className="create-course-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="create-course-sidebar">
                            <ul className="list-bar">
                                <li className="active">
                                    <span className="count">1</span>Basic
                                    Information
                                </li>
                                <li>
                                    <span className="count">2</span>Design
                                    Course
                                </li>
                                <li>
                                    <span className="count">3</span>Publish
                                    Course
                                </li>
                            </ul>
                            <div className="support">
                                <a href="#">
                                    <BsCameraVideoFill
                                        size={iconSize}
                                        className="icon"
                                    />
                                    See how it work short tutorial
                                </a>
                                <a href="#">
                                    <BiSupport
                                        size={iconSize}
                                        className="icon"
                                    />
                                    Instant Support
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="create-course-content">
                            <div className="description create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Introduction</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="description-editor text-form-editor">
                                            <textarea
                                                placeholder="Introduction content"
                                                id="intro"
                                                name="intro"
                                                value={intro}
                                                onChange={onChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="description create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Description</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="description-editor text-form-editor">
                                            <textarea
                                                placeholder="Description content"
                                                id="description"
                                                name="description"
                                                value={description}
                                                onChange={onChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wide-input create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Course Goals</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-item">
                                            <ArrayOfInputs
                                                iconSize={iconSize}
                                                array={goals}
                                                onArrayChange={onGoalsChange}
                                                placeholder={
                                                    "Write the goal of the course"
                                                }
                                                addButtonText={"New Goal"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wide-input create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Course Banner</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-item">
                                            <input
                                                type="text"
                                                placeholder="Paste URL"
                                                id="bannerURL"
                                                name="bannerURL"
                                                value={bannerURL}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wide-input create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Promo Video</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-item">
                                            <input
                                                type="text"
                                                placeholder="Paste URL"
                                                id="promoURL"
                                                name="promoURL"
                                                value={promoURL}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="duration create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Duration</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="duration-ct">
                                            <div className="form-item">
                                                <input
                                                    type="text"
                                                    id="duration"
                                                    name="duration"
                                                    value={duration}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            <span className="day">days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="for-level-from create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Level</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-item form-radio radio-style">
                                            <input
                                                type="radio"
                                                id="beginner"
                                                name="difficulty"
                                                onChange={onChange}
                                                defaultChecked
                                            />
                                            <label htmlFor="beginner">
                                                <i className="icon-radio"></i>
                                                Beginner
                                            </label>
                                        </div>

                                        <div className="form-item form-radio radio-style">
                                            <input
                                                type="radio"
                                                id="intermediate"
                                                name="difficulty"
                                                onChange={onChange}
                                            />
                                            <label htmlFor="intermediate">
                                                <i className="icon-radio"></i>
                                                Intermediate
                                            </label>
                                        </div>

                                        <div className="form-item form-radio radio-style">
                                            <input
                                                type="radio"
                                                id="professional"
                                                name="difficulty"
                                                onChange={onChange}
                                            />
                                            <label htmlFor="professional">
                                                <i className="icon-radio"></i>
                                                Professional
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Categories
                                categories={categories}
                                onCategoriesChange={onCategoriesChange}
                                iconSize={iconSize}
                            />

                            <div className="tool-requirement create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4 /*className="err"*/>
                                            Tool requirement
                                        </h4>
                                        {/* <span className="text-err">
                                            not filled yet
                                        </span> */}
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-item">
                                            <input
                                                type="text"
                                                // className="error"
                                            />
                                            <span>
                                                type your tool, separated by
                                                comma or space
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tag-item create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Tag</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-item">
                                            <input type="text" />
                                            <span>
                                                type your tool, separated by
                                                comma or space
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-action">
                                <input
                                    type="submit"
                                    value="Save and Next"
                                    className="submit mc-btn-3 btn-style-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Categories = ({ categories, onCategoriesChange, iconSize }) => {
    return (
        <div className="categories-item create-item">
            <div className="row">
                <div className="col-md-3">
                    <h4 /*className="err"*/>Categories</h4>
                    {/* <span className="text-err">
                                            choose at least one
                                        </span> */}
                </div>
                <div className="col-md-9">
                    <table className="table-categories">
                        <tbody>
                            {categories
                                // makes 2 dimensional array
                                .reduce(
                                    (rows, key, index) =>
                                        (index % 3 == 0
                                            ? rows.push([key])
                                            : rows[rows.length - 1].push(
                                                  key
                                              )) && rows,
                                    []
                                )
                                .map((row, index) => {
                                    return (
                                        <tr key={index}>
                                            {row.map(category => {
                                                return (
                                                    <td key={category.name}>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id={
                                                                    category.name
                                                                }
                                                                defaultChecked={
                                                                    category.checked
                                                                }
                                                                onChange={
                                                                    onCategoriesChange
                                                                }
                                                            />
                                                            <label
                                                                htmlFor={
                                                                    category.name
                                                                }
                                                            >
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                {
                                                                    category.content
                                                                }
                                                            </label>
                                                        </div>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const ArrayOfInputs = ({
    array,
    onArrayChange,
    placeholder,
    iconSize,
    addButtonText,
}) => {
    useEffect(() => {
        if (array.length === 0) {
            onArrayChange([""]);
        }
    });

    const addInputField = () => {
        onArrayChange([...array, ""]);
    };

    const removeInputFields = index => {
        const rows = [...array];
        rows.splice(index, 1);
        onArrayChange(rows);
    };

    const handleChange = (index, evnt) => {
        const { value } = evnt.target;
        const list = [...array];
        list[index] = value;
        onArrayChange(list);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-11">
                    {array.map((element, index) => {
                        return (
                            <div className="row my-3" key={index}>
                                <div className="col">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            onChange={evnt =>
                                                handleChange(index, evnt)
                                            }
                                            value={element}
                                            className="form-control"
                                            placeholder={placeholder}
                                        />
                                    </div>
                                </div>

                                <div className="col">
                                    {array.length !== 1 ? (
                                        <TiDeleteOutline
                                            size={iconSize}
                                            style={{
                                                color: "red",
                                                cursor: "pointer",
                                            }}
                                            onClick={removeInputFields}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    <div className="row">
                        <div className="col-sm-12">
                            <a
                                className="add-instructor"
                                onClick={addInputField}
                            >
                                <FaPlus size={iconSize} className="icon" />
                                {addButtonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
    );
};

export default CreateBasicInformation;
