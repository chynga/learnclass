import { BsArrowsMove } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { GiPencil } from "react-icons/gi";
import { BsCaretDownSquare } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

const CreateLectures = ({ iconSize }) => {
    return (
        <div className="col-md-9">
            <div className="create-course-content">
                <div className="tab-content">
                    <div id="design-outline">
                        <div className="current-wrapper">
                            <h4 className="sm black">Current outline</h4>
                            <ul className="current-outline">
                                <li>
                                    <span>4</span>lectures
                                </li>
                            </ul>
                        </div>

                        <div className="dc-sections">
                            <div className="dc-section-info">
                                <div className="dc-section-body">
                                    <div className="dc-unit-info dc-course-item">
                                        <div className="dc-content-title">
                                            <h5 className="xsm black mt-2">
                                                Title of lecture
                                            </h5>
                                            <div className="course-region-tool">
                                                <a
                                                    href="#"
                                                    className="edit"
                                                    title="edit"
                                                >
                                                    <GiPencil size={iconSize} />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="drag"
                                                    title="drag"
                                                >
                                                    <BsArrowsMove
                                                        size={iconSize}
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="delete"
                                                    title="delete"
                                                >
                                                    <FaTrashAlt
                                                        size={iconSize}
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="save"
                                                    title="save"
                                                >
                                                    <BsCaretDownSquare
                                                        size={iconSize}
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="unit-body dc-item-body">
                                            <table className="tb-course">
                                                <tbody>
                                                    <tr className="tb-wide-input">
                                                        <td className="label-info">
                                                            <label htmlFor="title">
                                                                Title
                                                            </label>
                                                        </td>
                                                        <td className="td-form-item">
                                                            <div className="form-item">
                                                                <input type="text" />
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="tb-desc">
                                                        <td className="label-info">
                                                            <label htmlFor="description">
                                                                Description
                                                            </label>
                                                        </td>
                                                        <td className="td-form-item">
                                                            <div className="form-textarea-wrapper">
                                                                <textarea></textarea>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="tb-wide-input">
                                                        <td className="label-info">
                                                            <label htmlFor="video">
                                                                Video URL
                                                            </label>
                                                        </td>
                                                        <td className="td-form-item">
                                                            <div className="form-item">
                                                                <input type="text" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <ul className="dc-btn">
                                        <li>
                                            <a
                                                href="#"
                                                className="mc-btn-3 btn-style-7"
                                            >
                                                <GoPlus
                                                    className="icon"
                                                    size={iconSize}
                                                />
                                                Add Lecture
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateLectures;
