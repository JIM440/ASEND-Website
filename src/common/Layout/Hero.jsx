import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section class="hero">
      <div class="container">
        <h1>One Student One Professional School</h1>
        <p>
          We are aimed at bridging the gap between students and entrance into
          various professional schools in Cameroon.
        </p>
        <div class="btn-container">
          <Link to="about" class="btn btn-white">
            Learn More
          </Link>
          <a href="#contact" class="btn">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
