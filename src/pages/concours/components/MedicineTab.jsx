import { Link } from 'react-router-dom';
import { useState } from 'react';

const MedicineTab = () => {
  const [visible, setVisible] = useState(1);

  const toggleVisible = (value) => {
    setVisible(value);
  };
  return (
    <div className="concour-boxes">
      <div className="concour-box">
        <h3 className="sub-header">Medicine</h3>
        <div className="tab">
          <div className="tab-menu">
            <button
              className={`${1 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(1);
              }}
            >
              FHS
            </button>
            <button
              className={`${2 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(2);
              }}
            >
              COT
            </button>
            <button
              className={`${3 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(3);
              }}
            >
              NAHPI
            </button>
            <button
              className={`${4 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(4);
              }}
            >
              ENSTP
            </button>
            <button
              className={`${5 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(5);
              }}
            >
              POLYTECH
            </button>
            <button
              className={`${6 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(6);
              }}
            >
              COLTECH
            </button>
          </div>
          <div className="tab-content tab-content1">
            <div id="fet" className={`${1 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                Faculty Of Health Sciences, Buea
              </h3>
              <span>4 years - Bachelor Of Engineering</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>Civil Engineering</li>
                      <li>Computer Engineering</li>

                      <li>Electrical Engineering</li>
                      <li>Mechanical Engineering</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Mathematics</li>
                      <li>Physics</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>
                        GCE O Level (in at least 5 subjects including Maths and
                        Physics) & GCE A Level (in at least 2 subjects including
                        Maths){' '}
                      </li>
                      <li>
                        GCE Technical O Level and GCE Technical A Level in
                        relevant subjects
                      </li>
                      <li>
                        Any other certificate recognized equivalent by MINESUP
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Tuition</h3>
                    <ul>
                      <li>50, 000frs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link to="/" className="link" target="_blank">
                <span>Read More</span>
                <i className="bx bxs-chevron-right"></i>
              </Link>
            </div>
            <div id="cot" className={`${2 === visible ? 'active' : ''}`}>
              <h3 className="content-header">College Of Technology, Buea</h3>
              <span>3 years - Bachelor Of Technology</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>Computer Engineering</li>
                      <li>Electrical & Electronic Engineering</li>
                      <li>Mechanical Engineering</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Mathematics</li>
                      <li>Physics</li>
                      <li>English</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>
                        GCE O Level (in at least 5 subjects (excluding Relgious
                        Studies) including English Language, Maths or Physics) &
                        GCE A Level (in at least 2 subjects including Maths){' '}
                      </li>
                      <li>
                        GCE Technical O Level and GCE Technical A Level in
                        relevant subjects
                      </li>
                      <li>
                        Baccalaureate C, D, F2, F3, and MISE, MEM, MFCM, SI, TI.
                      </li>
                      <li>
                        Any other certificate recognized equivalent by MINESUP
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Tuition</h3>
                    <ul>
                      <li>50, 000frs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link to="/" className="link" target="_blank">
                <span>Read More</span> <i className="bx bxs-chevron-right"></i>
              </Link>
            </div>
            <div id="nahpi" className={`${3 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                National Higher Polytechnic Institute
              </h3>
              <span>4 years - Bachelor Of Engineering</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>Civil Engineering and Architecture</li>
                      <li>Chemical and Biological Engineering</li>
                      <li>Computer Engineering</li>
                      <li>Electrical & Electronic Engineering</li>
                      <li>Mechanical and Industrial Engineering</li>
                      <li>Minning and Mineral Engineering</li>
                      <li>Petroleum Engineering</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Mathematics or Geology (based on concour)</li>
                      <li>
                        Physics or Biology and Chemistry (based on concour)
                      </li>
                      <li>General Knowledge</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>
                        GCE O Level (in at least 5 subjects (excluding Relgious
                        Studies) including English Language, Maths or Physics) &
                        GCE A Level (in at least 2 subjects including Maths){' '}
                      </li>
                      <li>
                        GCE Technical O Level and GCE Technical A Level in
                        relevant subjects
                      </li>
                      <li>
                        Baccalaureate C, D, F2, F3, and MISE, MEM, MFCM, SI, TI.
                      </li>
                      <li>
                        Any other certificate recognized equivalent by MINESUP
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Tuition</h3>
                    <ul>
                      <li>50, 000frs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link to="/" className="link" target="_blank">
                <span>Read More</span>
                <i className="bx bxs-chevron-right"></i>
              </Link>
            </div>
            <div id="enstp" className={`${4 === visible ? 'active' : ''}`}>
              enstp
            </div>
            <div id="polytech" className={`${5 === visible ? 'active' : ''}`}>
              polytech
            </div>
            <div id="coltech" className={`${6 === visible ? 'active' : ''}`}>
              coltech
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineTab;
