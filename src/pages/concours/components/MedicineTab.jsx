import { Link } from 'react-router-dom';
import { useState } from 'react';

const MedicineTab = () => {
  const [visible, setVisible] = useState(1);

  const toggleVisible = (value) => {
    setVisible(value);
  };
  return (
    <>
      <div className="concour-box">
        <h3 className="sub-header">Medicine</h3>
        <div className="tab">
          <div className="tab-menu">
            <button
              aria-label="open FHS Bueacontent"
              className={`${1 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(1);
              }}
            >
              FHS Buea
            </button>
            <button
              aria-label="open FHS Bamenda content"
              className={`${2 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(2);
              }}
            >
              FHS Bamenda
            </button>
            <button
              aria-label="open FMSP DSCHANG content"
              className={`${3 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(3);
              }}
            >
              FMSP Dschang
            </button>
            <button
              aria-label="open  FMBS Yde content"
              className={`${4 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(4);
              }}
            >
              FMBS Yde
            </button>
            <button
              aria-label="open FMPS Dla content"
              className={`${5 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(5);
              }}
            >
              FMPS dla
            </button>
          </div>
          <div className="tab-content tab-content1">
            <div id="fhs_buea" className={`${1 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                Faculty Of Health Sciences, Buea
              </h3>
              <span>4 years - Bachelors or 7 years - Doctor Of Medicine</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>General Medicine</li>
                      <li>Nursing | Midwifery</li>
                      <li>Medical Laboratory Science</li>
                      <li>Public Health and Hygiene</li>
                      <li>Biomedical Science</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Biology</li>
                      <li>Chemistry</li>
                      <li>Physics</li>
                      <li>General Knowledge</li>
                      <li>French and English</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>
                        Atleast 4 papers at GCE O/L including English, Biology,
                        Chemistry, and excluding Religious Knowledge or
                        Probatoire C, D or I
                      </li>
                      <li>
                        Atleast 2 papers at GCE A/L including Biology,
                        Chemistry, Physics or Mathse or Baccalaureat C, D or I
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
            </div>
            <div id="fhs_bda" className={`${2 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                Faculty Of Health Sciences, Bamenda
              </h3>
              <span>4 years - Bachelors or 7 years - Doctor Of Medicine</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>General Medicine</li>
                      <li>Nursing | Midwifery</li>
                      <li>Medical Laboratory Science</li>
                      <li>Public Health and Hygiene</li>
                      <li>Biomedical Science</li>
                      <li>Clinical Science</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Biology</li>
                      <li>Chemistry</li>
                      <li>Physics</li>
                      <li>General Knowledge</li>
                      <li>French and English</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>
                        Atleast 4 papers at GCE O/L including English, Biology,
                        Chemistry, and excluding Religious Knowledge or
                        Probatoire C, D or I
                      </li>
                      <li>
                        Atleast 2 papers at GCE A/L including Biology,
                        Chemistry, Physics or Mathse or Baccalaureat C, D or I
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
            </div>
            <div
              id="fmps_dschang"
              className={`${3 === visible ? 'active' : ''}`}
            >
              <h3 className="content-header">
                Faculty of Medicine and Pharmaceutical Science, Dschang
              </h3>
              <span>4 years - Bachelors or 7 years - Doctor Of Medicine</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>General Medicine</li>
                      <li>Public Health</li>
                      <li>Biomedical Science</li>
                      <li>Pharmacy</li>
                      <li>Physiotherapy</li>
                      <li>Epidemiology</li>
                      <li>Clinical Biology</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Biology</li>
                      <li>Chemistry</li>
                      <li>Physics</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>
                        Atleast 4 papers at GCE O/L including English, Biology,
                        Chemistry, and excluding Religious Knowledge or
                        Probatoire C, D or I
                      </li>
                      <li>
                        Atleast 2 papers at GCE A/L including Biology,
                        Chemistry, Physics or Mathse or Baccalaureat C, D or I
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
            </div>
            <div id="fmbs_yde" className={`${4 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                Faculty of Medicine and Biomedical Science, Yaounde
              </h3>
              <span>4 years - Bachelors or 7 years - Doctor Of Medicine</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>General Medicine</li>
                      <li>Pharmacy</li>
                      <li>Dental Medicine</li>
                      <li>Public Health</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Biology</li>
                      <li>Chemistry</li>
                      <li>Physics</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>
                        Atleast 4 papers at GCE O/L including English, Biology,
                        Chemistry, and excluding Religious Knowledge or
                        Probatoire C, D or I
                      </li>
                      <li>
                        Atleast 2 papers at GCE A/L including Biology,
                        Chemistry, Physics or Mathse or Baccalaureat C, D or I
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
            <div id="fmps_dla" className={`${5 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                Faculty of Medicine and Pharmaceutical Science, Douala
              </h3>
              <span>4 years - Bachelors or 7 years - Doctor Of Medicine</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>General Medicine</li>
                      <li>Pharmacy</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Biology</li>
                      <li>Chemistry</li>
                      <li>Physics</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>
                        Atleast 4 papers at GCE O/L including English, Biology,
                        Chemistry, and excluding Religious Knowledge or
                        Probatoire C, D or I
                      </li>
                      <li>
                        Atleast 2 papers at GCE A/L including Biology,
                        Chemistry, Physics or Mathse or Baccalaureat C, D or I
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicineTab;
