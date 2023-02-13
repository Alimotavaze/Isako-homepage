import { Box } from "@mui/material";
import React from "react";
import { useApp } from "../../App";

export default function Cart() {
  const { cart } = useApp();
  return <Box sx={{ mt: 10 }}>Cart</Box>;
}
