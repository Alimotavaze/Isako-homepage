/* eslint-disable jsx-a11y/alt-text */
import { Box, Hidden, Typography } from "@mui/material";
import React from "react";
import OurService from "../../../Images/jpg/OurServices.jpg";
import Services from "../../../Images/SVG/services.svg";
import IsacoCart from "../../../Images/SVG/isakoCart.svg";
import Nobat from "../../../Images/SVG/nobatDehi.svg";
import Hoghugh from "../../../Images/SVG/hoghughMoshtari.svg";
import Soalat from "../../../Images/SVG/Soalat.svg";
import Estelam from "../../../Images/SVG/Estelam.svg";
import CustomSlider from "../../../Components/CustomSlider";
const PartServices = [
  {
    id: 1,
    title: "انواع سرویسهای خودرو",
    description:
      "به جهت کاهش استهلاک و افزایش طول عمر خودرو، انجام سرویسهای مداوم ضروری است. برای همین کلیه نمایندگی های مجاز ایران خودرو موظف به ارائه خدمات پس از فروش می باشند. ",
    icon: Services,
  },
  {
    id: 2,
    title: "ایساکو کارت",
    description:
      "ایساکو همواره درصدد است با اجرای طرحهای نوین، ارتباط مداوم با مشتری را حفظ کند. در راستای اجرای این طرح فروش اعتباری محصولات و خدمات خود را در دستور کار قرار داده است. ",
    icon: IsacoCart,
  },
  {
    id: 3,
    title: "نوبت دهی",
    description:
      "سیستم نوین نوبت دهی آنلاین از طریق وب سایت ایساکو قابل اجراست و این امکان را به شما می دهد که به صورت غیر حضوری از این مرکز، نوبت خود را دریافت نمایید. ",
    icon: Nobat,
  },
  {
    id: 4,
    title: "حقوق مشتریان",
    description:
      "ایساکو با ارائه خدمات و قطعات استاندارد می کوشد از حقوق مشتریان خود دفاع کند. اولین و مهمترین هدف شرکت ایساکو این است که به منظور فراهم اوردن رفاه حال مشتریان خود بهترین خدمات را در این راستا به مشتریان خود ارائه دهد. ",
    icon: Hoghugh,
  },
  {
    id: 5,
    title: "سؤالات متداول",
    description:
      "در این قسمت می توانید به سؤالاتی که بیشتر اوقات برای مخاطبان ایساکو پیش می آید مشاهده کنید و اگر شما نیز با چنین سؤالی روبه رو شده بودید، پاسخ آن را به سریع ترین شکل ممکن دریافت کنید. ",
    icon: Soalat,
  },
  {
    id: 6,
    title: "استعلام گارانتی",
    description:
      "شما می توانید با دردست داشتن شماره شاسی خودروی خود به منظور استعلام گارانتی خودروی خود اقدام نمایید. ",
    icon: Estelam,
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
};
export default function OurServices() {
  return (
    <>
      <Box>
        <Typography variant="h3" textAlign={"center"}>
          خدمات ما
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", lg: "row" },
          padding: 2,
        }}
      >
        <Hidden mdUp>
          <Box sx={{ paddingX: 10, mt: -6 }}>
            <CustomSlider {...settings} isResponsive={true}>
              {PartServices.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "Block",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      direction: "rtl",
                      paddingLeft: "5px",
                      paddingRihgt: "0px",
                      paddingTop: "5px",
                      paddingButtom: "5px",
                    }}
                  >
                    <Box sx={{ paddingX: "0.5rem" }}>
                      <Box
                        sx={{
                          display: "block",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-end",
                        }}
                      >
                        <Box component={"h4"}>{item.title}</Box>
                        <Box
                          sx={{
                            textAlign: "justify",
                            direction: "rtl",
                            width: "100%",
                          }}
                        >
                          {item.description}
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: "Block" }}>
                      <img src={item.icon} />
                    </Box>
                  </Box>
                </Box>
              ))}
            </CustomSlider>
          </Box>
        </Hidden>
        <Hidden mdDown lgUp>
          <Box display={"block"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                flex: 1,
                width: "100%",
                height: "40rem",
                mt: 2,
              }}
            >
              {PartServices.map((item) => (
                <Box
                  sx={{
                    paddingX: "0.5rem",
                    width: "50%",
                    height: "10rem",
                    mt: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row-reverse",
                      justifyContent: "flex-start",
                      paddingX: 3,
                    }}
                  >
                    <Box mr={2}>
                      <Box component={"h3"}>{item.title}</Box>
                      <Box
                        sx={{
                          textAlign: "justify",
                          direction: "rtl",
                          width: "100%",
                          fontSize: "12pt",
                        }}
                      >
                        {item.description}
                      </Box>
                    </Box>
                    <Box sx={{ display: "Block" }}>
                      <img src={item.icon} />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Hidden>
        <Hidden lgDown>
          <Box
            sx={{
              display: "flex",
              maxWidth: "60%",
              maxHeight: "35rem",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            {PartServices.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  width: "50%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row-reverse",
                    justifyContent: "flex-start",
                    paddingX: 3,
                  }}
                  key={item.id}
                >
                  <Box mr={2}>
                    <Box component={"h3"}>{item.title}</Box>
                    <Box
                      sx={{
                        textAlign: "justify",
                        direction: "rtl",
                        width: "100%",
                        fontSize: "12pt",
                      }}
                    >
                      {item.description}
                    </Box>
                  </Box>
                  <Box sx={{ display: "Block" }}>
                    <img src={item.icon} />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Hidden>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: { lg: "50%" },
            height: { lg: "50%" },
            mb: 3,
          }}
        >
          <img src={OurService} style={{ maxWidth: "100%" }} />
        </Box>
      </Box>
    </>
  );
}
