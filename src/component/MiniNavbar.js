import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
function MiniNavbar() {
  return (
    <header>
      <h1>UNION SCHOOL NEWTOWN</h1>
      <ul className="">
        <Link href="/">
          <FacebookIcon sx={{ color: "white" }} />
        </Link>
        <Link href="/">
          <TwitterIcon sx={{ color: "white" }} />
        </Link>
        <Link href="/">
          <InstagramIcon sx={{ color: "white" }} />
        </Link>
      </ul>
    </header>
  );
}

export default MiniNavbar;
