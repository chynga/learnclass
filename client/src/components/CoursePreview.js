import { BsPeopleFill } from "react-icons/bs";

const CoursePreview = () => {
    return (
        <div className="col-sm-6 col-md-4">
            <div className="mc-item mc-item-2">
                <div className="image-heading">
                    <img src="images/feature/img-1.jpg" alt="" />
                </div>
                <div className="meta-categories">
                    <a href="#">Web design</a>
                </div>
                <div className="content-item">
                    <div className="image-author">
                        <img src="images/avatar-1.jpg" alt="" />
                    </div>
                    <h4>
                        <a href="course-intro.html">
                            The Complete Digital Photography Course Amazon Top
                            Seller
                        </a>
                    </h4>
                    <div className="name-author">
                        By <a href="#">Name of Mr or Mrs</a>
                    </div>
                </div>
                <div className="ft-item">
                    <div className="rating">
                        <a href="#" className="active"></a>
                        <a href="#" className="active"></a>
                        <a href="#" className="active"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                    <div className="view-info">
                        <BsPeopleFill />
                        2568
                    </div>
                    <div className="price">Free</div>
                </div>
            </div>
        </div>
    );
};

export default CoursePreview;
