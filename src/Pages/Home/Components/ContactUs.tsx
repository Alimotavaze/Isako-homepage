import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ContactImage from "../../../Images/png/contact-us.png";
import BackImage1 from "../../../Images/jpg/contact-bg-box-01.jpg";
import BackImage2 from "../../../Images/jpg/contact-bg-box-02.jpg";
export default function ContactUs() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row-reverse", xs: "column-reverse" },
          backgroundColor: "#f3f3f3",
          justifyContent: "flex-start",
          width: "100%",
          alignItemms: "flex-start",
          gap: 2,
          pt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            width: { md: "50%", xs: "100%" },
            gap: 2,
            backgroundImage: `url(${BackImage1})`,
            backgroundSize: 250,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: { xs: "left", lg: "left" },
            backgroundPositionY: { xs: "top", lg: "buttom" },
          }}
        >
          <Typography variant={"h3"}>تماس با ما</Typography>
          <input width={"100%"} placeholder="نام (ضروری)" />
          <input placeholder="نام خانوادگی  (ضروری)" />
          <input placeholder="شماره همراه (ضروری)" />
          <input placeholder="ایمیل" />
          <textarea placeholder="پیام (ضروری)" />
        </Box>
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            backgroundImage: `url(${BackImage2})`,
            backgroundSize: 250,
            p: 3,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: { xs: "left", md: "right" },
            backgroundPositionY: { xs: "top", md: "button" },
          }}
        >
          <Box>
            <img
              src={ContactImage}
              alt="تماس با ایساکو"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: 2, alignSelf: "center", justifySelf: "center" }}>
        <Button size="large">ارسال پیام</Button>
      </Box>
    </Box>
  );
}
