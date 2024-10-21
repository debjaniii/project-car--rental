
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/contants/appdata";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from 'reactstrap';
import "../styles/header.css";

const Header = () => {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);
  console.log(pathname);
  return (
    <div>
            {/* <div className="py-2 bg-gradient-to-b from-[#42275a] to-[#734b6d] text-white">
            <Container>
        <Row>

          <Col lg='6' md='6' sm='6'>
            <div className="header_top_left">
              <span>Need Help?</span>
              <span className='header_top_help'>
                <i class="ri-phone-fill"></i> +1-202-555-0149
              </span>
            </div>
          </Col>

          <Col lg='6' md='6' sm='6'>
            <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
              <Link href="#" className="d-flex align-items-center gap-1">
                <i class="ri-login-circle-line"></i>Login
              </Link>
              <Link href="#" className="d-flex align-items-center gap-1">
                <i class="ri-user-line"></i>Register
              </Link>


            </div>
          </Col>

        </Row>
      </Container>
    </div> */}

{/* =======================================================header middle========================================================= */}
    <div className="header__middle  bg-gradient-to-b from-[#42275a] to-[#734b6d]">
      <Container>
        <Row>
          <Col lg='4' md='3' sm='4'>
          {/* <Col lg='4' md='3' sm='4'> */}
            <div className="logo">
              <h1>
                <Link href="/" className='d-flex align-items-center gap-3'>
                  <i class="ri-car-line"></i>
                  <span>WheelQuest</span>
                </Link>
                {/* <Link href="/" className="text-third-color font-bold text-2xl pl-5 md:pl-0">WheelQuest</Link> */}
              </h1>
            </div>
          </Col>

          <Col lg='2' md='3' sm='4'>
            <div className="header_location d-flex align-items-center gap-2">
              <span><i class="ri-earth-line"></i></span>
              <div className="header_location-content">
                <h4>India</h4>
                <h6>Kolkata, India</h6>
              </div>
            </div>
          </Col>

          <Col lg='3' md='3' sm='4'>
            <div className="header_location d-flex align-items-center gap-2">
              <span><i class="ri-time-line"></i></span>
              <div className="header_location-content">
                <h4>Sunday to Friday</h4>
                <h6>10am - 7pm</h6>
              </div>
            </div>
          </Col>

          <Col lg='2' md='3' sm='0' className='header_location d-flex align-items-center  gap-2'>
          {/* <Col lg='2' md='3' sm='0' className='d-flex align-items-center gap-2'> */}
            <button className="header_btn btn">
              <Link href="/contact">
                <i class="ri-phone-line"></i>Request a call
              </Link>
            </button>
          </Col>

          <Col lg='1' md='3' sm='0' className='header_top_right header_location d-flex align-items-center justify-content-end'>
          <button className="header_btn btn">
              <Link href="#">
                <i class="ri-user-line"></i>  Admin
              </Link>
              </button>
          </Col>

          
        </Row>
      </Container>
    </div>

    
{/* =======================================================nav========================================================= */}
    {/* <div className="bg-white shadow-lg h-16 flex justify-between items-center md:px-[10%]"> */}
    <div className="bg-white shadow-lg h-16 flex justify-between items-center md:px-[10%]">
      
      
      <div
        className="md:hidden flex flex-col gap-1 pr-5"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
      </div>
      
      <div
        className={`${
          isMenu ? "flex flex-col absolute top-16 w-full" : "hidden md:flex"
        } gap-5 md:flex-row md:static bg-white md:w-auto text-center`}
      >
        {links?.map((link) => (
          <div key={link.link}className="no-underline">
            <Link
              className={`${
                pathname === link.link ? "text-secondary-color" : "text-gray-400 link-class"
              }`}
              href={link.link}
              exact={link.exact}
            >
              <span className="noun">{link.text}</span>
              
            </Link>
          </div>
        ))}
      </div>
      <div>
      
          
      </div>
    </div>
    </div>
  );
};

export default Header;
