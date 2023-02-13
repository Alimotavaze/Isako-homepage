import { Box } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
export default function LeftArrow() {
  return (
    <>
      <Box style={{ zIndex: "1100" }}>
        <FaArrowRight />
      </Box>
    </>
  );
}
