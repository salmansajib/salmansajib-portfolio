import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className='app overflow-hidden relative'>
      <div className=' absolute top-2 w-full z-20 '>
        <Header />
      </div>
      <Hero />
      <About />
    </div>
  );
}

export default App;
