import { Link } from 'react-router-dom';
import staffs from '../../img/Staffs.jpg';

const Concours = () => {
  return (
    <>
      {' '}
      {/*hero */}
      <section className="hero">
        <div
          className="container"
          style={{
            backgroundImage: `${staffs}`,
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontSize: '48px',
            }}
          >
            What We Prepare You For
          </h1>
        </div>
      </section>
      {/* concours */}
      <section id="concour">
        <div className="container">
          {/* <h2 className="header">What We Prepare You For</h2> */}

          <div className="concour-boxes">
            {/* <!-- concour engineering --> */}
            <div className="concour-box">
              <h3 className="sub-header">Engineering</h3>
              <div className="tab">
                <div className="tab-menu">
                  <button data-tab-target="#fet" className="active">
                    FET
                  </button>
                  <button data-tab-target="#cot">COT</button>
                  <button data-tab-target="#nahpi">NAHPI</button>
                  <button data-tab-target="#enstp">ENSTP</button>
                  <button data-tab-target="#polytech">POLYTECH</button>
                  <button data-tab-target="#coltech">COLTECH</button>
                </div>
                <div className="tab-content tab-content1">
                  <div id="fet" className="active">
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
                              GCE O Level (in at least 5 subjects including
                              Maths and Physics) & GCE A Level (in at least 2
                              subjects including Maths){' '}
                            </li>
                            <li>
                              GCE Technical O Level and GCE Technical A Level in
                              relevant subjects
                            </li>
                            <li>
                              Any other certificate recognized equivalent by
                              MINESUP
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
                  <div id="nahpi">
                    <h2>National Higher Polytechnic Institute</h2>
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
                              Physics or Biology and Chemistry (based on
                              concour)
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
                              GCE O Level (in at least 5 subjects (excluding
                              Relgious Studies) including English Language,
                              Maths or Physics) & GCE A Level (in at least 2
                              subjects including Maths){' '}
                            </li>
                            <li>
                              GCE Technical O Level and GCE Technical A Level in
                              relevant subjects
                            </li>
                            <li>
                              Baccalaureate C, D, F2, F3, and MISE, MEM, MFCM,
                              SI, TI.
                            </li>
                            <li>
                              Any other certificate recognized equivalent by
                              MINESUP
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
                    <a className="concour-link" href="#" target="_blank">
                      <span>Read More</span>
                    </a>
                  </div>
                  <div id="cot">
                    <h2>College Of Technology, Buea</h2>
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
                              GCE O Level (in at least 5 subjects (excluding
                              Relgious Studies) including English Language,
                              Maths or Physics) & GCE A Level (in at least 2
                              subjects including Maths){' '}
                            </li>
                            <li>
                              GCE Technical O Level and GCE Technical A Level in
                              relevant subjects
                            </li>
                            <li>
                              Baccalaureate C, D, F2, F3, and MISE, MEM, MFCM,
                              SI, TI.
                            </li>
                            <li>
                              Any other certificate recognized equivalent by
                              MINESUP
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
                    <a className="concour-link" href="#" target="_blank">
                      <span>Read More</span>
                    </a>
                  </div>

                  <div id="enstp">enstp</div>
                  <div id="polytech">polytech</div>
                  <div id="coltech">coltech</div>
                </div>
              </div>
            </div>
            {/* <!-- concour medicine --> */}
            <div className="concour-box">
              <h3 className="sub-header">Medicine</h3>
              <div className="tab">
                <div className="tab-menu tab-menu2">
                  <button data-tab-target1="#fhs" className="active">
                    fhs
                  </button>
                  <button data-tab-target1="#fmbs">FMBS</button>
                  <button data-tab-target1="#fms">FMS</button>
                  <button data-tab-target1="#fhsBda">FHS Bda</button>
                  <button data-tab-target1="#cuiss">cuiss</button>
                  <button data-tab-target1="#cuss">cuss</button>
                </div>
                <div className="tab-content tab-content2">
                  <div id="fhs" className="active">
                    <h3 className="content-header">
                      Faculty Of Health Sciences, Buea
                    </h3>
                    <span>4years - Bachelor Of Engineering</span>

                    <div className="requirements">
                      <div>
                        <div>
                          <h3>Departments</h3>
                          <ul>
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
                              GCE O Level (in at least 5 subjects including
                              Maths and Physics) & GCE A Level (in at least 2
                              subjects including Maths){' '}
                            </li>
                            <li>
                              GCE Technical O Level and GCE Technical A Level in
                              relevant subjects
                            </li>
                            <li>
                              Any other certificate recognized equivalent by
                              MINESUP
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
                    <Link className="link" to="/" target="_blank">
                      <span>Read More</span>
                      <i className="bx bxs-chevron-right"></i>
                    </Link>
                  </div>
                  <div id="fmbs">fmbs</div>
                  <div id="fms">fms</div>
                  <div id="fhsBda">fhsbuea</div>
                  <div id="cuiss">cuiss</div>
                  <div id="cuss">cuss</div>
                </div>
              </div>
            </div>
            {/* <!-- concour agriculture --> */}
            <div className="concour-box">
              <h3 className="sub-header">Agriculture</h3>
              <div className="tab">
                <div className="tab-menu tab-menu3">
                  <button data-tab-target2="#favm" className="active">
                    favm
                  </button>
                  <button data-tab-target2="#favmBda">favmBda</button>
                </div>
                <div className="tab-content tab-content3">
                  <div id="favm" className="active">
                    <h3 className="content-header">
                      Faculty Of Agriculture And Veterinary Medicine
                    </h3>
                    <span>4years - Bachelor Of Engineering</span>

                    <div className="requirements">
                      <div>
                        <div>
                          <h3>Departments</h3>
                          <ul>
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
                              GCE O Level (in at least 5 subjects including
                              Maths and Physics) & GCE A Level (in at least 2
                              subjects including Maths){' '}
                            </li>
                            <li>
                              GCE Technical O Level and GCE Technical A Level in
                              relevant subjects
                            </li>
                            <li>
                              Any other certificate recognized equivalent by
                              MINESUP
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
                    <Link className="link" to="/" target="_blank">
                      <span>Read More</span>
                      <i className="bx bxs-chevron-right"></i>
                    </Link>
                  </div>
                  <div id="favmBda">favmBda</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Concours;
