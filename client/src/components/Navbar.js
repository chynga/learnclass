import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    return (
        <header id="header" className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src="images/logo.png" alt="" />
                    </Link>
                </div>

                <nav className="navigation">
                    <div className="open-menu">
                        <span className="item item-1"></span>
                        <span className="item item-2"></span>
                        <span className="item item-3"></span>
                    </div>

                    <ul className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        {user && user.role === "teacher" ? (
                            <li>
                                <Link to="/courses/new">New Course</Link>
                            </li>
                        ) : (
                            <></>
                        )}
                    </ul>

                    <UserAuthButton user={user} onLogout={onLogout} />
                </nav>
            </div>
        </header>
    );
};

const UserAuthButton = ({ user, onLogout }) => {
    return (
        <>
            {user ? (
                <ul className="menu border-left">
                    <li>
                        <a onClick={onLogout}>Logout</a>
                    </li>
                </ul>
            ) : (
                <ul className="menu border-left">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            )}
        </>
    );
};

export default Navbar;
