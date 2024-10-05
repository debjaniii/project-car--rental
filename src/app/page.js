"use client";
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "@/components/Carousel";
import Explore from "@/components/Explore";
import BecomeDriver from "@/components/BecomeDriver";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
// import './index.css';
// import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Carousel } from "reactstrap";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <div className="relative">
        <Explore/>
      
      <BecomeDriver/>
      <BlogList/>
      <Footer/>
    </div>
    </div>
  );
}
