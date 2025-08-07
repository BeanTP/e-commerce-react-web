import "./App.css";
import Navbar from "./components/Navbar";
import RecommendSignUp from "./components/RecommendSignUp";
import Hero from "./sections/Hero";
import LogoBrand from "./sections/LogoBrand";
import NewArrivals from "./sections/NewArrivals";

const App = () => {
  return (
    <main>
      <header>
        <RecommendSignUp />
        <Navbar />
      </header>
      
      <div className="content">
        <Hero />
        <LogoBrand />
        <NewArrivals />
      </div>
    </main>
  );
};

export default App;
