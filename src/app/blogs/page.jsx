import Banners from "@/components/Banners";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import { serviceList } from "@/contants/appdata";
import React from "react";
import Link from "next/link";
import booking from "../booking/page";


const Services = () => {

  // const Submit = async () => {
  //   const url = await PaymentMethod({ ...form.getValues(), price });
  //   router.push(url);
  // };

  return (
    <div>
     
      <div className="h-screen bg-gradient-to-b from-[#eedcff] to-[#42275a] flex flex-col items-center justify-start ">
        
      <h1 className="text-4xl font-bold text-center justify-start m-6 p-4">BLOGS</h1>
      <div className="bg-white shadow-lg rounded-lg w-3/4 md:w-1/2 lg:w-2.7/5 p-8">
      <h2 className="text-xl font-bold justify-start my-3 py-3">What services do you require?</h2>
        

      <div className="grid grid-cols-2 m-2 p-2 gap-4">
            {serviceList?.map((service, index) => (
              <div 
                key={index} 
                className="p-1 border border-gray-300 rounded-md hover:shadow-lg transition duration-300"
              >
                <h2><Service service={service} /></h2>
                {/* <h2 className="font-medium m-2 text-lg">{service.name}</h2> */}
          
              </div>
            ))}
          </div>
          <div class=" m-4">
          <Link href="/booking?index=1" className=" w-full flex justify-center no-underline">
          <button className="bg-secondary-color text-white font-bold w-full max-w-md py-2.5 px-4 m-4 rounded-md
                            hover:bg-[#5e3b4f] hover:scale-105 transition-transform duration-300 no-underline">
            Get Started
          </button>
          </Link>
          </div>
        </div>
    </div>
      <div className="bg-[#42275a]">
      
      </div>
      <Footer />
   </div>
    
  );
};
      {/* <div className="h-screen bg-gradient-to-b from-[#a1819c] to-[#734b6d] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-3/4 md:w-1/2 lg:w-1/3 p-8 m-4">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to My Website</h1>
        <p className="text-gray-700 text-center">
          This box is centered horizontally and vertically with padding and margin applied.
        </p>
      </div> */}
    
      {/* <Banners
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
      </div> */}
   

export default Services;