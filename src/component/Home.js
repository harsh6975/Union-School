import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Stay from "./Stay";
import Navbar from "./Navbar/Navbar";
import Announcement from "./Announcement";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Announcement />
      <Stay />
      <Footer />
    </div>
  );
}

export default Home;
