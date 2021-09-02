import React from "react";
import "./details.css";

const Details = () => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="title">Hospital Bed Availability Status</div>
        <div className="text-container">
          <div className="text">
            It is an effort to capture the Status of Bed availability as
            frequently as possible. The Hospitals have been requested to update
            their vacancy status in the portal as frequently as possible and at
            least twice daily at 12 Noon and 6 PM. However, it is advised that
            you may call the hospital at the contact number of the hospital to
            get further details.
            <br />
            Covid positive patients can also avail{" "}
            <strong>telemedicine service</strong>( telephonic consultation with
            a qualified govt. doctor) free of cost before trying for admission
            in a hospital or till a bed is arranged in the hospital.
            <br />
            For applying for an admission in a government and government
            requisitioned hospitals, you may fill <strong>
              {" "}
              online form
            </strong>{" "}
            for the admission (by clicking on yellow coloured icon). For filling
            online forms for admission, you must have a{" "}
            <strong> CoVID positive report</strong> applicable as per recent
            protocol ordered by health department ready in your hand and{" "}
            <strong>
              the mobile number which was provided at the time of conducting RT
              PCR tests.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
