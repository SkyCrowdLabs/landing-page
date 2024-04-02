import Navbar from './Navbar';
import Hero from './Hero';
import Feature from './Feature';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';
import WhatWeOffer from './WhatWeOffer';
import GetInTouch from './GetInTouch';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="max-w-screen overflow-clip bg-white">
      <Hero />
      <Feature />
      <WhatWeDo />
      <WhoWeAre />
      <WhatWeOffer />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
