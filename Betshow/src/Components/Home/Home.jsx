import { useState } from 'react';
import Background from '../Background/Background.jsx';
import Hero from "../Hero/Hero.jsx"

const MainPage = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  const heroData = [
    { text1: "Discover New Adventures", text2: "Start Your Journey Today" },
    { text1: "Explore the Unknown", text2: "Unravel the Mysteries" },
    { text1: "Embrace the Challenge", text2: "Achieve the Impossible" }
  ];

  return (
    <div className="main-page">
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        heroData={heroData[heroCount]} 
        heroCount={heroCount} 
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus} 
      />
    </div>
  );
};

export default MainPage;
