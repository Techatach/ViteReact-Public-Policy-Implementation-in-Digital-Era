import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Users from "./crud/Users";
import Register from "./crud/Register";
import Edit from "./crud/Edit";
import Details from "./crud/Details";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Login from "./components/Login";
import About from "./components/About";
import Page from "./components/Page";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/user" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimo" element={<Testimonial />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<Details />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
