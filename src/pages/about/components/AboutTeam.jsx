import { Link } from 'react-router-dom';
// leaders images
import david from '../../../assets/img/team/david_baar.jpg';
import cabrel from '../../../assets/img/team/cabrel.jpg';
import sone from '../../../assets/img/team/sone.jpg';
import golda from '../../../assets/img/team/golda.jpg';
import yannick from '../../../assets/img/team/yannick.jpg';
import usman from '../../../assets/img/team/usman.jpg';
import lois from '../../../assets/img/team/Lois.jpg';
// team images
import salif from '../../../assets/img/team/salif.jpg';
import stephan from '../../../assets/img/team/steph.jpg';
import etien from '../../../assets/img/team/etien.jpg';
import santina from '../../../assets/img/team/santina.jpg';
import jim from '../../../assets/img/team/jim.jpg';
import TeamContainerAbout from './TeamContainerAbout';

const AboutTeam = () => {
  // leaders
  const leaders = [
    // {
    //   image: david,
    //   name: 'Engrr. David Baar',
    //   level: 'M.eng B.eng Telecommunications Engineering',
    //   position: 'Co-Founder | Board Member',
    //   LinkedInUrl: '',
    //   IgUrl: '',
    // },
    // {
    //   image: cabrel,
    //   name: 'Dr. Ngongang N. Cabrel',
    //   level: 'Doctor Of Medicine (MD)',
    //   position: 'Co-Founder | Board Member',
    //   LinkedInUrl: '',
    //   IgUrl: '',
    // },
    // {
    //   image: sone,
    //   name: 'Engr. Sone N. Epie',
    //   level: 'B.Tech Civil Engineering',
    //   position: 'Board Member',
    //   LinkedInUrl: '',
    //   IgUrl: '',
    // },
    // {
    //   image: golda,
    //   name: 'Engr. Acha Golda Angwe',
    //   level: 'B.eng Electrical Power Systems Engineering',
    //   position: 'General Coordinator',
    //   LinkedInUrl: '',
    //   IgUrl: '',
    // },
    // {
    //   image: yannick,
    //   name: 'Mombong Yannick Bebang',
    //   level: '6th Year Medicine Student',
    //   position: 'Vice General Coordinator',
    //   LinkedInUrl: '',
    //   IgUrl: '',
    // },
    {
      image: usman,
      name: 'Engr. Usmanu Chuka',
      level: 'B.eng Telecommunications Engineering',
      position: 'DAAS',
      LinkedInUrl: '',
      IgUrl: '',
    },
    // {
    //   image: lois,
    //   name: 'Nurse Bungwa Lois Nabila',
    //   level: 'Bachelor Of Nursing Science',
    //   position: 'Secretary General',
    //   LinkedInUrl: '',
    //   IgUrl: '',
    // },
  ];
  // staffs
  const team = [
    {
      image: salif,
      name: 'Engr. Njidda Salifu',
      level: 'Final Year Software Engineerng Student - FET Buea',
      position: 'Engineering Coordinator- Buea',
      LinkedInUrl: 'linkedin.com',
      IgUrl: 'instagram.com',
    },
    {
      image: stephan,
      name: 'Nurse Kongchi Stephae',
      level: 'Bachelors Of Nursing Sceince',
      position: 'Medicine Coordinator - Kumba',
      LinkedInUrl: 'linkedin.com',
      IgUrl: 'instagram.com',
    },
    {
      image: etien,
      name: 'Etiendem Betrand',
      level: '4th Year Medicine Student - FHS Buea',
      position: 'Assistant Medicine Coordinator - Kumba',
      LinkedInUrl: 'linkedin.com',
      IgUrl: 'instagram.com',
    },
    // {
    //   image: jim,
    //   name: 'Takem Jim',
    //   level: 'B.eng Computer Engineering',
    //   position: 'Engineering Coordnator - Kumba',
    //   LinkedInUrl: 'linkedin.com',
    //   IgUrl: 'instagram.com',
    // },
    {
      image: santina,
      name: 'Engr. Santina Ejeck',
      level: 'B.Tech Mechanical Engineering',
      position: 'Engineering Tutor',
      LinkedInUrl: 'linkedin.com',
      IgUrl: 'instagram.com',
    },
  ];

  return (
    <section className="team teamAbout">
      <div className="container">
        <h2 className="header header-leadershipt">Meet Our Leadership</h2>
        <p className="header-description">
          Get to Know Our Visionary Leadership
        </p>
        <TeamContainerAbout staffs={leaders} />
        <div className="mw container bg-blue">
          <div className="mw">
            <p>
              Join us in making an impact today! Be a part of our team and help
              students achieve their dreams of getting into their desired
              professional school.
            </p>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSdquWN9INvQR4guv6cdP-_tZbeHP3ZZsp33po3Uk0GlGaqhGw/viewform?usp=sf_link"
              target="_blank"
              aria-label="link to join our team google form"
              className="btn"
            >
              Join Our Team
            </Link>
          </div>
        </div>
        <h2 className="header teamH">Meet Our Team</h2>
        <p className="header-description">
          Collaborating to Empower Students for Academic Excellence
        </p>
        <TeamContainerAbout staffs={team} />
      </div>
    </section>
  );
};

export default AboutTeam;
