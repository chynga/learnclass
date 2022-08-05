import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import { Spinner } from "reactstrap";

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
    });

    const { firstname, lastname, email, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        state => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate("/");
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = e => {
        e.preventDefault();

        if (password !== password2) {
            toast.error("Passwords do not match");
        } else {
            const userData = {
                name: firstname + " " + lastname,
                email,
                password,
                role: e.nativeEvent.submitter.name,
            };

            dispatch(register(userData));
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section id="login-content" className="login-content">
            <div className="awe-parallax bg-login-content"></div>
            <div className="awe-overlay"></div>
            <div className="container">
                <div className="row  justify-content-md-end">
                    <div className="col-lg-4 pull-right">
                        <div className="form-login">
                            <form onSubmit={onSubmit}>
                                <h2 className="text-uppercase">sign up</h2>
                                <div className="form-fullname">
                                    <input
                                        className="first-name"
                                        type="text"
                                        placeholder="First name"
                                        id="firstname"
                                        name="firstname"
                                        value={firstname}
                                        onChange={onChange}
                                        required
                                    />
                                    <input
                                        className="last-name"
                                        type="text"
                                        placeholder="Last name"
                                        id="lastname"
                                        name="lastname"
                                        value={lastname}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="form-email">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="form-password">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="form-password">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        id="password2"
                                        name="password2"
                                        value={password2}
                                        onChange={onChange}
                                        required
                                    />
                                </div>

                                <div className="form-submit-1">
                                    <input
                                        type="submit"
                                        name="student"
                                        value="Become a member"
                                        className="mc-btn btn-style-1"
                                    />
                                </div>
                                <div className="form-submit-1">
                                    <input
                                        type="submit"
                                        name="teacher"
                                        value="Become a teacher"
                                        className="mc-btn btn-style-1"
                                    />
                                </div>
                                <div className="link">
                                    <Link to="/login">
                                        <i className="icon md-arrow-right"></i>
                                        Already have account ? Log in
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="image">
                        <img src="images/homeslider/img-thumb.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
