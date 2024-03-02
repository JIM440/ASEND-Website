import students from '../../../assets/icons/students.png';
import online_tutoring from '../../../assets/icons/online_tutoring.png';
import mentoring from '../../../assets/icons/mentoring.png';
import career from '../../../assets/icons/career.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="header">Our Services</h2>
        <p className="header-description">What We Offer</p>

        <div className="services-container">
          <div className="service-box">
            <div className="img">
              <img src={students} alt="prep class icon" />
            </div>
            <h3 className="service-heading">Preparatory Classes</h3>
            <p className="service-description">
              Our experienced instructors cover essential topics starting from
              the basics to ensure a solid foundation for acing entrance exam.
            </p>
          </div>
          <div className="service-box">
            <div className="img">
              <img src={career} alt="career orientation icon" />
            </div>
            <h3 className="service-heading">Career Orientation</h3>
            <p className="service-description">
              Discover various career paths and industry trends/opportunities to
              make informed decisions about your professional journey.
            </p>
          </div>
          <div className="service-box">
            <div className="img">
              <img src={mentoring} alt="mentorship icon" />
            </div>
            <h3 className="service-heading">Mentorship Program</h3>
            <p className="service-description">
              Expert mentors offer support and insights to help students excel
              through the university entrance exam preparation journey.
            </p>
          </div>
          <div className="service-box">
            <div className="img">
              <img src={online_tutoring} alt="online tutoring icon" />
            </div>
            <h3 className="service-heading">Online tutoring</h3>
            <p className="service-description">
              Virtual Tutoring Sessions Engage in interactive online tutoring
              sessions tailored to GCE preparation before the concours.
            </p>
          </div>
        </div>
        <Link to="/services" className="link">
          <span>See More</span>
          <i className="bx bxs-chevron-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default Services;
