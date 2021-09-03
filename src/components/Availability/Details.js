import React from "react";
import "./details.css";

const Details = () => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="title">Hospital Emergency Bed Availability Status</div>
        <div className="text-container">
          <div className="text">
            <strong>*(Disclaimer:</strong> This is prototype application just to explain the idea and outcomes of the project.)
            <br />
            The application allows user to look for the availability of emergency bed and doctors around them before leaving their house and even book one.
            <br />
            For applying for an admission in a government ,government
            requisitioned or private hospitals , you may fill <strong>
              {" "}
              online form
            </strong>{" "}
            for the admission (by clicking on book online button). 
            <br />You can also book a bed through call .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
