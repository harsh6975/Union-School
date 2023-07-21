import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Stay from "./Stay";
import Navbar from "./Navbar/Navbar";
import Announcement from "./Announcement";
import Principal from "./Principal";
import Counter from "./Counter/Counter";
import About from "./About";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Announcement />
      <About />
      <Principal />
      <Counter />
      <Stay />
      <Footer />
    </div>
  );
}

export default Home;
