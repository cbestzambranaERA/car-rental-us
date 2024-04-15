import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  return (
    <section className="become-driver bg-center bg-no-repeat bg-cover px-0 py-20 text-center">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become-driver-img hidden">
            <img src={driverImg} alt="" className="w-full" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section-title become-driver-title text-white text-2xl leading-[3rem]">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become-driver-btn text-[#000d6b] font-semibold mt-[1.5rem] text-[0.8rem]">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
