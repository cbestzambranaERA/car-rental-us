import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car-item border inline-block justify-between p-5 rounded-[5px] border-solid border-[#7c8a9736]">
        <div className="car-img">
          <img src={imgUrl} alt="" className="w-full" />
        </div>

        <div className="car-item-content mt-4">
          <h4 className="lg:text-[1.1rem] md:text-base text-[1.8rem] mb-0 section-title text-center">{carName}</h4>
          <h6 className="lg:text-base md:text-[0.9rem] text-[1.2rem] font-semibold mt-2.5 rent-price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="car-item-info lg:flex-wrap flex items-center justify-between mt-3 mb-4">
            <span className="lg:text-[0.8rem] lg:justify-between md:text-[0.7rem] text-[#f9a826] text-[1.1rem] flex items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className="md:text-[0.9rem] flex items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className="md:text-[0.9rem] flex items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className="w-1/2 lg:text-[0.9rem] lg:px-2.5 lg:py-[5px] px-0 py-2 rounded-none border-[none] rounded-[4px_0px_0px_4px] car-item-btn car-btn-rent">
            <Link className="no-underline text-white font-medium hover:text-white" to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className="w-1/2 md:text-[0.8rem] rounded-[0px_4px_4px_0px] car-item-btn car-btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
