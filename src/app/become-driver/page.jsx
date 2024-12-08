"use client";

import Banners from "@/components/Banners";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import { serviceList } from "@/contants/appdata";
import React from "react";
import Link from "next/link";
import booking from "../booking/page";
import {Form} from "../../components/ui/form"



const bd = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);

    // Log the form data (for now)
    console.log("Form Submitted:", {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
  };

  return (
    <div>
      <div className="bg-[#42275a] min-h-screen flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Driver Registration</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-md shadow-md text-black">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#734b6d] text-"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Driving license</label>
            <input
              type="text"
              name="Drivinglicense"
              placeholder="Driving license"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#734b6d]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Phone Number</label>
            <input
              type="email"
              name="email"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#734b6d]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Address</label>
            <textarea
              name="message"
              placeholder="Address"
              rows="2"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#734b6d]"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="1"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#734b6d]"
              required
            ></textarea>
          </div>
          <Link href="/register" className=" w-full flex justify-center no-underline">
          <button
            type="submit"
            className="bg-secondary-color text-white font-bold w-full py-2.5 px-4 rounded-md"
          >
            Submit
          </button>
          </Link>
          
        </form>
      </div>

      <Footer />
    </div>

  );
};
export default bd;
