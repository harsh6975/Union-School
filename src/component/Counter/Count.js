import React, { useEffect, useState, useRef } from "react";
import styles from "./counter.module.css";

function Count({ item }) {
  const { label, count, duration, img } = item;
  const [incrementcount, setIncrementCount] = useState("0");
  const countRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger the callback when at least 50% of the element is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(countRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter();
      }
    });
  };

  const startCounter = () => {
    let start = 0;
    const end = parseInt(count?.toString().substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setIncrementCount(String(start) + count?.toString().substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  };

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: ` url(${img})`,
      }}
      ref={countRef}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h4>{label}</h4>
        <h2>{incrementcount}</h2>
      </div>
    </div>
  );
}

export default Count;
