import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking-form w-[47.5%] inline-block me-4 mb-4">
        <input className="border md:text-[0.8rem] text-[#7c8a97] w-full px-[15px] py-2 border-solid border-[#7c8a972a]" type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking-form w-[47.5%] inline-block ms-1 mb-4">
        <input className="border md:text-[0.8rem] text-[#7c8a97] w-full px-[15px] py-2 border-solid border-[#7c8a972a]" type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking-form w-[47.5%] inline-block me-4 mb-4">
        <input className="border md:text-[0.8rem] text-[#7c8a97] w-full px-[15px] py-2 border-solid border-[#7c8a972a]" type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking-form w-[47.5%] inline-block ms-1 mb-4">
        <input className="border md:text-[0.8rem] text-[#7c8a97] w-full px-[15px] py-2 border-solid border-[#7c8a972a]" type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking-form w-[47.5%] inline-block me-4 mb-4">
        <input className="border md:text-[0.8rem] text-[#7c8a97] w-full px-[15px] py-2 border-solid border-[#7c8a972a]" type="text" placeholder="From Address" />
      </FormGroup>
      <FormGroup className="booking-form w-[47.5%] inline-block ms-1 mb-4">
        <input className="border md:text-[0.8rem] text-[#7c8a97] w-full px-[15px] py-2 border-solid border-[#7c8a972a]" type="text" placeholder="To Address" />
      </FormGroup>

      <FormGroup className="booking-form w-[47.5%] inline-block me-4 mb-4">
        <select className="w-full md:text-[0.8rem] text-[#7c8a97] border rounded px-[15px] py-2.5 border-solid border-[#7c8a972a]" name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking-form w-[47.5%] inline-block ms-1 mb-4">
        <select className="w-full md:text-[0.8rem] text-[#7c8a97] border rounded px-[15px] py-2.5 border-solid border-[#7c8a972a]" name="" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking-form w-[47.5%] inline-block me-4 mb-4">
        <input className="border md:text-[0.8rem] text-[#7c8a97] w-full px-[15px] py-2 border-solid border-[#7c8a972a]" type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking-form w-[47.5%] inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time-picker md:text-[0.8rem] border text-[#7c8a97] w-full px-[15px] py-2 border-solid border-[#7c8a972a] mr-2"
        />
      </FormGroup>

      <FormGroup className='w-[47.5%]'>
        <textarea
          rows={5}
          type="textarea"
          className="w-full md:text-[0.8rem] text-[#7c8a97] border rounded px-[15px] py-2.5 border-solid border-[#7c8a972a]"
          placeholder="Write"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
