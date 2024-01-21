import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Feature from './sections/Feature';
import WhatWeDo from './sections/WhatWeDo';
import WhoWeAre from './sections/WhoWeAre';
import WhatWeOffer from './sections/WhatWeOffer';
import FAQ from './sections/FAQ';

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
