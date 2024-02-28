import { useState } from 'react';
import { Link } from 'react-router-dom';
const faqs = [
  {
    question: 'When does classes begin?',
    answer:
      'Classes begin immediately after the GCE (General Certificate of Education) exams.',
  },
  {
    question: 'What subjects are taught?',
    answer:
      'For engineering, we cover a wide array of subjects including math, physics, and chemistry. For medicine, we cover biology, chemistry, physics, and general knowledge which includes French and English. For veterinary studies, the subjects include biology, chemistry, and plant biology.',
  },
  {
    question: 'What exams do you prepare students for?',
    answer:
      'We prepare students for all entrance exams in Cameroon, including those for professional schools in engineering, medicine, and veterinary studies.',
  },
  {
    question: 'Who is eligible to attend?',
    answer:
      'Any high school student is eligible to attend the ASEND prep class. It is open to students who are preparing to pursue professional studies in engineering, medicine, or veterinary sciences.',
  },
  {
    question: 'How do I enroll?',
    answer:
      'To enroll in the ASEND prep class, you can visit any of our centers listed below or contact any of the following numbers for further assistance. Our staff will guide you through the enrollment process and provide you with all the necessary information.',
  },
  {
    question: 'How long is the duration of the prep class?',
    answer:
      'The ASEND prep class is divided into two phases. Phase 1 lasts for 6 weeks, during which intensive instruction and foundational concepts are covered. Phase 2 lasts for 2 weeks and focuses on comprehensive review and exam strategies to ensure students are well-prepared for their entrance exams.',
  },
  {
    question: 'Do you provide study materials and resources?',
    answer:
      'Yes, upon registration and payment of fees, each student receives a textbook tailored to their chosen field of study. Additionally, students are provided with a free accompanying workbook that contains practice questions and exercises to reinforce learning. These study materials and resources are designed to support students throughout their preparation journey.',
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
              Reach out to us! We're Here to Help. Contact us for Personalized
              Assistance.
            </p>
            <a href="#contact" className="btn">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
