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
        categories: [
            {
                name: "business",
                content: "Business",
                checked: false,
            },
            {
                name: "lifestyle",
                content: "Lifestyle",
                checked: false,
            },
            {
                name: "game",
                content: "Game",
                checked: false,
            },
            {
                name: "design",
                content: "Design",
                checked: false,
            },
            {
                name: "math",
                content: "Math",
                checked: false,
            },
            {
                name: "hobbies",
                content: "Crafts and Hobbies",
                checked: false,
            },
            {
                name: "photography",
                content: "Art and Photography",
                checked: false,
            },
            {
                name: "education",
                content: "Education",
                checked: false,
            },
            {
                name: "music",
                content: "Music",
                checked: false,
            },
            {
                name: "health",
                content: "Health and Fitness",
                checked: false,
            },
            {
                name: "social",
                content: "Social Science",
                checked: false,
            },
            {
                name: "sports",
                content: "Sports",
                checked: false,
            },
        ],
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

    const onGoalsChange = newArray => {
        setCourseData(prevState => ({
            ...prevState,
            goals: newArray,
        }));
    };

    const onCategoriesChange = e => {
        setCourseData(prevState => ({
            ...prevState,
            categories: courseData.categories.map(category => {
                if (category.name === e.target.id) {
                    category.checked = e.target.checked;
                }
                return category;
            }),
        }));
    };

    return (
        <>
            <CourseTitle iconSize={iconSize} name={name} onChange={onChange} />
            <CreateBasicInformation
                iconSize={iconSize}
                courseData={courseData}
                onChange={onChange}
                onGoalsChange={onGoalsChange}
                onCategoriesChange={onCategoriesChange}
            />
        </>
    );
};

export default CreateCourse;
