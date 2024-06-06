import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <div className='app overflow-hidden relative font-inter'>
      <div className=' absolute top-2 w-full z-50 '>
        <Header />
      </div>
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
