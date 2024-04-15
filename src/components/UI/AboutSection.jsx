import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about-section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about-section-content">
              <h4 className="section-subtitle">About Us</h4>
              <h2 className="section-title text-2xl">Welcome to car rent service</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="about-section-item flex gap-x-12 items-center">
                <p className="section-description flex items-center gap-2">
                  <i class="ri-checkbox-circle-line text-[#fbaf35] text-[1.1rem]"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section-description flex items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about-section-item flex items-center">
                <p className="section-description flex items-center gap-2 text-[0.6rem] mb-0">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section-description flex items-center gap-2">
                  <i class="ri-checkbox-circle-line text-[0.8rem]"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about-img">
              <img src={aboutImg} alt="" className="w-full mt-[280px]" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
