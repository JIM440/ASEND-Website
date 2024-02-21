import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';
import Contact from '../components/Contact';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
};

export default RootLayout;
