import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Stay from "./Stay";
import Navbar from "./Navbar/Navbar";
import Announcement from "./Announcement";
import Principal from "./Principal";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Announcement />
      <Principal />
      <Stay />
      <Footer />
    </div>
  );
}

export default Home;
