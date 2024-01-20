import { Lato } from 'next/font/google';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';

const Home = () => {
  return (
    <div className="max-w-screen overflow-clip bg-white">
      <Navbar />
      <Hero />
      <Feature />
      <WhatWeDo />
      <WhoWeAre />
    </div>
  );
};

export default Home;
