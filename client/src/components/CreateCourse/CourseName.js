import { GiPencil } from "react-icons/gi";

const CourseName = ({ iconSize, name, onChange }) => {
    return (
        <section className="sub-banner sub-banner-create-course">
            <div className="awe-color bg-color-1"></div>
            <div className="container">
                <input
                    type="text"
                    placeholder="Title of the course goes here"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                />{" "}
                {/* <h2 className="md ilbl">Title of the course goes here</h2> */}
                <label htmlFor="name">
                    <GiPencil size={iconSize} className="icon" />
                </label>
            </div>
        </section>
    );
};

export default CourseName;
