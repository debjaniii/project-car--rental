// "use client";

// import Banners from "@/components/Banners";
// import Service from "@/components/Service";
// import Footer from "@/components/Footer";
// import { serviceList } from "@/contants/appdata";
// import React from "react";
// import Link from "next/link";
// import booking from "../booking/page";



// const Register = () => {


//   return (
//     <div>
     
//       <h1>hiiiiiiiiiiiii</h1>
//       <div className="bg-[#42275a]">
      
//       </div>

//       <Footer />
//    </div>
    
//   );
// };
        

// export default Register;

"use server";

import React from "react";

const register = () => {
  return (
    <div className="grid items-center justify-center h-[90vh]">
      
        <div className="flex justify-center items-center gap-10 flex-col">
          <img src="/success.png" className="w-40 h-40" />
          <h1 className="text-4xl text-green-500">Successfull</h1>
        </div>
    
    </div>
  );
};

export default register;