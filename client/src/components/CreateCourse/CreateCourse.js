import { useState } from "react";
import CourseTitle from "./CourseName";
import CreateBasicInformation from "./CreateBasicInformation";

const CreateCourse = () => {
    const iconSize = 18;
    const [courseData, setCourseData] = useState({
        name: "",
    });
    const { name } = courseData;

    const onChange = e => {
        setCourseData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <CourseTitle iconSize={iconSize} name={name} onChange={onChange} />
            <CreateBasicInformation iconSize={iconSize} />
        </>
    );
};

export default CreateCourse;
