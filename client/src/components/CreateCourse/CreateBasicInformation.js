import { BsCameraVideoFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const CreateBasicInformation = ({ iconSize }) => {
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
                            <div className="wide-input create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Course Name</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-item">
                                            <input
                                                type="text"
                                                placeholder="Write here..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="description create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>Introduction</h4>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="description-editor text-form-editor">
                                            <textarea placeholder="Introduction content"></textarea>
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
                                            <textarea placeholder="Description content"></textarea>
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
                                                <input type="text" />
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
                                                id="beginer"
                                                name="for-level-from"
                                            />
                                            <label for="beginer">
                                                <i className="icon-radio"></i>
                                                Beginer
                                            </label>
                                        </div>

                                        <div className="form-item form-radio radio-style">
                                            <input
                                                type="radio"
                                                id="intermediate"
                                                name="for-level-from"
                                            />
                                            <label for="intermediate">
                                                <i className="icon-radio"></i>
                                                Intermediate
                                            </label>
                                        </div>

                                        <div className="form-item form-radio radio-style">
                                            <input
                                                type="radio"
                                                id="professional"
                                                name="for-level-from"
                                            />
                                            <label for="professional">
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
                                        <h4 className="err">Categories</h4>
                                        <span className="text-err">
                                            choose at least one
                                        </span>
                                    </div>
                                    <div className="col-md-9">
                                        <table className="table-categories">
                                            <tr>
                                                <td>
                                                    <div className="form-item form-checkbox checkbox-style">
                                                        <input
                                                            type="checkbox"
                                                            id="business"
                                                        />
                                                        <label for="business">
                                                            <i className="icon-checkbox icon md-check-1"></i>
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
                                                        <label for="lifestyle">
                                                            <i className="icon-checkbox icon md-check-1"></i>
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
                                                        <label for="game">
                                                            <i className="icon-checkbox icon md-check-1"></i>
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
                                                        <label for="design">
                                                            <i className="icon-checkbox icon md-check-1"></i>
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
                                                        <label for="math-and-science">
                                                            <i className="icon-checkbox icon md-check-1"></i>
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
                                                        <label for="crafts-and-hobbies">
                                                            <i className="icon-checkbox icon md-check-1"></i>
                                                            Crafts and Hobbies
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
                                                        <label for="photography">
                                                            <i className="icon-checkbox icon md-check-1"></i>
                                                            Art and Photography
                                                        </label>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="form-item form-checkbox checkbox-style">
                                                        <input
                                                            type="checkbox"
                                                            id="education"
                                                        />
                                                        <label for="education">
                                                            <i className="icon-checkbox icon md-check-1"></i>
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
                                                        <label for="music">
                                                            <i className="icon-checkbox icon md-check-1"></i>
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
                                                        <label for="health">
                                                            <i className="icon-checkbox icon md-check-1"></i>
                                                            Health and Fitness
                                                        </label>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="form-item form-checkbox checkbox-style">
                                                        <input
                                                            type="checkbox"
                                                            id="social-science"
                                                        />
                                                        <label for="social-science">
                                                            <i className="icon-checkbox icon md-check-1"></i>
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
                                                        <label for="sports">
                                                            <i className="icon-checkbox icon md-check-1"></i>
                                                            Sports
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="tool-requirement create-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4 className="err">
                                            Tool requirement
                                        </h4>
                                        <span className="text-err">
                                            not filled yet
                                        </span>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-item">
                                            <input
                                                type="text"
                                                className="error"
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

export default CreateBasicInformation;
