import { Box, Grid, Hidden, Stack, Typography } from "@mui/material";
import React from "react";
import Mobile from "../../../Images/png/mobileApp_home.a160ab6a.png";
import Wavy from "../../../Images/png/app03.592a0070.png";
import Android from "../../../Images/jpg/android.jpg";
import Google from "../../../Images/jpg/google.jpg";
import Bazar from "../../../Images/jpg/bazar.jpg";
import Android2 from "../../../Images/jpg/android2.jpg";
import Ios from "../../../Images/jpg/ios.jpg";
import Myket from "../../../Images/jpg/myket.jpg";

export default function IsacoApp() {
  return (
    <Box
      bgcolor={"common.white"}
      sx={{
        width: "100%",
        position: "relative",
        zIndex: 0,
        paddingY: " 2rem",
        paddingX: 0,
      }}
    >
      <Hidden mdDown>
        <Box
          component="span"
          sx={{
            backgroundColor: "grey.50",
            top: 0,
            left: 0,
            zIndex: -10,
            height: "50%",
            position: "absolute",
            width: "100%",
            display: { md: "inline-block", all: "none" },
          }}
        ></Box>
      </Hidden>

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "grey.500",
          backgroundSize: "100% , 100%",
          zIndex: -5,
          top: 0,
          left: 0,
          WebkitClipPath: {
            md: "polygon(0 28%,100% 28%,100% 72%,0 72%)",
            sm: "unset",
          },
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "var(--bs-gutter-x,.75rem)",
          paddingRight: "var(--bs-gutter-x,.75rem)",
          marginX: "auto",
        }}
      >
        <Stack
          direction={{ sm: "row", xs: "column" }}
          sx={{
            zIndex: 20,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Hidden mdDown>
            <Box
              sx={{
                display: "flex",
                width: "25%",
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: "auto",
              }}
            >
              <img
                src={Mobile}
                alt="اپلیکیشن ایساکو"
                style={{
                  marginLeft: "10%",
                  objectFit: "contain",
                  maxWidth: "100%",
                  verticalAlign: "middle",
                }}
              />
            </Box>
          </Hidden>
          <Hidden xsUp>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: "auto",
              }}
            >
              <img
                src={Mobile}
                alt=" اپلیکیشن ایساکو"
                style={{
                  objectFit: "contain",
                  maxWidth: "25%",
                  verticalAlign: "middle",
                }}
              />
            </Box>
          </Hidden>
          <Stack
            spacing={4}
            sx={{
              maxWidth: "100%",
              direction: "column",
              alignItems: "flexStart",
              justifyContent: "space-evenly",
            }}
          >
            <Box display={"flex"} flexDirection={"row"} gap={1}>
              <Typography variant="h5">
                <a href="/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA/%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%A7%D9%BE%D9%84%DB%8C%DA%A9%DB%8C%D8%B4%D9%86-%D8%A7%DB%8C%D8%B3%D8%A7%DA%A9%D9%88">
                  اپلیکیشن ایساکو
                </a>{" "}
                را از مارکت‌های زیر دریافت کنید:
              </Typography>
            </Box>

            <Grid
              container
              sx={{
                flexWrap: "wrap",
                flexGrow: 1,
                justifyContent: "center",
                gap: 2,
                width: "80%",
              }}
            >
              <Grid item>
                <img
                  src={Bazar}
                  alt="بازار"
                  width={130}
                  style={{ borderRadius: 5 }}
                />
              </Grid>
              <Grid item>
                <img
                  src={Myket}
                  alt="مایکت"
                  width={130}
                  style={{ borderRadius: 5 }}
                />
              </Grid>
              <Grid item>
                <img
                  src={Google}
                  alt="گوگل"
                  width={130}
                  style={{ borderRadius: 5 }}
                />
              </Grid>
              <Grid item>
                <img
                  src={Android}
                  alt="اندروید"
                  width={130}
                  style={{ borderRadius: 5 }}
                />
              </Grid>
              <Grid item>
                <img
                  src={Ios}
                  alt="ios"
                  width={130}
                  style={{ borderRadius: 5 }}
                />
              </Grid>
              <Grid item>
                <img
                  src={Android2}
                  alt="اندروید"
                  width={130}
                  style={{ borderRadius: 5 }}
                />
              </Grid>
            </Grid>
          </Stack>
          <Box
            sx={{
              visibility: { md: "visible", xs: "hidden" },
              mt: -20,
            }}
          >
            <img src={Wavy} alt="تزئینی" style={{ width: 50 }} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
