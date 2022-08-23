import { BsCameraVideoFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Page } from "./CreateCourse";

const Sidebar = ({ iconSize, formPage }) => {
    return (
        <div className="col-md-3">
            <div className="create-course-sidebar">
                <ul className="list-bar">
                    <li className={formPage === Page.BASIC ? "active" : ""}>
                        <span className="count">1</span>
                        {Page.BASIC}
                    </li>
                    <li className={formPage === Page.OUTLINE ? "active" : ""}>
                        <span className="count">2</span>
                        {Page.OUTLINE}
                    </li>
                    <li className={formPage === Page.PUBLISH ? "active" : ""}>
                        <span className="count">3</span>
                        {Page.PUBLISH}
                    </li>
                </ul>
                <div className="support">
                    <a href="#">
                        <BsCameraVideoFill size={iconSize} className="icon" />
                        See how it work short tutorial
                    </a>
                    <a href="#">
                        <BiSupport size={iconSize} className="icon" />
                        Instant Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
