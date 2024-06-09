import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import Student from "./Admin/Student"
import StudentDetail from "./Admin/StudentDetail"
import Admin from "./Admin/Admin"



function App() {
  return (<>
      <Router>
        <Routes>
          <Route exact path="/" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student-details/:studentId/:name/:email" element={<StudentDetail />} />
        </Routes>
      </Router>
  </>
  );
}

export default App;
