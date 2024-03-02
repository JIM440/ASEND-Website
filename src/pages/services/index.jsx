import React from 'react';
import staffs from '../../assets/img/hero/Staffs.jpg';
import students from '../../assets/icons/students.png';
import online_tutoring from '../../assets/icons/online_tutoring.png';
import mentoring from '../../assets/icons/mentoring.png';
import career from '../../assets/icons/career.png';
import leadership from '../../assets/icons/leadership.png';
import design from '../../assets/icons/design.png';
import maintenance from '../../assets/icons/maintenance.png';
import web from '../../assets/icons/mobile_web.png';
import data from '../../assets/icons/data.png';
import UseScrollTop from '../../common/components/UseScrollTop';

const Services = () => {
  const scrollToTop = UseScrollTop();
  return (
    <>
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
            What We Offer
          </h1>
        </div>
      </section>
      {/* <!-- ====================================================================================================================================================================================================================================================== -->
    <!-- services  --> */}
      <section className="services">
        <div className="container">
          <h2 className="header">Our Services</h2>
          <p className="header-description">
            Explore Our Services to Support Students Before and After the
            Concour
          </p>
          <h3 className="sub-header">Before Concour</h3>

          <div className="services-container">
            <div className="service-box">
              <div className="img">
                <img src={students} alt="students in class" />
              </div>
              <h3 className="service-heading">Preparatory Classes</h3>
              <p className="service-description">
                Our experienced instructors cover essential topics starting from
                the basics to ensure a solid foundation for acing entrance exam.
              </p>
            </div>
            <div className="service-box">
              <div className="img">
                <img src={career} alt="career icon" />
              </div>
              <h3 className="service-heading">Career Orientation</h3>
              <p className="service-description">
                Discover various career paths and industry trends/opportunities
                to make informed decisions about your professional journey.
              </p>
            </div>

            <div className="service-box">
              <div className="img">
                <img src={mentoring} alt="mentor icon" />
              </div>
              <h3 className="service-heading">Mentorship Program</h3>
              <p className="service-description">
                Expert mentors offer support and insights to help students excel
                through the university entrance exam preparation journey.
              </p>
            </div>
            <div className="service-box">
              <div className="img">
                <img src={online_tutoring} alt="online tutoring icon" />
              </div>
              <h3 className="service-heading">Online tutoring</h3>
              <p className="service-description">
                Virtual Tutoring Sessions Engage in interactive online tutoring
                sessions tailored to GCE preparation before the concours.
              </p>
            </div>
          </div>
          <h3 className="sub-header">After Concour</h3>

          <div className="services-container">
            <div className="service-box">
              <div className="img">
                <img src={mentoring} alt="mentor icon" />
              </div>
              <h3 className="service-heading">Mentorship Program</h3>
              <p className="service-description">
                Our Mentorship Program supports you after entering your chosen
                professional school. Our mentors provide guidance on school
                procedures, help you with subjects, and offer exam strategies
                for success. Gain confidence and excel in your academic journey
                with their expert support.
              </p>
            </div>
            <div className="service-box">
              <div className="img">
                <img src={leadership} alt="light" />
              </div>
              <h3 className="service-heading">Leadership Seminars</h3>
              <p className="service-description">
                ASEND organizes leadership programs designed to enhance your
                personal development and cultivate essential leadership skills.
                Develop self-awareness, effective communication, and
                decision-making abilities to excel in your future endeavors.
              </p>
            </div>
          </div>

          <h3 className="sub-header">IT Services</h3>

          <div className="services-container">
            <div className="service-box">
              <div className="img">
                <img src={web} alt="development icon" />
              </div>
              <h3 className="service-heading">Web and Mobile Development</h3>
              <p className="service-description">
                Transform your ideas into immersive web and mobile experiences.
                Our expert developers will create user-friendly and visually
                appealing websites and mobile applications tailored to your
                unique needs.
              </p>
            </div>
            <div className="service-box">
              <div className="img">
                <img src={design} alt="design icon" />
              </div>
              <h3 className="service-heading"> Flyer and Logo Design</h3>
              <p className="service-description">
                Make a lasting impression with captivating flyers and
                professional logos. Our skilled designers will bring your vision
                to life, creating eye-catching promotional materials and
                distinctive brand identities.
              </p>
            </div>
            <div className="service-box">
              <div className="img">
                <img src={data} alt="data analysis icon" />
              </div>
              <h3 className="service-heading">Data Analysis</h3>
              <p className="service-description">
                Unlock valuable insights from your data. Our data analysis
                specialists employ cutting-edge techniques to analyze and
                interpret data, empowering you to make informed decisions and
                gain a competitive edge.
              </p>
            </div>
            <div className="service-box">
              <div className="img">
                <img src={maintenance} alt="" computer maintenance icon />
              </div>
              <h3 className="service-heading">Computer Maintenance</h3>
              <p className="service-description">
                Keep your technology running smoothly with our comprehensive
                computer maintenance services. From hardware troubleshooting to
                software updates, our experts will ensure your devices are
                optimized for peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
