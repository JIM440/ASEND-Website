import { Link } from 'react-router-dom';
import { useState } from 'react';

const VetAgricTab = () => {
  const [visible, setVisible] = useState(1);

  const toggleVisible = (value) => {
    setVisible(value);
  };
  return (
    <>
      <div className="concour-box">
        <h3 className="sub-header">Agriculture/Veterinary Medicine</h3>
        <div className="tab">
          <div className="tab-menu">
            <button
              className={`${1 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(1);
              }}
            >
              FAVM
            </button>
            <button
              className={`${2 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(2);
              }}
            >
              FASA
            </button>
            <button
              className={`${3 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(3);
              }}
            >
              FS
            </button>
          </div>
          <div className="tab-content tab-content1">
            <div id="favm" className={`${1 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                Faculty Of Agriculture and Veterinary Medicine, Buea
              </h3>
              <span>4 years - Bsc</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>Forestry and Wildlife</li>
                      <li>Food Science and Technology</li>
                      <li>Crop Production</li>
                      <li>Animal Science</li>
                      <li>Agronomy</li>
                      <li>
                        Veterinary Medicine (6 years - Doctor Of Veterinary
                        Medicine)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Biology</li>
                      <li>Chemistry</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>GCE Technical A Level Biology and Chemistry</li>
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
            <div id="fasa" className={`${2 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                Faculty of Agronomy and Agricultural Sciences, Dschang
              </h3>
              <span>4 years - Bachelor Of Science</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>Agriculture and Agronomy</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Biology</li>
                      <li>Chemistry</li>
                      <li>General Knowledge</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>GCE Technical A Level in Biology and Chemistry</li>
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
            <div id="fs" className={`${3 === visible ? 'active' : ''}`}>
              <h3 className="content-header">Faculty of Science, Ngaoundere</h3>
              <span>4 years - Bachelor Of Science</span>

              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>Agriculture and Agronomy</li>
                      <li>Veterinary Medicine (5 years- DVM)</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Biology</li>
                      <li>Chemistry</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>GCE Technical A Level in Biology and Chemistry</li>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default VetAgricTab;
