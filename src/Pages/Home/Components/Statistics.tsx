/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography } from "@mui/material";
import React from "react";
import StatisticsImage from "../../../Images/png/statistics.png";
import Namayandegiha from "../../../Images/SVG/Tool.svg";
import Forooshgahha from "../../../Images/SVG/Mecanics.svg";
import Ghataat from "../../../Images/SVG/mec2.svg";
export default function Statistics() {
  const styles = {
    container: {
      minHeight: 200,
      backgroundImage: `url(${StatisticsImage})`,
    },
  };
  return (
    <Box
      style={styles.container}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 8, md: 12 },
        color: "common.white",
        flexWrap: { xs: "wrap", sm: "no-wrap" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h2">665</Typography>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <img src={Namayandegiha} style={{ height: 60 }} />
          </Box>
        </Box>
        <Box>
          <Typography variant="h4">نمایندگی‌ها</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h2">1,151</Typography>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <img src={Forooshgahha} style={{ height: 60 }} />
          </Box>
        </Box>
        <Box>
          <Typography variant="h4">فروشگاه‌ها</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h2">6,415,216</Typography>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <img src={Ghataat} style={{ height: 60 }} />
          </Box>
        </Box>
        <Box>
          <Typography variant="h4">قطعات توزیع شده در یک سال گذشته</Typography>
        </Box>
      </Box>
    </Box>
  );
}
