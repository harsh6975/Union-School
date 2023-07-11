import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Stay from "./Stay";
import School from "./School";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <School />
      <Stay />
      <Footer />
    </div>
  );
}

export default Home;
