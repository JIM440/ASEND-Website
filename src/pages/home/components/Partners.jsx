import React from 'react';
import chitechma from '../../../assets/img/partners/chitechma_university.png';
import mountain from '../../../assets/img/partners/mountain_university.png';

const Partners = () => {
  return (
    <section className="partners">
      <h2 className="header">Partners</h2>
      <p className="header-description">Meet Our Trusted Partners</p>
      <div className="partners-container">
        <div className="partner-icons">
          <a
            href="https://www.chitechma.com"
            aria-label="link to chitechma university"
            rel="noreferrer"
            target="_blank"
          >
            <img src={chitechma} alt="logo of university" />
          </a>
          <a
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiyi8uYms6EAxW1hv0HHf1FBbYQFnoECBUQAQ&url=https%3A%2F%2Fwww.facebook.com%2Fmhisscmr%2F&usg=AOvVaw35eqLKSzoa1zlPfUis10nF&opi=89978449"
            rel="noreferrer"
            aria-label="link to mountain university"
            target="_blank"
          >
            <img src={mountain} alt="logo of university" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
