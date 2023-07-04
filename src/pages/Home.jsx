import React from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Menu />
    <Testimonials />
    <About />
    <Footer />
  </>
);

export default Home;
