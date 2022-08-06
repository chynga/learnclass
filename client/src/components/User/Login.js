import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import { Spinner } from "reactstrap";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

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

        const userData = {
            email,
            password,
        };

        dispatch(login(userData));
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section id="login-content" className="login-content">
            <div className="awe-parallax bg-login-content"></div>
            <div className="awe-overlay"></div>
            <div className="container">
                <div className="row justify-content-md-end">
                    <div className="col-xs-12 col-lg-4 pull-right">
                        <div className="form-login">
                            <form onSubmit={onSubmit}>
                                <h2 className="text-uppercase">sign in</h2>
                                <div className="form-email">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                        required
                                        placeholder="Email"
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
                                <div className="form-check">
                                    <input type="checkbox" id="check" />
                                    <label htmlFor="check">
                                        <i className="icon md-check-2"></i>
                                        Remember me
                                    </label>
                                    <a href="#">Forget password?</a>
                                </div>
                                <div className="form-submit-1">
                                    <input
                                        type="submit"
                                        value="Sign In"
                                        className="mc-btn btn-style-1"
                                    />
                                </div>
                                <div className="link">
                                    <Link to="/register">
                                        <i className="icon md-arrow-right"></i>
                                        Don’t have account yet ? Join Us
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

export default Login;
