import { useState, useEffect } from 'react';
import './App.css';
import MouseFollower from './components/MouseFollower';
import FloatingMenu from './components/FloatingMenu';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InteractiveCards from './components/InteractiveCards';
import Expertise from './components/Expertise';
import ExamPreparation from './components/ExamPreparation';
import Training from './components/Training';
import Career from './components/Career';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Initiatives from './components/Initiatives';
import Publications from './components/Publications';
import Gallery from './components/Gallery';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="emblem"></div>
          <p>Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <MouseFollower />
      <FloatingMenu />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <InteractiveCards />
      <Expertise />
      <ExamPreparation />
      <Training />
      <Career />
      <Achievements />
      <Services />
      <Initiatives />
      <Publications />
      <Statistics />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
