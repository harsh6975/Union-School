import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Stay from "./Stay";
import School from "./School";
import Navbar from "./Navbar/Navbar";

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
