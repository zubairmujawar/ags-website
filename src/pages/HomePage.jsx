import HeroSection from "../components/herosection/HeroSection";
import About from "../components/aboutsection/About";
import OurProducts from "../components/ourproduct/OurProducts";
import Projects from "../components/twosection/Projects";
import AboutText from "../components/aboutsection/AboutText";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurProducts />
      <AboutText />
      <About />
      <Projects />
    </>
  );
};

export default HomePage;
