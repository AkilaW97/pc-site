// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Home/Hero';
import QualitySection from './components/Home/QualitySection';
import WhyChooseUs from './components/Home/WhyChooseUs';
import NewsletterSignup from './components/Home/NewsletterSignup';
import ClientCarousel from './components/Home/ClientCarousel';
import Footer from './components/Footer';
import HomeSolutions from './components/HomeSolutions';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <WhyChooseUs />
                <QualitySection />
                <NewsletterSignup />
                <ClientCarousel />
              </>
            } />
            <Route path="/home-solutions" element={<HomeSolutions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;