import { Link } from 'react-router-dom';

import orientation from '../../../img/orientation1.jpg';
import WorldEng from '../../../img/orientation2.jpg';
import Premed from '../../../img/orientation3.jpg';

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
              <span className="date">17/06/12</span>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              veniam possimus, cupiditate alias eveniet itaque.
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
              <span className="date">17/06/12</span>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              veniam possimus, cupiditate alias eveniet itaque.
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
              <h3>PreMedicne/PreEngineering Exams</h3>
              <span className="date">17/06/12</span>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              veniam possimus, cupiditate alias eveniet itaque.
            </p>
            <Link to="" className="link">
              <span>Read More</span>
              <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
