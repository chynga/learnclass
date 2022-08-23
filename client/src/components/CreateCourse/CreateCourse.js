import { useEffect, useState } from "react";
import CourseTitle from "./CourseName";
import CreateBasicInformation from "./CreateBasicInformation";
import CreateLectures from "./CreateLectures";
import Sidebar from "./Sidebar";
import CreatePublish from "./CreatePublish";
import { useSelector } from "react-redux";

// import { v4 as uuid } from "uuid"; --- for test

export const Page = {
    BASIC: "Basic Information",
    OUTLINE: "Design Course",
    PUBLISH: "Publish Course",
};

const CreateCourse = () => {
    const iconSize = 18;
    const { user } = useSelector(state => state.auth);
    const [formPage, setFormPage] = useState(Page.BASIC);
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
        lectures: [
            // {   --- for test
            //     id: uuid(),
            //     title: "Lecture 1",
            //     description: "This is the description for lecture 1",
            //     videoURL: "https://github.com/atlassian/react-beautiful-dnd",
            // },
            // {
            //     id: uuid(),
            //     title: "Lecture 2",
            //     description: "This is the description for lecture 2",
            //     videoURL: "https://github.com/atlassian/react-beautiful-dnd",
            // },  --- for test
        ],
    });
    const { name, lectures } = courseData;

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

    const onToolsRequiredChange = newArray => {
        setCourseData(prevState => ({
            ...prevState,
            tools_required: newArray,
        }));
    };

    const onTagsChange = newArray => {
        setCourseData(prevState => ({
            ...prevState,
            tags: newArray,
        }));
    };

    const onLecturesChange = newArray => {
        setCourseData(prevState => ({
            ...prevState,
            lectures: newArray,
        }));
    };

    return (
        <>
            {formPage === Page.BASIC && (
                <CourseTitle
                    iconSize={iconSize}
                    name={name}
                    onChange={onChange}
                />
            )}

            <section
                id="create-course-section"
                className="create-course-section"
            >
                <div className="container">
                    <div className="row">
                        <Sidebar
                            iconSize={iconSize}
                            formPage={formPage}
                            Page={Page}
                        />
                        {formPage === Page.BASIC && (
                            <CreateBasicInformation
                                iconSize={iconSize}
                                courseData={courseData}
                                onChange={onChange}
                                onGoalsChange={onGoalsChange}
                                onCategoriesChange={onCategoriesChange}
                                onToolsRequiredChange={onToolsRequiredChange}
                                onTagsChange={onTagsChange}
                                setFormPage={setFormPage}
                            />
                        )}
                        {formPage === Page.OUTLINE && (
                            <CreateLectures
                                lectures={lectures}
                                onLecturesChange={onLecturesChange}
                                iconSize={iconSize}
                                setFormPage={setFormPage}
                            />
                        )}
                        {formPage === Page.PUBLISH && (
                            <CreatePublish
                                courseData={courseData}
                                iconSize={iconSize}
                                setFormPage={setFormPage}
                                user={user}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CreateCourse;
