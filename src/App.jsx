import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app relative overflow-hidden font-inter">
      <div className="absolute top-2 z-50 w-full">
        <Header />
      </div>
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
