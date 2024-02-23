import staffs2 from '../../img/Staffs.jpg';
// services images
import { Link } from 'react-router-dom';
import Faqs from './components/Faqs';
import Partners from './components/Partners';
import RecentActivities from './components/RecentActivities';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Stats from './components/Stats';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div
          className="container"
          style={{
            backgroundImage: `${staffs2}`,
          }}
        >
          <h1>One Student One Professional School</h1>
          <p>
            We are aimed at bridging the gap between students and entrance into
            various professional schools in Cameroon.
          </p>
          <div className="btn-container">
            <Link to="about" className="btn btn-white">
              Learn More
            </Link>
            <a href="#contact" className="btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <AboutUs />
      <Services />
      <Stats />
      <Team />
      <Testimonials />
      <RecentActivities />
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
      <Faqs />
      <Partners />
    </>
  );
};

export default Home;
