import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import WhatWeOffer from './components/WhatWeOffer';
import FAQ from './components/FAQ';

const Home = () => {
  return (
    <div className="max-w-screen overflow-clip bg-white">
      <Navbar />
      <Hero />
      <Feature />
      <WhatWeDo />
      <WhoWeAre />
      <WhatWeOffer />
      <FAQ />
    </div>
  );
};

export default Home;
