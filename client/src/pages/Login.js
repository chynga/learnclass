import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //   const { user, isLoading, isError, isSuccess, message } = useSelector(
    //     (state) => state.auth
    //   )

    //   useEffect(() => {
    //     if (isError) {
    //       toast.error(message)
    //     }

    //     if (isSuccess || user) {
    //       navigate('/')
    //     }

    //     dispatch(reset())
    //   }, [user, isError, isSuccess, message, navigate, dispatch])

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

    //   if (isLoading) {
    //     return <Spinner />
    //   }

    return (
        <Row>
            <div className="col-md-6 offset-md-3">
                <Card className="shadow">
                    <CardBody>
                        <CardTitle className="h5">Register</CardTitle>
                        {/* <section className="heading">
                            <h1>
                                <FaUser /> Register
                            </h1>
                            <p>Please create an account</p>
                        </section> */}

                        <Form>
                            {/* <form onSubmit={onSubmit}> */}
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className="d-grid">
                                <Button
                                    type="submit"
                                    className="btn btn-success btn-block"
                                >
                                    Login
                                </Button>
                            </FormGroup>
                            {/* </form> */}
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </Row>
    );
}

export default Login;
