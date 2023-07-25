import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import Announcement from "./Announcement";
import Principal from "./Principal";
import Counter from "./Counter/Counter";
import About from "./About";
import Event from "./Event/Event";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Announcement />
      <About />
      <Event />
      <Principal />
      <Counter />
      <Footer />
    </div>
  );
}

export default Home;
