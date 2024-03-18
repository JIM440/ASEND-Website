import React from 'react';
import Testimonials from '../home/components/Testimonials';
import RecentActivities from '../../common/components/RecentActivities';
import UseScrollTop from '../../common/components/UseScrollTop';
import mtn from '../../assets/img/mtn-logo.png';
import orange from '../../assets/img/orange-money.jpg';

const Support = () => {
  const scrollToTop = UseScrollTop();

  return (
    <>
      {/*hero */}
      <section className="hero">
        <div className="container">
          <h1
            style={{
              textAlign: 'center',
              fontSize: '48px',
            }}
          >
            Support Us
          </h1>
        </div>
      </section>
      {/*  */}
      <section className="support-bg">
        <div className="container bg-blue ">
          <h2 className="header">Support</h2>
          {/* include here the be an impact text, say here how they can help someone by paying tuition or sponsor an activity e.g. world engineering day */}
          <h3>Support Us</h3>
          <br />

          <p>
            At ASEND, we are on a mission to empower Cameroonians by preparing
            them for entrance exams into professional schools and shaping the
            next generation of leaders.
          </p>
          <br />
          <br />

          <h3>Our Impact:</h3>
          <br />
          <p>
            With a proud legacy of success, ASEND has helped over 4000 students
            secure admission into prestigious professional schools in Cameroon.
            Our commitment to excellence and individualized support has
            transformed countless lives and opened doors to brighter futures.
          </p>
          <br />
          <br />

          <h3>How You Can Support:</h3>
          <br />
          <p>
            - <span className="bold">Pay It Forward:</span> Your contribution
            can be the key to unlocking a world of opportunities for aspiring
            students. By supporting us, you are investing in providing access to
            quality education, guidance, and the possibility for students to
            achieve their dreams of studying in their ideal school.
          </p>
          <br />
          <br />

          <p>
            - <span className="bold">Sponsor an Activity:</span> Through
            sponsoring events like World Engineering Day or funding special
            programs, you are directly impacting the educational journey of
            students and shaping their future in profound ways.
          </p>
          <br />
          <br />

          <p>
            Join us in our commitment to nurturing talent, fostering growth, and
            creating a brighter tomorrow for the leaders of Cameroon. Together,
            we can make a difference that resonates far beyond the classroom
            walls. Support us using one of the methods below!
          </p>
          <br />
          <br />
        </div>
      </section>
      <section className="mw donate-options">
        <div className="donate-options-container">
          <div className="donate-options-box">
            <div className="img">
              <img src={mtn} alt="" />
            </div>
            <h3>Mobile Money</h3>
            <p>678 545 2542</p>
          </div>
          <div className="donate-options-box">
            <div className="img">
              <img src={orange} alt="" />
            </div>
            <h3>Orange Money</h3>
            <p>678 545 2542</p>
          </div>
        </div>
      </section>
      {/* recent activities */}
      <RecentActivities
        title="Recent Activities"
        description="Be a part Our Impact - Sponsor an activity"
      />
      {/* testimonials */}
      <Testimonials />
    </>
  );
};

export default Support;
