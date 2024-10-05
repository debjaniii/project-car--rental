import React from "react";

const Banners = ({ img, title, text, backgroundColor = "#f5f5f5" }) => {
  return (
    <div className="">
      <div
        className="h-[30vh] lg:h-[70vh] bg-no-repeat bg-center bg-cover relative flex justify-center items-center"
        style={{ backgroundImage: `url(${img})`, backgroundColor }}
      >
        <div className="content-[''] absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.2)] bg-main-color opacity-60"></div>

        <div className="w-full lg:w-[70%] text-secondary-color ">
          <h1 className="text-2xl lg:text-7xl font-medium text-white mb-2 lg:mb-5 ">
            {title}
          </h1>
          <h2 className="text-lg md:text-4xl leading-6 md:leading-[55px]">
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banners;