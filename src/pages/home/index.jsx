import map from '../../assets/img/cameroom.png';
import team from '../../assets/img/hands together.png';
import students from '../../assets/img/students.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image: 'anisha',
      content:
        "I absolutely love this product! It has made a significant difference in my life and I can't recommend it enough. The quality is top-notch and the results are amazing. Thank you!",
    },
    {
      name: 'Jane Smith',
      image: 'cheng',
      content:
        "This product exceeded my expectations! The innovative features and user-friendly design have made it a game-changer for me. I'm so glad I found it and now I can't imagine my life without it.",
    },
    {
      name: 'David Johnson',
      image: 'xhang',
      content:
        "I was skeptical at first, but this product has proven to be worth every penny. It has simplified my daily routine and the results have been remarkable. I've recommended it to all my friends and family.",
    },
  ];
  return (
    <>
      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- About Us  --> */}
      <section className="about">
        <div className="even-columns container">
          <div className="text">
            <h2 className="header">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              illum!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident iure rerum magnam dolorem adipisci id quas laboriosam
              ipsum impedit veritatis.
            </p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                quas!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, repellat.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                saepe?
              </li>
            </ul>
            <a href="about.html" className="btn">
              Learn More
            </a>
          </div>
          <div className="image">
            <img src="assets/img/people.jpg" alt="" />
          </div>
        </div>
      </section>

      {/*         
<!-- ====================================================================================================================================================================================================================================================== -->
    <!-- services  --> */}
      <section className="services">
        <div className="container">
          <h2 className="header">Our Services</h2>
          <p className="header-description">What we offer</p>

          <div className="services-container">
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src="assets/img/students.png" alt="" />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
          </div>
          <a href="services.html" className="btn">
            See More
          </a>
        </div>
      </section>

      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- stats  --> */}
      <section className="stats">
        <div className="container">
          <div>
            <img src={students} alt="" />
            <div className="text">
              <h2>
                <span data-val="4000" className="num">
                  4000
                </span>
                +
              </h2>
              <span>Students Oriented</span>
            </div>
          </div>
          <div>
            <img src={map} alt="" />
            <div className="text">
              <h2>
                <span data-val="3" className="num">
                  3
                </span>
              </h2>
              <span>Major cities in Cameroon</span>
            </div>
          </div>
          <div>
            <img className="team-icon" src={team} alt="" />
            <div className="text">
              <h2>
                <span data-val="100" className="num">
                  100
                </span>
                +
              </h2>
              <span>Team Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- our team  --> */}
      <section className="team">
        <div className="container">
          <h2 className="header">Our Team</h2>
          <p className="header-description">Meet Our Expert Prep Class Staff</p>
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
      </section>

      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- testimonials  --> */}

      <section className="testimonials">
        <div className="container">
          <h2 className="header">Testimonials</h2>
          <p className="header-description">What Our Students Say ABout Us</p>
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-box" key={index}>
                <img src={testimonial.image} alt="" />
                <h3 className="name">{testimonial.name}</h3>
                <p className="content">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- recent activities --> */}
      <section id="recent-activities">
        <div className="container">
          <h2 className="header">Recent Activities</h2>
          <p className="header-description">Check Out Our Recent Activities</p>
          <div className="recent-activities-container">
            <div className="recent-activities-box">
              <div className="img">
                <img src="assets/img/table7.jpg" alt="" />
              </div>
              <div>
                <h3>World Engineering Day</h3>
                <span className="date">17/06/12</span>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis veniam possimus, cupiditate alias eveniet itaque.
              </p>
              <Link to="" className="link">
                <span>Read More</span>
                <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
            <div className="recent-activities-box">
              <div className="img">
                <img src="assets/img/table7.jpg" alt="" />
              </div>
              <div>
                <h3>World Engineering Day</h3>
                <span className="date">17/06/12</span>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis veniam possimus, cupiditate alias eveniet itaque.
              </p>
              <Link to="" className="link">
                <span>Read More</span>
                <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
            <div className="recent-activities-box">
              <div className="img">
                <img src="assets/img/table7.jpg" alt="" />
              </div>
              <div>
                <h3>World Engineering Day</h3>
                <span className="date">17/06/12</span>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis veniam possimus, cupiditate alias eveniet itaque.
              </p>
              <Link to="" className="link">
                <span>Read More</span>
                <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- support us --> */}
      <section className="mw">
        <p>
          Be an impact to someone’s life today by helping us provide them with
          access to quality education, orientation, and the possibility of them
          studying their dream school.
        </p>
        <Link to="" className="btn">
          Support Us
        </Link>
      </section>

      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- faqs --> */}
      <section className="faqs">
        <div className="container">
          <h2 className="header">Frequently Asked Questions</h2>
          <p className="header-description">
            Explore Our Frequently Asked Questions
          </p>

          <div className="faqs-container">
            <div className="faq">
              <div className="question">
                <p>How can ASEND help me?</p>{' '}
                <i className="bx bxs-chevron-down"></i>
              </div>

              <div className="answer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                adipisci distinctio odit suscipit, labore rem eveniet accusamus
                cumque autem iste culpa reiciendis, obcaecati alias temporibus
                illum reprehenderit in similique iusto.
              </div>
            </div>
            <div className="faq">
              <div className="question">
                <p>Who is ASEND?</p> <i className="bx bxs-chevron-down"></i>
              </div>
              <div className="answer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                adipisci distinctio odit suscipit, labore rem eveniet accusamus
                cumque autem iste culpa reiciendis, obcaecati alias temporibus
                illum reprehenderit in similique iusto.
              </div>
            </div>
            <div className="faq">
              <div className="question">
                <p>What concours does ASNED Prepare us for?</p>{' '}
                <i className="bx bxs-chevron-down"></i>
              </div>
              <div className="answer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                adipisci distinctio odit suscipit, labore rem eveniet accusamus
                cumque autem iste culpa reiciendis, obcaecati alias temporibus
                illum reprehenderit in similique iusto.
              </div>
            </div>
            <div className="faq">
              <div className="question">
                <p>Does ASEND offer orientation?</p>{' '}
                <i className="bx bxs-chevron-down"></i>
              </div>
              <div className="answer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                adipisci distinctio odit suscipit, labore rem eveniet accusamus
                cumque autem iste culpa reiciendis, obcaecati alias temporibus
                illum reprehenderit in similique iusto.
              </div>
            </div>
            <div className="faq">
              <div className="question">
                <p>What can I do to join ASEND</p>{' '}
                <i className="bx bxs-chevron-down"></i>
              </div>
              <div className="answer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                adipisci distinctio odit suscipit, labore rem eveniet accusamus
                cumque autem iste culpa reiciendis, obcaecati alias temporibus
                illum reprehenderit in similique iusto.
              </div>
            </div>
            <div className="mw">
              <h3>Still have questions?</h3>
              <p>
                Reac h out to us! We're Here to Help. Contact Our Support Team
                for Personalized Assistance.
              </p>
              <Link to="" className="btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- partners  --> */}
      <section className="partners">
        <h2 className="header">Partners</h2>
        <p className="header-description">Meet Our Trusted Partners</p>
        <div className="partners-container">
          <div className="partner-icons">
            <img src="assets/img/partner4.png" alt="" />
            <img src="assets/img/partner3.png" alt="" />
            <img src="assets/img/partner4.png" alt="" />
            <img src="assets/img/partner5.png" alt="" />
            <img src="assets/img/partner3.png" alt="" />
            <img src="assets/img/partner4.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
