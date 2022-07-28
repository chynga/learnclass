import CoursePreview from "./CoursePreview";
import Sidebar from "./Sidebar";

const CourseCatalog = () => {
    // const dispatch = useDispatch();

    // const { courses, isLoading, isError, message } = useSelector(
    //     state => state.courses
    // );

    // useEffect(() => {
    //     if (isError) {
    //         console.log(message);
    //     }

    //     dispatch(getCourses());

    //     return () => {
    //         dispatch(reset());
    //     };
    // }, [isError, message, dispatch]);

    // if (isLoading) {
    //     return <Spinner />;
    // }

    return (
        <section id="categories-content" className="categories-content">
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-9">
                        <div className="content grid">
                            <div className="row">
                                <CoursePreview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCatalog;
