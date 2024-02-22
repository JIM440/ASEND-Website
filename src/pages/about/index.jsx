import { Link } from 'react-router-dom';
// images
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/ig.jpg';

const About = () => {
  return (
    <>
      <section id="how-we-started">
        <div className="container">
          <div className="even-columns">
            <div className="text">
              <h2 className="header">How We Started</h2>
              <p>
                Possimus eius porro esse officia reiciendis expedita sunt
                repellendus, provident facilis earum soluta, quibusdam optio
                labore iure nemo, numquam corporis quasi? Eum illum quibusdam
                totam dignissimos aut ea impedit error itaque repudiandae, alias
                quod hic ipsam, distinctio odit, velit rem nemo fugiat iusto
                rerum optio dicta. Dolore doloremque laudantium minus delectus
                obcaecati necessitatibus consequatur, ratione ipsam. Sunt
                voluptatum exercitationem minus doloremque explicabo itaque
                veritatis at optio aperiam voluptatibus vero totam libero eius
                quisquam et dolorum, fugiat molestias.
              </p>
            </div>
            <div className="img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="mission-vision">
        <div className="container">
          <div>
            <h2>Mission</h2>
            <p>
              Our mission is to empower individuals and businesses by providing
              the latest Apple products that seamlessly integrate into their
              digital lives. Saving the ocean and our planet will take more than
              what one person, company, or organization can do on their own, but
              only 3% of all philanthropy in the U.S. goes to environmental
              causes.
            </p>
          </div>
          <div>
            <h2>Vision</h2>
            <p>
              Our mission is to empower individuals and businesses by providing
              the latest Apple products that seamlessly integrate into their
              digital lives. Saving the ocean and our planet will take more than
              what one person, company, or organization can do on their own, but
              only 3% of all philanthropy in the U.S. goes to environmental
              causes.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- our team  --> */}
      <section className="team teamAbout">
        <div className="container">
          <h2 className="header header-leadershipt">Meet Our Leadership</h2>
          <p className="header-description header-leadership">
            Get to Know Our Visionary Leadership
          </p>
          <div className="team-container">
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
                  src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
                  alt=""
                />
              </div>
              <h3>Tracy D. Wright</h3>
              <p className="title">Doctor Of Veterinary Medicine</p>
              <div className="position">
                <p className="position">Veterinary/Agriculture Tutor</p>
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
          </div>
          <div className="container bg-blue">
            <div className="mw">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                tenetur nostrum, asperiores quia obcaecati, a eligendi provident
                velit perferendis nesciunt expedita vel explicabo. Quo fugiat
                molestiae, excepturi inventore eaque voluptas.
              </p>
              <Link to="" className="btn">
                Join Our Team
              </Link>
            </div>
          </div>
          <h2 className="header teamH">Meet Our Team</h2>
          <p className="header-description">
            Collaborating to Empower Students for Academic Excellence
          </p>
          <div className="team-container">
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
                  src="https://www.shutterstock.com/image-photo/portrait-caucasian-handsome-business-man-260nw-2235232693.jpg"
                  alt=""
                />
              </div>
              <h3>Tracy D. Wright</h3>
              <p className="title">Doctor Of Veterinary Medicine</p>
              <div className="position">
                <p className="position">Veterinary/Agriculture Tutor</p>
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
                  src="https://www.shutterstock.com/image-photo/portrait-happy-businessman-arms-crossed-600nw-388786822.jpg"
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
                  src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
                  alt=""
                />
              </div>
              <h3>Tracy D. Wright</h3>
              <p className="title">Doctor Of Veterinary Medicine</p>
              <div className="position">
                <p className="position">Veterinary/Agriculture Tutor</p>
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
          </div>
          <button className="btn see-more">See More</button>
        </div>
      </section>
    </>
  );
};

export default About;
