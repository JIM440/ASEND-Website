import { Outlet } from 'react-router-dom';
import staffs from '../../img/Staffs.jpg';

const Concours = () => {
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
            What We Prepare You For
          </h1>
        </div>
      </section>
      <section id="concour">
        <div className="container">
          {/* <h2 className="header">What We Prepare You For</h2> */}
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Concours;
