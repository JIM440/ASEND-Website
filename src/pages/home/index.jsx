import staffs2 from '../../assets/img/hero/Staffs3.jpg';
// services images
import { Link } from 'react-router-dom';
import Faqs from './components/Faqs';
import Partners from './components/Partners';
import RecentActivities from '../../common/components/RecentActivities';
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
      <section className="hero hero-home">
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
            <a
              href="#contact"
              className="btn"
              aria-label="link to contact form"
            >
              Contact Us
            </a>
            <Link
              to="about"
              aria-label="link to asend about us page"
              className="btn btn-white"
            >
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
      <RecentActivities
        title="Recent Activities"
        description="Check Out Our Recent Activities"
      />
      <Faqs />
      <Partners />
    </>
  );
};

export default Home;
