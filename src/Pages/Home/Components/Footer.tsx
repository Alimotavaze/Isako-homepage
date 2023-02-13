import { Box, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Isako from "../../../Images/SVG/isako.svg";
import React from "react";

export default function Footer() {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "primary.dark",
        color: "common.white",
        padding: 4,
      }}
    >
      <Grid container spacing={8} direction={"row"}>
        <Grid item xs={12} md={3}>
          <Box width={100}>
            <img src={Isako} alt="ایساکو" />
          </Box>
          <Box>
            <Typography variant={"h5"}>
              ارائه دهنده خدمات پس از فروش به کلیه محصولات ایران خودرو و شرکتهای
              تابعه آن و تهیه و توزیع و خرید و فروش صادرات و واردات و لوازم یدکی
              انواع خدورو و خدمات پس از فروش تمامی شرکتهای ایران خودرو
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography>منوهای اصلی</Typography>
          </Box>
          <Box></Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography>خدمات</Typography>
            </Box>
            <Box></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>تماس با ما</Typography>
            <Box></Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
