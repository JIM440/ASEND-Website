import { Link } from 'react-router-dom';
// images
import Linkedin from '../../../assets/icons/linkedin.png';
import Instagram from '../../../assets/icons/ig.jpg';
import salif from '../../../assets/img/team/salif.jpg';

const AboutTeam = () => {
  return (
    <section className="team teamAbout">
      <div className="container">
        <h2 className="header header-leadershipt">Meet Our Leadership</h2>
        <p className="header-description">
          Get to Know Our Visionary Leadership
        </p>
        <div className="team-container team-container-about">
          <div className="team-box">
            <div className="img">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5dc5d641498834108f7c46a5/564a726c-ec6a-470b-9769-1c5045358424/What%27s+Your+Why+Hero.jpg"
                alt=""
              />
            </div>
            <h3>Engr. David Baar</h3>
            <p className="title">M.eng B.eng Telecommunications Engineering</p>
            <div className="position">
              <p className="position">Co-Founder</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
                alt=""
              />
            </div>
            <h3>Dr. Ngongang N. Cabrel</h3>
            <p className="title">Doctor Of Medicine (MD)</p>
            <div className="position">
              <p className="position">Co-Founder</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://cdn.eduadvisor.my/articles/2022/04/how-to-be-teacher-malaysia-feature.png"
                alt=""
              />
            </div>
            <h3>Engr. Sone N. Epie</h3>
            <p className="title">B.Tech Civil Engineering</p>
            <div className="position">
              <p className="position">Co-Founder</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5dc5d641498834108f7c46a5/564a726c-ec6a-470b-9769-1c5045358424/What%27s+Your+Why+Hero.jpg"
                alt=""
              />
            </div>
            <h3>Engr. Acha Golda Angwe</h3>
            <p className="title">B.eng Electrical Power Systems Engineering</p>
            <div className="position">
              <p className="position">General Coordinator</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
                alt=""
              />
            </div>
            <h3>Mombong Yannick Bebang</h3>
            <p className="title">6th Year Medicine Student</p>
            <div className="position">
              <p className="position">Vice General Coordinator</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
                alt=""
              />
            </div>
            <h3>Engr. Usmanu Chuka</h3>
            <p className="title">B.eng Telecommunications Engineering</p>
            <div className="position">
              <p className="position">DAAS</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
                alt=""
              />
            </div>
            <h3>Bungwa Lois Nabila</h3>
            <p className="title">Bachelor Of Nursing Science</p>
            <div className="position">
              <p className="position">Secretary General</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mw container bg-blue">
          <div className="mw">
            <p>
              Join us in making an impact today! Be a part of our team and help
              students achieve their dreams of getting into their desired
              professional school.
            </p>
            <Link to="/" className="btn">
              Join Our Team
            </Link>
          </div>
        </div>
        <h2 className="header teamH">Meet Our Team</h2>
        <p className="header-description">
          Collaborating to Empower Students for Academic Excellence
        </p>
        <div className="team-container team-container-about">
          <div className="team-box">
            <div className="img">
              <img
                src="https://media.licdn.com/dms/image/D4E12AQHreMR7tl4vHQ/article-cover_image-shrink_720_1280/0/1695244196953?e=2147483647&v=beta&t=6Jm12Vy1nlZoDARkn7ziO-WUxShJqSVC3XIBKRKrOVc"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">MD Doctor Of Medicine</p>
            <div className="position">
              <p className="position">Medicine Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img src={salif} alt="" />
            </div>
            <h3>Engr. Njidda Salifu</h3>
            <p className="title">
              Final Year Software Engineerng Student - FET Buea
            </p>
            <div className="position">
              <p className="position">Engineering Coordinator- Buea</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5dc5d641498834108f7c46a5/564a726c-ec6a-470b-9769-1c5045358424/What%27s+Your+Why+Hero.jpg"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">MD Doctor Of Medicine</p>
            <div className="position">
              <p className="position">Medicine Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.shutterstock.com/image-photo/portrait-happy-businessman-arms-crossed-600nw-388786822.jpg"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">B.eng Telecom Engineering</p>
            <div className="position">
              <p className="position">Engineering Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">Doctor Of Veterinary Medicine</p>
            <div className="position">
              <p className="position">Veterinary/Agriculture Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://cdn.eduadvisor.my/articles/2022/04/how-to-be-teacher-malaysia-feature.png"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">B.eng Telecom Engineering</p>
            <div className="position">
              <p className="position">Engineering Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://media.licdn.com/dms/image/D4E12AQHreMR7tl4vHQ/article-cover_image-shrink_720_1280/0/1695244196953?e=2147483647&v=beta&t=6Jm12Vy1nlZoDARkn7ziO-WUxShJqSVC3XIBKRKrOVc"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">MD Doctor Of Medicine</p>
            <div className="position">
              <p className="position">Medicine Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.shutterstock.com/image-photo/portrait-happy-businessman-arms-crossed-600nw-388786822.jpg"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">B.eng Telecom Engineering</p>
            <div className="position">
              <p className="position">Engineering Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">Doctor Of Veterinary Medicine</p>
            <div className="position">
              <p className="position">Veterinary/Agriculture Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://cdn.eduadvisor.my/articles/2022/04/how-to-be-teacher-malaysia-feature.png"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">B.eng Telecom Engineering</p>
            <div className="position">
              <p className="position">Engineering Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://media.licdn.com/dms/image/D4E12AQHreMR7tl4vHQ/article-cover_image-shrink_720_1280/0/1695244196953?e=2147483647&v=beta&t=6Jm12Vy1nlZoDARkn7ziO-WUxShJqSVC3XIBKRKrOVc"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">MD Doctor Of Medicine</p>
            <div className="position">
              <p className="position">Medicine Tutor</p>
              <div className="profile-links">
                <a href="linkendin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
