import Banners from "@/components/Banners";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import { serviceList } from "@/contants/appdata";
import React from "react";

const Services = () => {
  return (
    <div>
      <Banners
        img="/eg.jpg"
        title="Services"
        text="Experience elevated travel with WheelQuest: Where style, comfort, and safety meet for every occasion. Travel in sophistication and peace of mind."
      />
      <div className="mb-5">
        {serviceList?.map((service, index) => (
          <div key={index}>
            <Service service={service} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;