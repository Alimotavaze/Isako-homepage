import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BackImage from "../../../Images/SVG/OpenIndustrialBook.svg";
import SmallBookOpen from "../../../Images/SVG/smallOpenBook.svg";
export default function ServiceBoxes() {
  return (
    <Stack
      direction={"column"}
      sx={{
        justifyContent: "center",
        height: { xs: 630, sm: 210 },
        mt: -12,
        backgroundColor: "#fafafa",
      }}
    >
      <Box>
        <Grid
          container
          position={"absolute"}
          px={5}
          spacing={2}
          sx={{
            top: 400,
            justifyContent: { xs: "spaceBetween", sm: "center" },
          }}
        >
          <Grid item xs={12} sm={4} md={4} top={20}>
            <Box
              sx={{
                display: "flex",
                height: 150,
                backgroundImage: `url(${BackImage})`,
                backgroundColor: "#ffffff",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "140px",
                boxShadow: 3,
              }}
            >
              <Box width="60%" sx={{ pt: { xs: 6, sm: 1, md: 4 }, pr: 2 }}>
                <Typography variant="body1" color={"info.main"}>
                  استعلام رایگان گارانتی خودرو در سایت شرکت ایساکو
                </Typography>
                <Typography variant="h4" color={"primary.dark"}>
                  استعلام گارانتی خودرو
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: 100, sm: 50 },
                  height: { xs: 100, sm: 50 },
                  alignSelf: "center",
                  display: "flex",
                }}
              >
                <img
                  src={SmallBookOpen}
                  alt="گارانتی"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} top={20}>
            <Box
              sx={{
                display: "flex",
                height: 150,
                backgroundImage: `url(${BackImage})`,
                backgroundColor: "#ffffff",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "140px",
                boxShadow: 3,
              }}
            >
              <Box width="60%" sx={{ pt: { xs: 6, md: 4, sm: 1 }, pr: 2 }}>
                <Typography variant="body1" color={"info.main"}>
                  استعلام رایگان گارانتی خودرو در سایت شرکت ایساکو
                </Typography>
                <Typography variant="h4" color={"primary.dark"}>
                  استعلام گارانتی خودرو
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: 100, sm: 50 },
                  height: { xs: 100, sm: 50 },
                  alignSelf: "center",
                  display: "flex",
                }}
              >
                <img
                  src={SmallBookOpen}
                  alt="گارانتی"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} top={20}>
            <Box
              sx={{
                display: "flex",
                height: 150,
                backgroundImage: `url(${BackImage})`,
                backgroundColor: "#ffffff",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "140px",
                boxShadow: 3,
              }}
            >
              <Box width="60%" sx={{ pt: { xs: 6, md: 4, sm: 1 }, pr: 2 }}>
                <Typography variant="body1" color={"info.main"}>
                  استعلام رایگان گارانتی خودرو در سایت شرکت ایساکو
                </Typography>
                <Typography variant="h4" color={"primary.dark"}>
                  استعلام گارانتی خودرو
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: 100, sm: 50 },
                  height: { xs: 100, sm: 50 },
                  alignSelf: "center",
                  display: "flex",
                }}
              >
                <img
                  src={SmallBookOpen}
                  alt="گارانتی"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
