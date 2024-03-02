import React from 'react';
import Testimonials from '../home/components/Testimonials';
import RecentActivities from '../home/components/RecentActivities';

const Support = () => {
  return (
    <>
      {/*hero */}
      <section className="hero">
        <div className="container">
          <h1
            style={{
              textAlign: 'center',
              fontSize: '48px',
            }}
          >
            Support Us
          </h1>
        </div>
      </section>
      {/*  */}
      <section>
        <div className="container bg-blue">
          <h2 className="header">Support</h2>
          <p>
            {/* include here the be an impact text, say here how they can help someone by paying tuition or sponsor an activity e.g. world engineering day */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            totam in voluptatem corporis earum odit nobis, suscipit quod sed
            dignissimos illo voluptates nam error odio velit quibusdam facilis.
            Voluptas quidem optio, tenetur quia molestiae illo beatae, officiis
            aspernatur, commodi quae dignissimos veniam? Tempora id a, quisquam
            amet rerum minima iusto ab explicabo corporis esse optio
            perspiciatis at alias accusamus fugiat possimus nostrum modi. A est
            maiores impedit reiciendis obcaecati quaerat consequatur,
            exercitationem inventore corrupti molestiae quasi at quae, sequi,
            nemo error laboriosam qui fugiat voluptates quos odit distinctio
            tempore? Quasi soluta quos amet perspiciatis voluptas error dolorum
            fugiat asperiores exercitationem.
          </p>
        </div>
      </section>
      <section className="mw">
        <div className="donate-options-container">
          <div className="donate-options-box">
            <div className="img">
              <img src="" alt="" />
            </div>
            <h3>Momo</h3>
            <p>678 545 2542</p>
          </div>
          <div className="donate-options-box">
            <div className="img">
              <img src="" alt="" />
            </div>
            <h3>Momo</h3>
            <p>678 545 2542</p>
          </div>
          <div className="donate-options-box">
            <div className="img">
              <img src="" alt="" />
            </div>
            <h3>Momo</h3>
            <p>678 545 2542</p>
          </div>
        </div>
      </section>
      {/* recent activities */}
      <RecentActivities />
      {/* testimonials */}
      <Testimonials />
    </>
  );
};

export default Support;
