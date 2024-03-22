import { useState } from 'react';
import { Link } from 'react-router-dom';

const EngineeringTab = () => {
  const [visible, setVisible] = useState(1);

  const toggleVisible = (value) => {
    setVisible(value);
  };

  return (
    <>
      <div className="concour-box">
        <h3 className="sub-header">Engineering</h3>
        <div className="tab">
          <div className="tab-menu">
            <button
              aria-label="open FET content"
              className={`${1 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(1);
              }}
            >
              FET
            </button>
            <button
              aria-label="open COT content"
              className={`${2 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(2);
              }}
            >
              COT
            </button>
            <button
              aria-label="open NAHPI content"
              className={`${3 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(3);
              }}
            >
              NAHPI
            </button>
            <button
              aria-label="open ENSTP content"
              className={`${4 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(4);
              }}
            >
              ENSTP
            </button>
            <button
              aria-label="open ENSPY content"
              className={`${5 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(5);
              }}
            >
              ENSPY
            </button>
            <button
              aria-label="open ENSPD content"
              className={`${6 === visible ? 'active' : ''}`}
              onClick={() => {
                toggleVisible(6);
              }}
            >
              ENSPD
            </button>
          </div>
          <div className="tab-content tab-content1">
            <div id="fet" className={`${1 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                Faculty Of Engineering and Technology, Buea
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
                      <li>Renewable Energy</li>
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
            </div>
            <div id="nahpi" className={`${3 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                National Higher Polytechnic Institute, Bamenda
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
            </div>
            <div id="enstp" className={`${4 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                National Advanced School Of Public Works, Yaounde
              </h3>
              <span>5 years - Masters Of Engineering</span>
              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>
                        Higher Technician Cycle in Civil Engineering, Rural
                        Engineering, Land Surveying and Town Planning
                      </li>
                      <li>
                        Engineering Cycle (MEng) in Civil Engineering,
                        Enviromental Engineering, Land Surveying and Rural
                        Engineering
                      </li>
                      <li>
                        Architecture or Engineering (MEng) in Town Planning
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Mathematics</li>
                      <li>Physics </li>
                      <li>Chemistry </li>
                      <li>General Knowledge</li>
                      <li>French and English</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>GCE Technical A Level Maths and Physics</li>
                      <li>Baccalaureate C, D, E, F, TI.</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Tuition</h3>
                    <ul>
                      <li>235, 000frs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="enspy" className={`${5 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                National Advanced School Of Engineering, Yaounde
              </h3>
              <span>5 years - Masters Of Engineering</span>
              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li>Civil Engineering</li>
                      <li>Computer Engineering</li>
                      <li>Electrical Engineering</li>
                      <li>Industrial Engineering</li>
                      <li>Telecommunications Engineering</li>
                      <li>Mechanical Engineering</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Mathematics</li>
                      <li>Physics </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>
                        Pass in minimum 4 subjects GCE OLevel (Religious Studies
                        exclusive)
                      </li>
                      <li>GCE Technical A Level FMaths, Maths and Physics</li>
                      <li>Baccalaureate C, D, E, F, TI.</li>
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
            <div id="enspd" className={`${6 === visible ? 'active' : ''}`}>
              <h3 className="content-header">
                National Advanced School Of Engineering, Douala
              </h3>
              <span>5 years - Masters Of Engineering</span>
              <div className="requirements">
                <div>
                  <div>
                    <h3>Departments</h3>
                    <ul>
                      <li> Civil Engineering</li>
                      <li> Automobile Engineering</li>
                      <li> Informations & Telecommunications Engineering</li>
                      <li> Electrical Engineering and Intelligent Systems</li>
                      <li>
                        Industrial Quality, Health, Securit and Environment
                        Engineering
                      </li>
                      <li> Energetic Engineering</li>
                      <li> Mechanical Engineering</li>
                      <li> Maritime and Port Engineering</li>
                      <li> Meteorology</li>
                      <li> Process Engineering</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Written Exam</h3>
                    <ul>
                      <li>Mathematics</li>
                      <li>Physics </li>
                      <li>Chemistry </li>
                      <li>Technology</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>requirements</h3>
                    <ul>
                      <li>GCE Technical A Level Maths and Physics</li>
                      <li>Baccalaureate C, D, E, F, TI.</li>
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

export default EngineeringTab;
