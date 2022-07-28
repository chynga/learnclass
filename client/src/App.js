import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/style.css";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Courses />
                <Footer />
                <Container className="App">
                    <Routes>
                        {/* <Route path="/" element={<Home />} />
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
                        <Route path="/login" element={<Login />} /> */}
                    </Routes>
                </Container>
            </Router>
        </Provider>
    );
}

export default App;
