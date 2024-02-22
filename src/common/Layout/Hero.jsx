import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
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
  );
};

export default Hero;
