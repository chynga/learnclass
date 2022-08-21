import { BsArrowsMove } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { GiPencil } from "react-icons/gi";
import { BsCaretDownSquare } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { Page } from "./CreateCourse";

const CreateLectures = ({
    lectures,
    onLecturesChange,
    iconSize,
    setFormPage,
}) => {
    const onChange = (e, id) => {
        const lecture = lectures.find(lecture => lecture.id === id);
        lecture[e.target.name] = e.target.value;
        lectures.map(lec => (lec.id === id ? lecture : lec));
        onLecturesChange(lectures);
    };

    return (
        <div className="col-md-9">
            <div className="create-course-content">
                <div className="tab-content">
                    <div id="design-outline">
                        <div className="current-wrapper">
                            <h4 className="sm black">Current outline</h4>
                            <ul className="current-outline">
                                <li>
                                    <span>{lectures.length}</span>lectures
                                </li>
                            </ul>
                        </div>

                        <div className="dc-sections">
                            <div className="dc-section-info">
                                <div className="dc-section-body">
                                    {lectures.map(lecture => {
                                        return (
                                            <div
                                                key={lecture.id}
                                                className="dc-unit-info dc-course-item"
                                            >
                                                <div className="dc-content-title">
                                                    <h5 className="xsm black mt-2">
                                                        {lecture.title}
                                                    </h5>
                                                    <div className="course-region-tool">
                                                        <a
                                                            href="#"
                                                            className="edit"
                                                            title="edit"
                                                        >
                                                            <GiPencil
                                                                size={iconSize}
                                                            />
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
                                                                    <label
                                                                        htmlFor={
                                                                            "title-" +
                                                                            lecture.id
                                                                        }
                                                                    >
                                                                        Title
                                                                    </label>
                                                                </td>
                                                                <td className="td-form-item">
                                                                    <div className="form-item">
                                                                        <input
                                                                            id={
                                                                                "title-" +
                                                                                lecture.id
                                                                            }
                                                                            name="title"
                                                                            type="text"
                                                                            value={
                                                                                lecture.title
                                                                            }
                                                                            onChange={e => {
                                                                                onChange(
                                                                                    e,
                                                                                    lecture.id
                                                                                );
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="tb-desc">
                                                                <td className="label-info">
                                                                    <label
                                                                        htmlFor={
                                                                            "description-" +
                                                                            lecture.id
                                                                        }
                                                                    >
                                                                        Description
                                                                    </label>
                                                                </td>
                                                                <td className="td-form-item">
                                                                    <div className="form-textarea-wrapper">
                                                                        <textarea
                                                                            id={
                                                                                "description-" +
                                                                                lecture.id
                                                                            }
                                                                            name="description"
                                                                            value={
                                                                                lecture.description
                                                                            }
                                                                            onChange={e => {
                                                                                onChange(
                                                                                    e,
                                                                                    lecture.id
                                                                                );
                                                                            }}
                                                                        ></textarea>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="tb-wide-input">
                                                                <td className="label-info">
                                                                    <label
                                                                        htmlFor={
                                                                            "video-" +
                                                                            lecture.id
                                                                        }
                                                                    >
                                                                        Video
                                                                        URL
                                                                    </label>
                                                                </td>
                                                                <td className="td-form-item">
                                                                    <div className="form-item">
                                                                        <input
                                                                            id={
                                                                                "video-" +
                                                                                lecture.id
                                                                            }
                                                                            name="videoURL"
                                                                            type="text"
                                                                            value={
                                                                                lecture.videoURL
                                                                            }
                                                                            onChange={e => {
                                                                                onChange(
                                                                                    e,
                                                                                    lecture.id
                                                                                );
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        );
                                    })}

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

                                    <div className="form-action">
                                        <input
                                            type="submit"
                                            value="Previous"
                                            className="submit mc-btn-3 btn-style-1 me-3"
                                            onClick={() =>
                                                setFormPage(Page.BASIC)
                                            }
                                        />
                                        <input
                                            type="submit"
                                            value="Next"
                                            className="submit mc-btn-3 btn-style-1"
                                            onClick={() =>
                                                setFormPage(Page.PREVIEW)
                                            }
                                        />
                                    </div>
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
