import { Lato } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
