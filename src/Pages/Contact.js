import React from "react";
import "../Pages/Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationIcon from '@mui/icons-material/Navigation';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

const Contact = () => {
  return (
    <div className="main">
      <div className="contact">
        <h1 className="text-uppercase text-white fw-bold fs-100">Contact </h1>
      </div>
      <div  className="container-fluid text-black p-5" >
        <div className="row">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
           <div className="logo"><p><NavigationIcon></NavigationIcon>12 Avenue ,New York, NY 10160</p></div>  
            <p><EmailIcon></EmailIcon>contact@gmail.com</p>
            <p><PhoneEnabledIcon></PhoneEnabledIcon>+91 49874837434</p>
            <h2>Follow Us</h2>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
            <YouTubeIcon></YouTubeIcon>
            <TelegramIcon></TelegramIcon>
          </div>
          <div className="col-md-6 ">
            <form className="p-5">
              <label className="mt-2">Your Name</label>
              <input className="form-control mt-2" type="text"></input>
              <label className="mt-2">Email</label>
              <input className="form-control mt-2" type="email"></input>
              <label className="mt-2">Your Subject</label>
              <input className="form-control mt-2" type="text"></input>
              <label className="mt-2"> Your Message</label>
              <textarea className="form-control mt-2" cols={5} rows={10}></textarea>
              <button className="btn btn-danger text-uppercase mt-5">Send Message</button>
            </form>
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

export default Contact;
