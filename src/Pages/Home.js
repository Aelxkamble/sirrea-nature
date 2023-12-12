import React from "react";
import "../Pages/Home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="welcometo ">
        <div
          className=" d-flex align-items-center justify-content-center flex-column"
          style={{ height: "100%" }}
        >
          <h6 className="text-white p-3 fs-20" style={{ fontSize: "20px" }}>
            Welcome To
          </h6>
          <h1
            className="text-white text-uppercase p-3"
            style={{ fontWeight: "bold", fontSize: "60px" }}
          >
            Sierra Natural Park
          </h1>

          <button
            className=" btn btn-danger text-white"
            style={{ borderRadius: "100px" }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className=" aboutus" style={{ height: "100vh" }}>
        <h6 className="text-uppercase">About us </h6>
        <h1 className="p-4">One Touch Of Nature Makes The Whole World Kin</h1>
        <p>
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor
          aliquet.
        </p>
        <p>
          Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Mauris in erat justo.
        </p>

        <button
          className=" btn btn-danger text-white m-4"
          style={{ borderRadius: "100px" }}
        >
          Learn More
        </button>
      </div>
      <div className="services">
        <div className="left">
          <h4>Services</h4>
          <h3>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit
            Tellus, Luctus Nec Ullamcorper.
          </h3>
          <span className="hr"></span>
          <h4>Study Nature, Love Nature</h4>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit
            Tellus, Luctus Nec Ullamcorper.
          </p>
          <span className="hr"></span>
          <h4>Autumn Is a Second Spring</h4>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit
            Tellus, Luctus Nec Ullamcorper.
          </p>
          <span className="hr"></span>
          <h4>Just Let It Rain</h4>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit
            Tellus, Luctus Nec Ullamcorper.
          </p>
          <span className="hr"></span>
        </div>
        <div className="right">
          <h3>
            A Light Wind Swept Over The Corn, And All Nature Laughed In The
            Sunshine.
          </h3>
        </div>
      </div>

      {/* <div className="projects-container">
        <h6 className="text-uppercase">Project </h6>
        <h1>Forest Wilderness</h1>

        <div className="projects">
          <div className="project">
            <img
              src="https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-01-free-img.jpg"
              alt="Project 1"
              className="project-image"
            />
            <div className="project-description">
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed eget justo vel purus euismod lacinia. Vivamus vel
                condimentum elit.
              </p>
            </div>
          </div>

          <div className="project">
            <img
              src="https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-02-free-img.jpg"
              alt="Project 2"
              className="project-image"
            />
            <div className="project-description">
              <h3>Project 2</h3>
              <p>
                Vestibulum nec varius arcu. Duis sodales urna non mauris
                facilisis, in fermentum ligula volutpat. Nulla facilisi.
              </p>
            </div>
          </div>

          <div className="project">
            <img
              src="https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-03-free-img.jpg"
              alt="Project 3"
              className="project-image"
            />
            <div className="project-description">
              <h3>Project 3</h3>
              <p>
                Proin euismod augue vel augue tincidunt, id fringilla tortor
                luctus. Sed quis ultrices arcu.
              </p>
            </div>
          </div>
        </div>
      </div> */}


<div  className="projects-section container text-black " >
<h6 className="text-uppercase">Project </h6>
        <h1>Forest Wilderness</h1>
        <div className=" project-section row">
        
          <div className="project-1 col-md-4 p-2">
          <img
              src="https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-01-free-img.jpg"
              alt="Project 1"
              
            />
            <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed eget justo vel purus euismod lacinia. Vivamus vel
                condimentum elit.
              </p>
          </div>
          <div className=" project-1 col-md-4 p-2">
          <img
              src="https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-02-free-img.jpg"
              alt="Project 2"
             
            />
            <h3>Project 2</h3>
              <p>
                Vestibulum nec varius arcu. Duis sodales urna non mauris
                facilisis, in fermentum ligula volutpat. Nulla facilisi.
              </p>
          </div>
          <div className="project-1 col-md-4 p-2">
          <img
              src="https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-03-free-img.jpg"
              alt="Project 3"
              
            />
            <h3>Project 3</h3>
              <p>
                Proin euismod augue vel augue tincidunt, id fringilla tortor
                luctus. Sed quis ultrices arcu.
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

export default Home;
