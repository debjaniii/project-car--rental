import Banners from "@/components/Banners";
import Insights from "@/components/BlogList";
import React from "react";

const Ourfleet = () => {
  return (
    <div>
      <Banners
        img="/driver-view-speedometer-59-kmh-600nw-2192796951.jpg"
        title="Blogs"
        text=""
      />
      <div className="relative mx-4 my-4">
        <Insights isForm={false} />
      </div>
    </div>
  );
};

export default Ourfleet;
