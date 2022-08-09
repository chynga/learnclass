import { BsCameraVideoFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { BsCheckSquareFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const CreateBasicInformation = ({ iconSize, courseData, onChange }) => {
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
                                            <input
                                                type="text"
                                                placeholder="Write here..."
                                                id="goals"
                                                name="goals"
                                                value={goals}
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
                                                <tr>
                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="business"
                                                            />
                                                            <label htmlFor="business">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Business
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="lifestyle"
                                                            />
                                                            <label htmlFor="lifestyle">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Lifestyle
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="game"
                                                            />
                                                            <label htmlFor="game">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Game
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="design"
                                                            />
                                                            <label htmlFor="design">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Design
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="math-and-science"
                                                            />
                                                            <label htmlFor="math-and-science">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Math and Science
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="crafts-and-hobbies"
                                                            />
                                                            <label htmlFor="crafts-and-hobbies">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Crafts and
                                                                Hobbies
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="photography"
                                                            />
                                                            <label htmlFor="photography">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Art and
                                                                Photography
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="education"
                                                            />
                                                            <label htmlFor="education">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Education
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="music"
                                                            />
                                                            <label htmlFor="music">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Music
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="health"
                                                            />
                                                            <label htmlFor="health">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Health and
                                                                Fitness
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="social-science"
                                                            />
                                                            <label htmlFor="social-science">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Social Science
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="form-item form-checkbox checkbox-style">
                                                            <input
                                                                type="checkbox"
                                                                id="sports"
                                                            />
                                                            <label htmlFor="sports">
                                                                <BsCheckSquareFill
                                                                    size={
                                                                        iconSize
                                                                    }
                                                                    className="icon-checkbox"
                                                                />
                                                                Sports
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

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

const ArrayOfInputs = () => {
    const [inputFields, setInputFields] = useState([
        {
            fullName: "",
        },
    ]);

    const addInputField = () => {
        setInputFields([
            ...inputFields,
            {
                fullName: "",
            },
        ]);
    };
    const removeInputFields = index => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    };
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    {inputFields.map((data, index) => {
                        const { fullName, emailAddress, salary } = data;
                        return (
                            <div className="row my-3" key={index}>
                                <div className="col">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            onChange={evnt =>
                                                handleChange(index, evnt)
                                            }
                                            value={fullName}
                                            name="fullName"
                                            className="form-control"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                </div>

                                <div className="col">
                                    {inputFields.length !== 1 ? (
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={removeInputFields}
                                        >
                                            x
                                        </button>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    <div className="row">
                        <div className="col-sm-12">
                            <button
                                className="btn btn-outline-success "
                                onClick={addInputField}
                            >
                                Add New
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4"></div>
        </div>
    );
};

export default CreateBasicInformation;
