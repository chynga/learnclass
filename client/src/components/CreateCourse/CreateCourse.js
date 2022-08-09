import { useEffect, useState } from "react";
import CourseTitle from "./CourseName";
import CreateBasicInformation from "./CreateBasicInformation";

const CreateCourse = () => {
    const iconSize = 18;
    const [courseData, setCourseData] = useState({
        name: "",
        intro: "",
        description: "",
        goals: [],
        bannerURL: "",
        promoURL: "",
        duration: "",
        difficulty: "beginner",
        categories: [],
        tools_required: [],
        tags: [],
        lectures: [],
    });
    const { name } = courseData;

    useEffect(() => {
        console.log(courseData);
    }, [courseData]);

    const onChange = e => {
        switch (e.target.type) {
            case "radio":
                setCourseData(prevState => ({
                    ...prevState,
                    [e.target.name]: e.target.id,
                }));
                break;
            default:
                setCourseData(prevState => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }));
        }
    };

    return (
        <>
            <CourseTitle iconSize={iconSize} name={name} onChange={onChange} />
            <CreateBasicInformation
                iconSize={iconSize}
                courseData={courseData}
                onChange={onChange}
            />
        </>
    );
};

export default CreateCourse;
