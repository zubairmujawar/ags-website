import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  

  return (
    <div className="w-full">
      <Navbar/>
      <HeroSection/>
      <Products/>
      
    </div>
  );
}

export default App;
