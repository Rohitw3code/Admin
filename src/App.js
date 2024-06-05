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


function App() {
  return (<>
      <Router>
        <Routes>
          <Route exact path="/" element={<AdminLogin />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/student" element={<Student />} />
          <Route path="/home" element={<Dashome/>}/>
          <Route path="/student-details/:studentId/:name/:email" element={<StudentDetail />} /> */}
        </Routes>
      </Router>
  </>
  );
}

export default App;
