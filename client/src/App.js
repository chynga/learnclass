import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/AppNavbar";
import CourseList from "./components/CourseList";
import Home from "./components/Home";
import CourseDetail from "./components/CourseDetail";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <AppNavbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/courses" element={<CourseList />} />
                        <Route path="/courses/:id" element={<CourseDetail />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
