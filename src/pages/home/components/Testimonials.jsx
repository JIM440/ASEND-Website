import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image:
        'https://media.gettyimages.com/id/1257207393/de/foto/single-male-college-student-blick-auf-kamera-f%C3%BCr-close-up-portrait.jpg?s=612x612&w=gi&k=20&c=X8mLl7x6uXmcs6fE5ayNcUVHKjwfz4CTbSr1z0KFezE=',
      content:
        "I absolutely love this product! It has made a significant difference in my life and I can't recommend it enough. The quality is top-notch and the results are amazing. Thank you!",
    },
    {
      name: 'Jane Smith',
      image:
        'https://media.gettyimages.com/id/681887813/photo/close-up-portrait-of-boy-standing-in-classroom.jpg?s=612x612&w=gi&k=20&c=np7t5eZndwuf2WtU8Kl4SFerjdtEuGqmw_Pt0_eFLVs=',
      content:
        "This product exceeded my expectations! The innovative features and user-friendly design have made it a game-changer for me. I'm so glad I found it and now I can't imagine my life without it.",
    },
    {
      name: 'David Johnson',
      image:
        'https://media.gettyimages.com/id/1438427420/de/foto/close-up-portrait-of-cheerful-young-black-hispanic-latin-teenager-man-smiling-at-camera-over.jpg?s=612x612&w=gi&k=20&c=DojZ5b8vxqyxaKpMkvsybvaj_luzibF1yXy_aCryQRk=',
      content:
        "I was skeptical at first, but this product has proven to be worth every penny. It has simplified my daily routine and the results have been remarkable. I've recommended it to all my friends and family.",
    },
  ];
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="header">Testimonials</h2>
        <p className="header-description">What Our Students Say ABout Us</p>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-box" key={index}>
              <img src={testimonial.image} alt="" />
              <h3 className="name">{testimonial.name}</h3>
              <p className="content">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
