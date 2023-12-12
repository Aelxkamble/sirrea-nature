import React from 'react'
import '../Pages/Projects.css'

const Projects = () => {
  return (
    <div className="main">
      <div className="projectpage ">
        <h1 className="text-uppercase text-white">Projects </h1>
      </div>

      <div className="container-fluid  text-black p-5">
        <div className="row ">
          <div className="col-md-6">
            <img src='https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-06-free-img.jpg'></img>
          <h3 className='p-2'>Look Deep Into Nature</h3>
            <p className="p-3">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p>
            <h3 className='p-4'>Luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet</h3>s
            <br/>
            <img src='https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-07-free-img.jpg'></img>
            <h3 className='p-2'>Adopt the pace of Nature</h3>
            <p className="p-3">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p>
            <h3 className='p-4'>Luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet</h3>
          </div>
          <div className="col-md-6">
          <img src='https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-08-free-img.jpg'></img>
          <h3 className='p-2'>Just Living Is Not Enough</h3>
            <p className="p-3">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p>
            <h3 className='p-4'>Luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet</h3>
            <br/>
            <img src='https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/11/img-09-free-img.jpg'></img>
            <h3 className='p-2'>Go Along With the Nature</h3>
            <p className="p-3">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p> 
            <h3 className='p-4'>Luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet</h3> 
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
  )
}

export default Projects
