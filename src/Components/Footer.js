import React from "react";
import "../Components/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary  text-center text-lg-start text-white" style={{backgroundColor:'black'}}>
      {/* Grid container */}
      <div className="container p-5">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0 disply-flex align-items-center ">
            <h5 className="text-uppercase">About Us</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>

            <p>
              Proin gravida nibh auctor aliquet amet anean sollicitudin, lorem
              quis.</p><p> 12 Avenue, New York, NY 10160 +1 910-626-85255
              contact@nature.com</p>
            
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Services</h5>
            <p>Study nature</p> <p>Nature is a gift</p>{" "}
            <p>A second spring Smiles of nature</p>
            <p>Just let it rain</p>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 20223 Copyright Sierra Nature:  Powered by Sierra Nature
       
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
