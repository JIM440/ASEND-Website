import staffs from '../../../assets/img/hero/Staffs.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about">
      <div className="even-columns container">
        <div className="text">
          <h2 className="header">About ASEND</h2>
          <p>
            Welcome to ASEND, the leading prep class for competitive exams in
            Cameroon. Our mission is to empower students with the knowledge,
            skills, and confidence needed to excel in &nbsp;
            <Link
              to="/concours"
              style={{
                color: '#4169e1',
                textDecoration: 'underline',
              }}
            >
              concours
            </Link>
            &nbsp; and other challenging exams. With a team of experienced
            mentors and a proven curriculum, we provide comprehensive
            preparation that ensures our students are fully equipped to
            outperform their peers. We offer personalized guidance and support,
            helping students navigate through the complexities of exam content
            and format.. Join ASend and unlock your potential for success.
            Enroll today and let us be your partner in achieving your academic
            goals.
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
