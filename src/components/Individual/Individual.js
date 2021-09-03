import React from 'react'
import "./individual.css";
import BookingForm from '../BookingForm/BookingForm';
import { useState } from 'react';


const Individual = ({result, showform}) => {


  const [showBookingForm, setShowBookingForm] = useState(false)

  

  return (
    <div class="card">
    <div class="header">
      <div class="details">
      <div className="name">{result.text}</div>
      <div>{result.address}</div>
      </div>
      <div class="status">
        <div>Bed : {result.beds}</div>
        <div>Doctors: {result.doctors}</div>
      </div>
    </div>
    <div class="booking">
      <button type="submit">Book through call</button>
      <button type="submit" onClick={() => setShowBookingForm(!showBookingForm)}>Book online</button>
    </div>

    {showBookingForm && <BookingForm />}
  </div>
    
  )
}

export default Individual
