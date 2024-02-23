import { useState } from 'react';
import { Link } from 'react-router-dom';
const faqs = [
  {
    question: 'sample partner questions',
    answer: 'sample partner answer',
  },
  {
    question: 'sample partner questions',
    answer: 'sample partner answer',
  },
  {
    question: 'sample partner questions',
    answer: 'sample partner answer',
  },
  {
    question: 'sample partner questions',
    answer: 'sample partner answer',
  },
  {
    question: 'sample partner questions',
    answer: 'sample partner answer',
  },
];
const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const toggleDisplay = (i) => {
    setSelected(i === selected ? null : i);
  };
  return (
    <section className="faqs">
      <div className="container">
        <h2 className="header">Frequently Asked Questions</h2>
        <p className="header-description">
          Explore Our Frequently Asked Questions
        </p>

        <div className="faqs-container">
          {faqs ? (
            faqs.map((faq, index) => (
              <div
                className="faq"
                key={index}
                onClick={() => {
                  toggleDisplay(index);
                }}
              >
                <div
                  className={`question ${index === selected ? ' active' : ''}`}
                >
                  <p>{faq.question}</p>
                  <i className="bx bxs-chevron-down"></i>
                </div>

                <p className={`answer ${index === selected ? ' active' : ''}`}>
                  {faq.answer}
                </p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
          <div className="mw">
            <h3>Still have questions?</h3>
            <p>
              Reac h out to us! We're Here to Help. Contact Our Support Team for
              Personalized Assistance.
            </p>
            <Link to="" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
