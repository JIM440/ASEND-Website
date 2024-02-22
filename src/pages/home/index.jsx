import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/ig.jpg';
import map from '../../assets/img/cameroom.png';
import team from '../../assets/img/hands together.png';
import students from '../../assets/img/students.png';
import staffs from '../../img/Staffs.jpg';
// recent activities images
import orientation from '../../img/orientation1.jpg';
import WorldEng from '../../img/orientation2.jpg';
import Premed from '../../img/orientation3.jpg';
// services images
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image:
        'https://media.gettyimages.com/id/1257207393/de/foto/single-male-college-student-blick-auf-kamera-f%C3%BCr-close-up-portrait.jpg?s=612x612&w=gi&k=20&c=X8mLl7x6uXmcs6fE5ayNcUVHKjwfz4CTbSr1z0KFezE=',
      content:
        "I absolutely love this product! It has made a significant difference in my life and I can't recommend it enough. The quality is top-notch and the results are amazing. Thank you!",
    },
    {
      name: 'Jane Smith',
      image:
        'https://media.gettyimages.com/id/681887813/photo/close-up-portrait-of-boy-standing-in-classroom.jpg?s=612x612&w=gi&k=20&c=np7t5eZndwuf2WtU8Kl4SFerjdtEuGqmw_Pt0_eFLVs=',
      content:
        "This product exceeded my expectations! The innovative features and user-friendly design have made it a game-changer for me. I'm so glad I found it and now I can't imagine my life without it.",
    },
    {
      name: 'David Johnson',
      image:
        'https://media.gettyimages.com/id/1438427420/de/foto/close-up-portrait-of-cheerful-young-black-hispanic-latin-teenager-man-smiling-at-camera-over.jpg?s=612x612&w=gi&k=20&c=DojZ5b8vxqyxaKpMkvsybvaj_luzibF1yXy_aCryQRk=',
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
            <h2 className="header">About ASEND</h2>
            <p>
              Welcome to ASend, the leading prep class for competitive exams in
              Cameroon. Our mission is to empower students with the knowledge,
              skills, and confidence needed to excel in concours and other
              challenging exams. With a team of experienced mentors and a proven
              curriculum, we provide comprehensive preparation that ensures our
              students are fully equipped to outperform their peers. We offer
              personalized guidance and support, helping students navigate
              through the complexities of exam content and format.. Join ASend
              and unlock your potential for success. Enroll today and let us be
              your partner in achieving your academic goals.
            </p>
            <Link to="about" className="btn">
              Learn More
            </Link>
          </div>
          <div className="image">
            <img src={staffs} alt="" />
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
              <img src={students} alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img
                src="https://t4.ftcdn.net/jpg/02/33/87/01/360_F_233870161_ff4IxGVm7dXS9wjxAB7hAMJ4qanRvt1R.jpg"
                alt=""
              />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img src={students} alt="" />
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
            <div className="service-box">
              <img
                src="https://t4.ftcdn.net/jpg/02/33/87/01/360_F_233870161_ff4IxGVm7dXS9wjxAB7hAMJ4qanRvt1R.jpg"
                alt=""
              />
              <h3 className="service-heading">Online Mentorship</h3>
              <p className="service-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                veritatis cum at velit, corporis quas?
              </p>
            </div>
          </div>
          <Link to="services.html" className="btn">
            See More
          </Link>
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
                <img src={WorldEng} alt="" />
              </div>
              <div>
                <h3>Career Orientation</h3>
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
                <img src={Premed} alt="" />
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
                <img src={orientation} alt="" />
              </div>
              <div>
                <h3>PreMedicne/PreEngineering Exams</h3>
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
