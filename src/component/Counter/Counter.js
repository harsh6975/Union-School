import * as React from "react";
import Box from "@mui/material/Box";
import count1 from "../../images/count1.jpeg";
import count2 from "../../images/count2.jpeg";
import count3 from "../../images/count3.jpeg";
import count4 from "../../images/count4.jpeg";

import Count from "./Count";

const counterItems = [
  {
    id: "001",
    label: "Certified Teachers",
    count: "56",
    duration: "2",
    img: count1,
  },
  {
    id: "002",
    label: "Students ",
    count: "2700",
    duration: "2",
    img: count2,
  },
  {
    id: "003",
    label: "Pass Out Students",
    count: "1300",
    duration: "2",
    img: count3,
  },
  {
    id: "004",
    label: "Satisfied Parents",
    count: "560",
    duration: "2",
    img: count4,
  },
];

export default function Counter() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#255671",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {counterItems.map((item) => {
          return <Count item={item} />;
        })}
      </Box>
    </Box>
  );
}
