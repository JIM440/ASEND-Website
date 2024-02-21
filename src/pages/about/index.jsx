import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section id="how-we-started">
        <div className="container">
          <div className="even-columns">
            <div className="text">
              <h2 className="header">How We Started</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                amet quaerat veritatis, reiciendis laborum quas soluta, sint
                dicta saepe atque repellat. Minus consequuntur inventore quidem
                tempora totam quas voluptate debitis itaque eligendi, saepe
                natus reiciendis expedita et non quibusdam. Labore porro fugiat
                quasi beatae! Repellat alias ut nemo, tenetur earum quas illo
                officia provident recusandae reiciendis similique molestiae
                neque corporis! Possimus eius porro esse officia reiciendis
                expedita sunt repellendus, provident facilis earum soluta,
                quibusdam optio labore iure nemo, numquam corporis quasi? Eum
                illum quibusdam totam dignissimos aut ea impedit error itaque
                repudiandae, alias quod hic ipsam, distinctio odit, velit rem
                nemo fugiat iusto rerum optio dicta. Corporis odit dicta
                voluptate consectetur veniam voluptatum nam eaque reprehenderit
                impedit quidem repellendus, illum autem facere quam quas amet
                aut. Ex minima laudantium inventore numquam animi sequi et. Enim
                hic nihil impedit ex, fugit assumenda cupiditate excepturi autem
                necessitatibus, voluptate laudantium placeat neque doloribus
                corporis dolorem. Commodi labore tenetur maiores ratione, odit
                ad, nam distinctio earum unde deserunt explicabo nostrum
                corporis alias fugit. Dolore doloremque laudantium minus
                delectus obcaecati necessitatibus consequatur, ratione ipsam.
                Sunt voluptatum exercitationem minus doloremque explicabo itaque
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
      <section class="team teamAbout">
        <div class="container">
          <h2 class="header header-leadershipt">Meet Our Leadership</h2>
          <p class="header-description header-leadership">
            Get to Know Our Visionary Leadership
          </p>
          <div className="team-container">
            <div className="team-box">
              <div className="img">
                <img src="" alt="" />
              </div>
              <h3>Tracy D. Wright</h3>
              <p className="title">B.eng Telecom Engineering</p>
              <div className="position">
                <p className="position">Engineering Tutor</p>
                <div className="profile-links">
                  <img alt="LI" />
                  <img alt="IG" />
                </div>
              </div>
            </div>
            <div className="team-box">
              <div className="img">
                <img src="" alt="" />
              </div>
              <h3>Tracy D. Wright</h3>
              <p className="title">B.eng Telecom Engineering</p>
              <div className="position">
                <p className="position">Engineering Tutor</p>
                <div className="profile-links">
                  <img alt="LI" />
                  <img alt="IG" />
                </div>
              </div>
            </div>
            <div className="team-box">
              <div className="img">
                <img src="" alt="" />
              </div>
              <h3>Tracy D. Wright</h3>
              <p className="title">B.eng Telecom Engineering</p>
              <div className="position">
                <p className="position">Engineering Tutor</p>
                <div className="profile-links">
                  <img alt="LI" />
                  <img alt="IG" />
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
              <Link to="" class="btn">
                Join Our Team
              </Link>
            </div>
          </div>
          <h2 class="header teamH">Meet Our Team</h2>
          <p class="header-description">
            Collaborating to Empower Students for Academic Excellence
          </p>
          <div className="team-container">
            <div className="team-box">
              <div className="img">
                <img src="" alt="" />
              </div>
              <h3>Tracy D. Wright</h3>
              <p className="title">B.eng Telecom Engineering</p>
              <div className="position">
                <p className="position">Engineering Tutor</p>
                <div className="profile-links">
                  <img alt="LI" />
                  <img alt="IG" />
                </div>
              </div>
            </div>
            <div className="team-box">
              <div className="img">
                <img src="" alt="" />
              </div>
              <h3>Tracy D. Wright</h3>
              <p className="title">B.eng Telecom Engineering</p>
              <div className="position">
                <p className="position">Engineering Tutor</p>
                <div className="profile-links">
                  <img alt="LI" />
                  <img alt="IG" />
                </div>
              </div>
            </div>
            <div className="team-box">
              <div className="img">
                <img src="" alt="" />
              </div>
              <h3>Tracy D. Wright</h3>
              <p className="title">B.eng Telecom Engineering</p>
              <div className="position">
                <p className="position">Engineering Tutor</p>
                <div className="profile-links">
                  <img alt="LI" />
                  <img alt="IG" />
                </div>
              </div>
            </div>
          </div>
          <button class="btn see-more">See More</button>
        </div>
      </section>
    </>
  );
};

export default About;
