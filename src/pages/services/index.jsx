import React from 'react';
import staffs from '../../img/Staffs.jpg';

const Services = () => {
  return (
    <>
      {/*hero */}
      <section className="hero">
        <div
          className="container"
          style={{
            backgroundImage: `${staffs}`,
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontSize: '48px',
            }}
          >
            What We Offer
          </h1>
        </div>
      </section>
      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- services  --> */}
      <section className="services">
        <div className="container">
          <h2 className="header">Our Services</h2>
          <p className="header-description">
            Explore Our Services to Support Students Before, During, and After
            the Concour
          </p>
          <h3 className="sub-header">Before Concour</h3>

          <div className="services-container">
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
          </div>
          <h3 className="sub-header">After Concour</h3>

          <div className="services-container">
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
          </div>

          <h3 className="sub-header">IT Services</h3>

          <div className="services-container">
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
