import { Link } from 'react-router-dom';

import orientation from '../../../assets/img/activities/orientation/orientation1.jpg';
import WorldEng from '../../../assets/img/activities/orientation/orientation2.jpg';
import Premed from '../../../assets/img/activities/orientation/orientation3.jpg';

const RecentActivities = () => {
  return (
    <section id="recent-activities">
      <div className="container">
        <h2 className="header">Recent Activities</h2>
        <p className="header-description">Check Out Our Recent Activities</p>
        <div className="recent-activities-container">
          <div className="recent-activities-box">
            <div className="img">
              <img src={WorldEng} alt="" />
            </div>
            <div>
              <h3>Career Orientation</h3>
              <span className="date">26/02/2023</span>
            </div>
            <p className="description">
              ASEND organized a comprehensive career orientation session,
              enlightening students about various career paths available in the
              engineering, medical, agriculture and Veterinary medicine fields.
            </p>
            <Link to="" className="link">
              <span>Read More</span>
              <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
          <div className="recent-activities-box">
            <div className="img">
              <img src={Premed} alt="" />
            </div>
            <div>
              <h3>World Engineering Day</h3>
              <span className="date">03/03/23</span>
            </div>
            <p className="description">
              ASEND actively participated in World Engineering Day. We showcased
              various engineering projects and highlighted the importance of
              engineering in driving innovation and global progress.
            </p>
            <Link to="" className="link">
              <span>Read More</span>
              <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
          <div className="recent-activities-box">
            <div className="img">
              <img src={orientation} alt="" />
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
            <Link to="" className="link">
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
          <Link to="" className="btn">
            Support Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
