import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/AppNavbar";
import CourseList from "./components/CourseList";
import Home from "./components/Home";
import CourseDetail from "./components/CourseDetail";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AssignmentList from "./components/AssignmentList";
import AssignmentDetail from "./components/AssignmentDetail";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppNavbar />
                <Container className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/courses" element={<CourseList />} />
                        <Route path="/courses/:id" element={<CourseDetail />} />
                        <Route
                            path="/courses/:id/assignments"
                            element={<AssignmentList />}
                        />
                        <Route
                            path="/courses/:id/assignments/:assignmentId"
                            element={<AssignmentDetail />}
                        />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Container>
            </Router>
        </Provider>
    );
}

export default App;
