import React, { useEffect, useState } from "react";
import styles from "../styles/announcement.module.css";
import Line from "./Line";
import { announcements } from "../constants/announcement";

function Announcement() {
  const [parentAcmt, setParentAcmt] = useState([]);
  const [childrenAcmt, setChildrenAcmt] = useState([]);

  useEffect(() => {
    console.log(announcements);
    const a = announcements;
    const filterparent = a.filter((a, b) => {
      return a?.type === "parent";
    });
    filterparent.sort((a, b) => {
      return a?.timeStamp - b?.timeStamp;
    });
    console.log(filterparent);
    setParentAcmt(filterparent);
    const filterchild = announcements.filter((a, b) => {
      return a?.type === "student";
    });
    filterchild.sort((a, b) => {
      return a?.timeStamp - b?.timeStamp;
    });
    console.log(filterchild);
    setChildrenAcmt(filterchild);
  }, []);

  return (
    <div className={styles.announcement}>
      <h1>Announcements</h1>
      <Line />
      <div className={styles.box}>
        <div className={styles.leftcard}>
          <h4>{childrenAcmt?.[0]?.title}</h4>
          <Line />
          <div
            dangerouslySetInnerHTML={{ __html: childrenAcmt?.[0]?.content }}
          ></div>
        </div>
        <div className={styles.rightcard}>
          <h4>{parentAcmt?.[0]?.title}</h4>
          <Line />
          <div
            dangerouslySetInnerHTML={{
              __html: parentAcmt?.[0]?.content,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
