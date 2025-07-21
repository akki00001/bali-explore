import React from 'react';
import HeroSlider from './components/HeroSlider';
import PromoBanner from './components/PromoBanner';
import HandpickedToursSection from './components/HandpickedToursSection';
import BestDealsSlider from './components/BestDealsSlider';
import HoneymoonSpecialSlider from './components/HoneymoonSpecialSlider';
import FamilyToursSlider from './components/FamilyToursSlider';
import './index.css';

const App: React.FC = () => {
  return (
    <main className="font-sans text-gray-900 scroll-smooth">
      <HeroSlider />
      <PromoBanner />
      <HandpickedToursSection />
      <BestDealsSlider />
      <HoneymoonSpecialSlider />
      <FamilyToursSlider />
    </main>
  );
};

export default App;
