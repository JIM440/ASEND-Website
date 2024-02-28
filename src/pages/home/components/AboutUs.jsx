import staffs from '../../../assets/img/hero/Staffs.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about">
      <div className="even-columns container">
        <div className="text">
          <h2 className="header">About ASEND</h2>
          <p>
            Welcome to ASEND - your gateway to success in professional school
            entrance exams&nbsp;(
            <Link
              to="/concours"
              style={{
                color: '#4169e1',
                textDecoration: 'underline',
              }}
            >
              concours
            </Link>
            )&nbsp; in Cameroon! At ASEND, we are dedicated to empowering
            students to achieve their academic and professional goals through
            comprehensive preparation courses and support services. Our team of
            experienced educators provides mentorship, career orientation, and
            personalized guidance to help students navigate the{' '}
            <Link
              to="/concours"
              style={{
                color: '#4169e1',
                textDecoration: 'underline',
              }}
            >
              competitive entrance exam
            </Link>{' '}
            process.
            <br />
            <br /> Our prep classes are designed to cover all subjects from
            scratch, ensuring that students have a solid foundation and are
            well-prepared to excel in their exams. We believe in the power of
            education to transform lives and are committed to providing a
            supportive and inclusive learning environment for all students.
            <br />
            <br /> Join us at ASEND and embark on a journey towards academic
            excellence and a successful future in the professional school of
            your choice. Let us help you unlock your full potential and reach
            new heights in your educational journey.
          </p>
          <div className="btn-container">
            <Link to="about" className="btn">
              Learn More
            </Link>
            <Link to="#contact" className="btn btn-white">
              Get Started
            </Link>
          </div>
        </div>
        <div className="image">
          <img src={staffs} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
