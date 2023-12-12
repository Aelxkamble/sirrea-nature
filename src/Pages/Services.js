import React from "react";
import "../Pages/Services.css";

const Services = () => {
  return (
    <div className="main">
      <div className="services ">
        <h1 className="text-uppercase text-white">Services </h1>
      </div>

      <div className="container-fluid  text-black p-5">
        <div className="row ">
          <div className="col-md-6">
            <h4>What We Do</h4>
            <h1>We Make Nature Smile</h1>
            <p>
              I lead projects from start to finish. Click edit button to change
              this text. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
              dapibus leo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-04-free-img.jpg"></img>
            <img
              src="https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2020/01/sn-man-jumping.jpg"
              style={{ height: "80%" }}
            ></img>
          </div>
        </div>
      </div>
      <div className="container-fluid  text-black p-5 d-flex align-items-center justify-content-center flex-column vh-100">
        <h4>Services</h4>
        <h1>Go along With Nature</h1>
        <div className="row"> 
          <div className="col-md-6 p-5">
            <h3>Autumn Is a Second Spring</h3>
            <p className="p-3">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p>
            <br/>
            <h3>Look Deep Into Nature</h3>
            <p className="p-3">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p>
          </div>
          <div className="col-md-6 p-5">
          <h3>Study Nature, Love Nature</h3>
            <p className="p-3">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p>
            <br/>
            <h3>Just Let It Rain</h3>
            <p className="p-3">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-row  h-20vh">
        <div>
          <h1>Get started with lorem ipsum dolor sit amet consectetur.</h1>
          <center>
            <button
              className=" btn btn-danger text-white mb-4 mt-2 "
              style={{ borderRadius: "100px" }}
            >
              Learn More
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Services;
