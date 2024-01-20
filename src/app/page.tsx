import { Lato } from 'next/font/google';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import WhatWeDo from './components/WhatWeDo';

const Home = () => {
  return (
    <div className="max-w-screen overflow-clip bg-white">
      <Navbar />
      <Hero />
      <Feature />
      <WhatWeDo />
    </div>
  );
};

export default Home;
