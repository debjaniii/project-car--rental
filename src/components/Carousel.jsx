"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import autoplay from "embla-carousel-autoplay";
import { profile } from "@/contants/appdata";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
// import "../styles/Carousel.css"
const Carousels = () => {
  return (
    
    <div>
      <Carousel
        plugins={[
          autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {profile?.map((slide, index) => (
            <CarouselItem
              key={index}
              style={{ backgroundImage: `url(${slide.img})` }}
               className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none "
            >
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(#231530,#734b6d)] opacity-60"></div>
              {/* prob */}

              <div className="">
                <Card className="bg-transparent border-0">
                  <CardContent className="flex p-6">
                    <div className="h-[40vh] md:h-[60vh] w-full flex flex-col relative justify-start ">
                      <h3 className="mb-1 lg:mb-1 flex font-semibold pt-[10px]">
                        <span className="text-third-color transition-[3s]">
                          {slide.title}
                        </span>
                      </h3>
                      <h1 className="text-white font-bold text-sm md:text-4xl text-start w-12/12 md:w-8/12 pt-[20px]">
                        <i className={"fad fa-" + slide.icon}></i>
                        <span>{slide.text}</span>
                      </h1>
                      <span className="mt-6 pt-[30px]">
  <button className="bg-white hover:bg-blue-700 text-[#734b6d] font-bold py-2 px-4 rounded hover:shadow-lg transition duration-300 " >
  <Link href="/booking" className="no-underline bg-white hover:bg-blue-700 text-[#734b6d] font-bold py-2 px-4 rounded hover:shadow-lg transition duration-300 ">Reserve Now</Link>
  </button>
</span>
                    </div>
                    
                  </CardContent>
                </Card>
                
              </div>
              
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carousels;