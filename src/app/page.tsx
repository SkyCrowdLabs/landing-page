import { Lato } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Feature />
    </div>
  );
};

export default Home;
