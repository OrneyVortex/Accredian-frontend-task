
import React from 'react';

import Header from './components/header';
import HeroSection from './components/HeroSection';
import HowToRefer from './components/HowToRefer';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowToRefer />
      <ReferralBenefits />
      <FAQ />
      <Banner/>
      <Footer />
      <Modal/>
    </div>
  );
}

export default App;
