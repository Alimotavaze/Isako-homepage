/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image01 from "../../../Images/117.jpg";
import Image02 from "../../../Images/1522.jpg";
import Image03 from "../../../Images/1551.jpg";
import Image04 from "../../../Images/1582.png";
import Image05 from "../../../Images/1723.jpg";

import "../../../Images/1522.jpg";
import CustomSlider from "../../../Components/CustomSlider";
import { Box } from "@mui/material";
const slideData = [
  {
    id: 1,
    title: "کی قطعه رو داره",
    image: Image01,
  },
  {
    id: 2,
    title: "روشهای تشخیص اصالت",
    image: Image02,
  },
  {
    id: 3,
    title: "ایساکو کارت",
    image: Image03,
  },
  {
    id: 4,
    title: "آگهی توسعه شبکه فروشگاهی",
    image: Image04,
  },
  {
    id: 5,
    title: "روشهای تشخیص اصالت",
    image: Image05,
  },
];

export default function Slider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScrool: 1,
    arrows: true,
    CenterMode: true,
  };
  return (
    <CustomSlider {...settings} isResponsive={false}>
      {slideData.map((item) => (
        <Box key={item.id} style={{ width: "100%" }}>
          <img style={{ width: "100%", minHeight: 400 }} src={item.image} />
        </Box>
      ))}
    </CustomSlider>
  );
}
