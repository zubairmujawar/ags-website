import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductBg from "./components/ProductBg";
import Products from "./components/Products";

function App() {
  

  return (
    <div className="w-full">
      <Navbar/>
      <HeroSection/>
      <Products/> 
      <ProductBg/>
    </div>
  );
}

export default App;
