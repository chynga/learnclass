import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CourseCatalog from "./components/CourseCatalog/CourseCatalog";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/style.css";
import Login from "./components/User/Login";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<CourseCatalog />} />
                    <Route path="/courses/:id" element={<CourseDetail />} />
                    <Route path="/login" element={<Login />} />
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
                {/* <Home /> */}
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
