import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyEmoFelix from './components/WhyEmoFelix';
import Signup from './components/Signup';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WhyEmoFelix />
      <Signup />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;