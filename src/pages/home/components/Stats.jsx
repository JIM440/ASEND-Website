import map from '../../../assets/img/cameroom.png';
import team from '../../../assets/img/hands together.png';
import students from '../../../assets/img/students.png';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div>
          <img src={students} alt="" />
          <div className="text">
            <h2>
              <span data-val="4000" className="num">
                4000
              </span>
              +
            </h2>
            <span>Students Oriented</span>
          </div>
        </div>
        <div>
          <img src={map} alt="" />
          <div className="text">
            <h2>
              <span data-val="3" className="num">
                3
              </span>
            </h2>
            <span>Major cities in Cameroon</span>
          </div>
        </div>
        <div>
          <img className="team-icon" src={team} alt="" />
          <div className="text">
            <h2>
              <span data-val="100" className="num">
                100
              </span>
              +
            </h2>
            <span>Team Members</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
