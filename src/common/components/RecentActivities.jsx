import { Link } from 'react-router-dom';

import WorldEng from '../../assets/img/activities/worldEngineering/world1.jpg';
import orientation from '../../assets/img/activities/orientation/orientation2_copy.jpg';
import Premed from '../../assets/img/activities/premed_preengr_exams/premed1.jpg';

const RecentActivities = ({ title, description }) => {
  return (
    <section id="recent-activities">
      <div className="container">
        <h2 className="header">{title}</h2>
        <p className="header-description">{description}</p>
        <div className="recent-activities-container">
          <div className="recent-activities-box">
            <div className="img">
              <img src={orientation} alt="students in class" />
            </div>
            <div>
              <h3>Career Orientation</h3>
              <span className="date">26/02/2024</span>
            </div>
            <p className="description">
              ASEND organized a comprehensive career orientation session,
              enlightening students about various career paths available in the
              engineering, medical, agriculture and Veterinary medicine fields.
            </p>
            <Link
              to=""
              aria-label="link to read more on career orientation"
              className="link"
            >
              <span>Read More</span>
              <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
          <div className="recent-activities-box">
            <div className="img">
              <img src={WorldEng} alt="asend staff with two smart dustbins" />
            </div>
            <div>
              <h3>World Engineering Day</h3>
              <span className="date">04/03/23</span>
            </div>
            <p className="description">
              ASEND actively participated in World Engineering Day. We showcased
              various engineering projects and highlighted the importance of
              engineering in driving innovation and global progress.
            </p>
            <Link
              to=""
              aria-label="link to read more on world engineering day"
              className="link"
            >
              <span>Read More</span>
              <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
          <div className="recent-activities-box">
            <div className="img">
              <img src={Premed} alt="students writing premed/preengr exams" />
            </div>
            <div>
              <h3>PreMed/PreEngr Exams</h3>
              <span className="date">12/03/2023</span>
            </div>
            <p className="description">
              ASEND conducted a series of premed/preengr exams, providing
              aspiring students with an opportunity to assess their readiness
              for professional school entrance exams. These exams not only
              served as a valuable assessment tool but also gave students a
              foretaste of how the actual entrance examinations will look like.
            </p>
            <Link
              to=""
              aria-label="link to read more on premed/preengr exams"
              className="link"
            >
              <span>Read More</span>
              <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
        </div>
        <div
          className="container mw bg-blue"
          style={{
            borderRadius: '10px',
          }}
        >
          <p>
            Be an impact to someone’s life today by helping us provide them with
            access to quality education, orientation, and the possibility of
            them studying their dream school.
          </p>
          <Link
            to="/support"
            className="btn"
            aria-label="link to support us page"
          >
            Support Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
