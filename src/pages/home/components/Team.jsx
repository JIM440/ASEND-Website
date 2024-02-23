import Linkedin from '../../../img/linkedin.png';
import Instagram from '../../../img/ig.jpg';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="header">Our Team</h2>
        <p className="header-description">Meet Our Expert Prep Class Staff</p>
        <div className="team-container">
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
                <a href="">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="">
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
                <a href="">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.shutterstock.com/image-photo/portrait-half-turn-brunet-hair-260nw-1216693528.jpg"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">Doctor Of Veterinary Medicine</p>
            <div className="position">
              <p className="position">Vet/Agric Tutor</p>
              <div className="profile-links">
                <a href="">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mw">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur
            nostrum, asperiores quia obcaecati, a eligendi provident velit
            perferendis nesciunt expedita vel explicabo. Quo fugiat molestiae,
            excepturi inventore eaque voluptas.
          </p>
          <Link to="" className="btn">
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
