import staffs from '../../img/Staffs2.jpg';
import AboutTeam from './components/AboutTeam';
import HowWeStarted from './components/HowWeStarted';
import Mission from './components/Mission';

const About = () => {
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
            ABOUT ASEND
          </h1>
        </div>
      </section>

      <HowWeStarted />
      <Mission />
      <AboutTeam />
    </>
  );
};

export default About;
