import React from "react";
import "../Pages/Aboutus.css";

const Aboutus = () => {
  return (
    <div className="main">
      <div className="about ">
        <h1 className="text-uppercase">About </h1>
      </div>

      <div className="naturelovers">
        <div className="left1">
          <h4 className="text-uppercase">Nature Lover</h4>
          <h3>One Touch Of Nature Makes The Whole World Kin</h3>
        </div>
        <div className="right1">
          <h3>
            Since 1995 click edit button to change this text. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </h3>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor a ornare odio.
          </p>
          <p>
            Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Mauris in erat justo.
          </p>
        </div>
      </div>

      <div className="somecoolfacts">
        <div className="left2">
          <h4 className="text-uppercase">some cool facts</h4>
          <h3>Numbers Speak For Themselves</h3>
        </div>
        <div className="right2">
          <div className="count">
            <h1>150</h1>
            <p>Satisfied Clients</p>
          </div>
          <div className="count">
            <h1>15</h1>
            <p>Years of Experience</p>
          </div>
          <div className="count">
            <h1>250</h1>
            <p>Completed Projects</p>
          </div>
        </div>
      </div>

      <div className="clickedit">
        <h2>
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </h2>
        <div style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
        <div className="welovenature">
          <h3 className="text-uppercase">we love nature</h3>
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. 
          </p>
          </div>
        
          <div className="itisagift">
            <h3 className="text-uppercase">it is a gift</h3>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae.
            </p>
          </div>
          <div className="excepetur">
            <h1>
              Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui
              Officia Deserunt Mollit.
            </h1>
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

export default Aboutus;
