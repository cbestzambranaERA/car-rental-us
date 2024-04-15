import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="font-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact-form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact-form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact-form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="contact-btn md:text-[0.8rem] md:mb-10 text-white px-[15px] py-[7px] rounded-[5px] border-[none] bg-[#000d8b]" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact-info">
                <h6 className="font-bold">Contact Information</h6>
                <p className="section-description mb-0">
                  123 Seamen, West Hartford, CT
                </p>
                <div className="flex items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section-description mb-0">+1-860-389-6366</p>
                </div>

                <div className="flex items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section-description mb-0">example@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="flex items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social-link-icon no-underline text-[#000d6b] font-medium text-[1.2rem]"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
