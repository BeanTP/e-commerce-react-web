import "./App.css";
import Navbar from "./components/Navbar";
import RecommendSignUp from "./components/RecommendSignUp";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main>
      <header>
        <RecommendSignUp />
        <Navbar />
      </header>
      
      <div className="content">
        <Hero />
      </div>
    </main>
  );
};

export default App;
