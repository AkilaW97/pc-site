import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Home/Hero';
import QualitySection from './components/Home/QualitySection';
import WhyChooseUs from './components/Home/WhyChooseUs';
import NewsletterSignup from './components/Home/NewsletterSignup';
import ClientCarousel from './components/Home/ClientCarousel';
import Footer from './components/Footer';
import HomeElectronics from './components/pages/HomeSolutions/HomeSolutions';
import WorkElectronics from './components/pages/WorkSolutions/WorkSolutions';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import DriverSearchPage from './components/pages/DriverSearchPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            {/* Main Home Page */}
            <Route path="/" element={
              <>
                <Hero />
                <WhyChooseUs />
                <QualitySection />
                <NewsletterSignup />
                <ClientCarousel />
              </>
            } />

            {/* About Us Page */}
            <Route path="/about" element={<AboutUs />} />

            {/* Contact Us Page */}
            <Route path="/contact" element={<ContactUs />} />

            {/* DriverDownload Page */}
            <Route path="/support" element={<DriverSearchPage />} />

            {/* Home Solutions Category Pages */}
            <Route path="/home/Home-solutions" element={<HomeElectronics />} />
            
            {/* Work Solutions Category Pages */}
            <Route path="/work/Work-solutions" element={<WorkElectronics />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;