import Navbar from '../components/sections/navbar';
import Footer from '../components/sections/footer';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const AbgPage = () => {
  const navigate = useNavigate();

  // Dummy handlers to pass to Navbar/Footer, all route to home
  const goHome = () => navigate('/');
  const noop = () => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navbar with all buttons routing to home */}
      <Navbar
        activeSection={''}
        scrollToSection={goHome}
        handlePriceListSectionClick={goHome}
        activePriceList={'schlieren'}
        handlePriceListClick={goHome}
      />
      <div className="pt-24 pb-16 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-4 text-pink-700">ABG Page</h1>
        <p className="text-lg text-gray-700 mb-8">Coming soon!!</p>
        <button
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold shadow-md hover:scale-105 transition-all"
          onClick={goHome}
        >
          Go to Home
        </button>
      </div>
      {/* Footer with all buttons routing to home */}
      <Footer scrollToSection={goHome} />
    </div>
  );
};

export default AbgPage;
