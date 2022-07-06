import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container,
} from "reactstrap";
import { toast } from "react-toastify";
// import { FaUser } from 'react-icons/fa'
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

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
                name,
                email,
                password,
            };

            dispatch(register(userData));
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

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

                        <Form onSubmit={onSubmit}>
                            {/* <form onSubmit={onSubmit}> */}
                            <FormGroup>
                                <Label for="name">Full Name</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                    required
                                />
                            </FormGroup>
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
                            <FormGroup>
                                <Label for="password2">Confirm Password</Label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    id="password2"
                                    name="password2"
                                    value={password2}
                                    onChange={onChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className="d-grid">
                                <Button
                                    type="submit"
                                    className="btn btn-success btn-block"
                                >
                                    Register
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

export default Register;
