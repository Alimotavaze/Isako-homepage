import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import AboutUs from "./Pages/AboutUs";
import CarParts from "./Pages/CarParts";
import Cart from "./Pages/Cart";
import ContactUs from "./Pages/ContactUs";
import CustomerGuide from "./Pages/CustomerGuide";
import DealerShips from "./Pages/DealerShips";
import Home from "./Pages/Home";
import Media from "./Pages/Media";
import Services from "./Pages/Services";
import Shops from "./Pages/Shops";
import Suppliers from "./Pages/Suppliers";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/customerguide" element={<CustomerGuide />} />
          <Route path="/services" element={<Services />} />
          <Route path="/carparts" element={<CarParts />} />
          <Route path="/dealership" element={<DealerShips />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/تماس با ما" element={<ContactUs />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
