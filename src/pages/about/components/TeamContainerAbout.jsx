import Linkedin from '../../../assets/icons/linkedin.png';
// import Instagram from '../../../assets/icons/ig.jpg';

const TeamContainerAbout = ({ staffs }) => {
  return (
    <>
      <div className="team-container team-container-about">
        {staffs
          ? staffs.map((staff, index) => (
              <div className="team-box" key={index}>
                <div className="img">
                  <img src={staff.image} alt="asend staff" />
                </div>
                <h3>{staff.name}</h3>
                <p className="title">{staff.level}</p>
                <div className="position-container">
                  <p
                    className="position"
                    style={{
                      textAlign: `${
                        staff.LinkedInUrl.length === 0 ? 'center' : 'left'
                      }`,
                    }}
                  >
                    {staff.position}
                  </p>
                  {staff.LinkedInUrl.length !== 0 && (
                    <div className="profile-links">
                      <a
                        href={staff.LinkedInUrl}
                        aria-label="link to staff linkedin page"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Linkedin} alt="LinkenIn Icon" />
                      </a>
                      {/* <a
                      href={staff.IgUrl}
                      aria-label="link to staff instagram page"
                    >
                      <img src={Instagram} alt="ig icon" />
                    </a> */}
                    </div>
                  )}
                </div>
              </div>
            ))
          : '<h1>Na Wahh Ohhh</h1>'}
      </div>
    </>
  );
};

export default TeamContainerAbout;
