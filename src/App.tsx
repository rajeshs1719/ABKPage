import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./app/_layout";

import Home from "./page/Home";
import GalleryPage from "./page/gallery/gallery";
import Events from "./page/Event/Event";
import ContactUs from "./page/contactUs/contact";
import Blog from "./page/blog/Blog";
import Course from "./page/Course/course";
import BlogDetails from "./page/blogDetails/blogdetails";
import Testimonials from "./page/Testimonials/Testimonials";
import AboutUs from "./page/aboutUs/aboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}