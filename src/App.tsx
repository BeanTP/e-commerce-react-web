import "./App.css";
import Navbar from "./components/Navbar";
import RecommendSignUp from "./components/RecommendSignUp";
import Hero from "./sections/Hero";
import LogoBrand from "./sections/LogoBrand";

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
      </div>
    </main>
  );
};

export default App;
