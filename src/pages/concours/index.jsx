import { Outlet } from 'react-router-dom';
import staffs from '../../assets/img/hero/Staffs.jpg';
import UseScrollTop from '../../common/components/UseScrollTop';
const Concours = () => {
  const scrollToTop = UseScrollTop();

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
          <div className="concour-boxes">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Concours;
