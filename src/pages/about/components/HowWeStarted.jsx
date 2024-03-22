import story from '../../../assets/img/how_we_started.jpg';

const HowWeStarted = () => {
  return (
    <section id="how-we-started">
      <div className="container">
        <div className="even-columns">
          <div className="text">
            <h2 className="header">How We Started</h2>
            <p>
              2014 was the birth year of ASEND. After the 2014 Cameroon General
              Certificate Examinations (CGCE), two childhood friends by name
              Baar David C. and Ngongang Cabrel from Diligent Bilingual Academy
              aimed at becoming future Engineers. At a time when Polytechnic
              Yaounde was the only renowned Engineering school in Cameroon, the
              then wonder kids search to no avail through South West and North
              West for a preparation to the Polytechnic Yaounde Entrance
              Examination. They traveled to Yaounde in search for a preparatory
              class for such a prestigious examination.
              <br />
              <br />
              After wondering in the town of Yaounde, they succeeded in getting
              enrolled in a preparatory class. It wasn’t an easy phase of life
              they came across, as they had to force themselves with the French
              language and French culture.
              <br />
              <br />
              After their preparation and examinations, they return back to
              their homeland Kumba. Then the National Entrance Examination into
              the medical schools were launched together with the Faculty of
              Engineering and Technology documents deposition. The love for
              Medicine made Dr. Cabrel register for FHS Buea while Engr. Baar
              David dropped his documents for FET. They both were successful and
              started their professional journey into the Medical and the
              Engineering world. <br />
              <br />
              In October 2014, they both thought it wise to come up with bridge
              between the South West students and these National Examinations so
              theirjunior ones won’t go through the stress they went through.
              Then the Association of Engineering and Medical Students (ASEND)
              was created in Kumba.
            </p>
          </div>
          <div className="img">
            <img src={story} alt="asend staffs together" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeStarted;
