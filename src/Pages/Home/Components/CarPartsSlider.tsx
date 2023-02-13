/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import CustomSlider from "../../../Components/CustomSlider";
import useFetch from "../../../hooks/useFetch";

type ProductType = {
  id: number;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  price: number;
  stock: number;
};

export default function CarPartsSlider() {
  const { isLoading, data: products } = useFetch<ProductType[]>();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
  };

  return (
    <Box mt={3} mx={10}>
      <Box
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Typography variant="h2" textAlign={"center"}>
          قطعات خودرو
        </Typography>
        <Typography variant="h5" textAlign={"center"}>
          در راستای بهبود فرایند خدمت رسانی و همچنین ارتقاء سطح خدمات پس از فروش
          و جلب رضایت مشتریان محترم شرکت ایساکو و گروه صنعتی ایران خودرو، امکان
          جستجوی قطعات خودرو و مشاهده قیمت آنها فراهم شده است. شما در این قسمت
          می توانید تمام قطعات خودرو را مشاهده کنید.{" "}
        </Typography>
      </Box>
      <div>
        {isLoading ? (
          <Box textAlign={"center"} mt={10} fontSize={12} color={"error.main"}>
            لطفاً منتظر بمانید تا اطلاعات، بارگزاری شوند...{" "}
          </Box>
        ) : (
          ""
        )}
      </div>
      <CustomSlider {...settings} isResponsive={true}>
        {products?.map((item) => (
          <Stack>
            <Box
              key={item.id}
              style={{
                justifyContent: "center",
                alignItems: "center",
                border: 1,
                marginLeft: 20,
                borderColor: "grey.200",
                borderWidth: 3,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <img
                src={item.image}
                width={"100%"}
                style={{
                  border: 1,
                  borderColor: "#889988",
                  borderStyle: "solid",
                }}
              />
              <Box>
                <Typography variant="h4">{item.title}</Typography>
              </Box>
            </Box>
          </Stack>
        ))}
      </CustomSlider>
    </Box>
  );
}
