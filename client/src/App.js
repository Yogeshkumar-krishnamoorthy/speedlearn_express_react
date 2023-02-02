import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";

// const API_ENDPOINT = "http://localhost:3001";

// class App extends React.Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     axios
//       .get(`${API_ENDPOINT}/check`)
//       .then((response) => {
//         this.setState({ data: response.data });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
