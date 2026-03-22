import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./app/_layout";

import Home from "./page/LandingPage/Home";
import GalleryPage from "./page/gallery/gallery";
import Events from "./page/Event/Event";
import ContactUs from "./page/contactUs/contact";
import Blog from "./page/blog/Blog";
import Course from "./page/Course/course";
import BlogDetails from "./page/blogDetails/blogdetails";
import Testimonials from "./page/Testimonials/Testimonials";
import AboutUs from "./page/aboutUs/aboutUs";
import DirectorMessagePage, {
  directorsData,
} from "./page/aboutUs/DirectorMessagePage";
import JLPTPage from "./page/Course/jlpt";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />

          {/* CHANGED: Make the course route accept a dynamic ID */}
          <Route path="/course/:id" element={<Course />} />
          {/* Optional: Add a fallback for just /course if needed */}
          <Route
            path="/course"
            element={<Navigate to="/course/genban-nihongo" replace />}
          />

          <Route path="/course/jlptandnat" element={<JLPTPage />} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/* Redirect unknown routes */}
          <Route
            path="/director/bangalore"
            element={<DirectorMessagePage data={directorsData.bangalore} />}
          />

          <Route
            path="/director/coimbatore"
            element={<DirectorMessagePage data={directorsData.coimbatore} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
