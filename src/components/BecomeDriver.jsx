import React from 'react'
import "../styles/BecomeDriver.css";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../public/driver.png";


import Link from "next/link";



const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
    <Container>
      <Row>
        <Col lg="6" md="6" sm="12" className="become__driver-img">
          <img src="/driver.png" alt="car" className="w-100" />
        </Col>

        <Col lg="6" md="6" sm="12">
          <h2 className=" become__driver-title">
            Do You Want to Earn With Us? So Don't Be Late
          </h2>

          <Link href="/become-driver" className=" w-full flex justify-center no-underline">
          <button className="btn become__driver-btn mt-4">
            Become a Driver
          </button>
          </Link>

          <div>
      
    </div>

          
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default BecomeDriverSection
