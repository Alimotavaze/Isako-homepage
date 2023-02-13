import React from "react";
import CarPartsSlider from "./Components/CarPartsSlider";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import IsacoApp from "./Components/IsacoApp";
import OurServices from "./Components/OurServices";
import ServiceBoxes from "./Components/ServiceBoxes";
import Slider from "./Components/Slider";
import Statistics from "./Components/Statistics";

export default function Home() {
  return (
    <>
      <Slider />
      <ServiceBoxes />
      <CarPartsSlider />
      <IsacoApp />
      <OurServices />
      <Statistics />
      <ContactUs />
      <Footer />
    </>
  );
}
