import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Testimonial from "./pages/Testimonial/Testimonial";
import AppointmentForm from "./pages/AppointmentForm/AppointmentForm";
import HospitalBlog from "./pages/Blogs/Blogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./pages/About/About"));
const HospitalGallery = lazy(() => import("./pages/Gallery/Gallery"));

const App = () => {
  return (
    <div className="font-display">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<HospitalGallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<HospitalBlog />} />
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="testimonial" element={<Testimonial />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
