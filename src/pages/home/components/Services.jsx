import students from '../../../assets/img/students.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="header">Our Services</h2>
        <p className="header-description">What we offer</p>

        <div className="services-container">
          <div className="service-box">
            <img src={students} alt="" />
            <h3 className="service-heading">Career Orientation</h3>
            <p className="service-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              veritatis cum at velit, corporis quas?
            </p>
          </div>
          <div className="service-box">
            <img
              src="https://t4.ftcdn.net/jpg/02/33/87/01/360_F_233870161_ff4IxGVm7dXS9wjxAB7hAMJ4qanRvt1R.jpg"
              alt=""
            />
            <h3 className="service-heading">Online Mentorship</h3>
            <p className="service-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              veritatis cum at velit, corporis quas?
            </p>
          </div>
          <div className="service-box">
            <img src={students} alt="" />
            <h3 className="service-heading">Career Orientation</h3>
            <p className="service-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              veritatis cum at velit, corporis quas?
            </p>
          </div>
          <div className="service-box">
            <img
              src="https://t4.ftcdn.net/jpg/02/33/87/01/360_F_233870161_ff4IxGVm7dXS9wjxAB7hAMJ4qanRvt1R.jpg"
              alt=""
            />
            <h3 className="service-heading">Online Mentorship</h3>
            <p className="service-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              veritatis cum at velit, corporis quas?
            </p>
          </div>
        </div>
        <Link to="services.html" className="btn">
          See More
        </Link>
      </div>
    </section>
  );
};

export default Services;
