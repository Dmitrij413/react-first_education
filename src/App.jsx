import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import './styles/main.css'

function App() {
  return (
    <div className="App">
      <Navigation />
			<Hero />
			<About />
			<Skills />
			<Portfolio />
			<Footer />
    </div>
  );
}

export default App;
