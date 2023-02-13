import React from "react";
import Slider, { Settings } from "react-slick";
import "./slick-themes.css";
import "./slick.css";
import { Box } from "@mui/material";
type CustomSliderProps = Settings & {
  children: React.ReactNode;
  isResponsive?: boolean;
};

const innerResponsive = [
  {
    breakpoint: 1920,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];
export default function CustomSlider({
  children,
  responsive,
  isResponsive = true,
  ...props
}: CustomSliderProps) {
  const combineResponsive = isResponsive
    ? [...innerResponsive, ...(responsive || [])]
    : undefined;

  const slider = React.useRef<Slider>(null);

  return (
    <>
      <Box
        sx={{
          "& .slick-slide": {
            boxSizing: "border-box",
            mt: { lg: 4, md: 7, sm: 7, xs: 5 },
            mx: 0,
          },
        }}
      >
        <Slider responsive={combineResponsive} {...props} ref={slider}>
          {children}
        </Slider>
      </Box>
    </>
  );
}
