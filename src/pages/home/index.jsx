import staffs2 from '../../assets/img/hero/Staffs3.jpg';
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
import UseScrollTop from '../../common/components/UseScrollTop';

const Home = () => {
  const scrollToTop = UseScrollTop();
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
            <Link to="#contact" className="btn">
              Contact Us
            </Link>
            <Link to="about" className="btn btn-white">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <AboutUs />
      <Services />
      <Stats />
      <Team />
      <Testimonials />
      <RecentActivities />
      <Faqs />
      <Partners />
    </>
  );
};

export default Home;
