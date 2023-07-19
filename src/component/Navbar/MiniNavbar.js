import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";

function MiniNavbar() {
  return (
    <div className={styles.miniheader}>
      <ul>
        <Link href="tel:7718611100">
          <div className={styles.icons}>
            <WifiCalling3Icon />
            &nbsp; +91 7718611100
          </div>
        </Link>
        <Link href="mailto:unionschoolnt@gmail.com">
          <div className={styles.icons}>
            <EmailIcon />
            &nbsp; unionschoolnt@gmail.com
          </div>
        </Link>
        <Link href="/careers" className={styles.icons}>
          <div className={styles.icons}>
            <WorkIcon />
            &nbsp; Careers
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default MiniNavbar;
