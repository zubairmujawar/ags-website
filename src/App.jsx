import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductBg from "./components/ProductBg";
import Products from "./components/Products";
import Projects from "./components/Projects";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <Products />
      <ProductBg />
      <Projects />
      <ProductsPage />
      <Footer />
    </div>
  );
}

export default App;
