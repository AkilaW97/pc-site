// File: src/components/Hero.jsx
import { useState, useEffect, useRef } from 'react';
import { FiGrid, FiHeart, FiGift, FiHome, FiBriefcase, FiSettings, FiLifeBuoy } from 'react-icons/fi';
import { FaShippingFast, FaShoppingCart, FaHeadset, FaExchangeAlt } from 'react-icons/fa';
import { FireIcon, DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import laptopVideo from '../../assets/laptop.mp4';
import ewisLogo from '../../assets/ewis-green-logo.png';
import smartTV from '../../assets/SmartTv.webp';
import miniPC from '../../assets/miniPC.webp'; 
import laptop from '../../assets/Laptop4.webp'; 
import Navigation from "../Navigation";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "OCTA Smart TV",
      description: "75\" UHD 4K",
      image: smartTV
    },
    {
      id: 2,
      name: "OCTA MiniPC",
      description: "NAL21-V2.0",
      image: miniPC
    },
    {
      id: 3,
      name: "Ultra Slim Laptop",
      description: "16GB RAM | 1TB SSD",
      image: laptop
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setCurrentSlide(prev => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
    }
    if (touchStart - touchEnd < -50) {
      setCurrentSlide(prev => (prev === 0 ? featuredProducts.length - 1 : prev - 1));
    }
  };

  if (isMobile) {
    return (
      <section className="bg-white text-black min-h-screen relative overflow-hidden">
        {/* Header with Logo and Navigation */}
        <header className="p-4 border-b border-gray-200 flex items-center justify-between">
          <img src={ewisLogo} alt="EWIS Logo" className="h-8 object-contain" />
          <Navigation mobileView />
        </header>

        {/* Featured Product Slider */}
        <div className="relative p-4">
          <div 
            className="bg-gray-100 rounded-lg p-4 overflow-hidden"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-64">
              {featuredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className={`absolute inset-0 transition-opacity duration-300 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <div className="text-lg font-semibold mb-2">{product.name}</div>
                  <div className="text-xl font-bold text-green-600">{product.description}</div>
                  <div className="h-40 mt-2 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Categories with Icons */}
        <div className="p-4 border-t border-gray-200 mt-5">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <FiHome className="w-6 h-6 text-gray-700" />
              </div>
              <span className="text-xs">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <FiBriefcase className="w-6 h-6 text-gray-700" />
              </div>
              <span className="text-xs">Work</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <FiSettings className="w-6 h-6 text-gray-700" />
              </div>
              <span className="text-xs">Software</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <FiLifeBuoy className="w-6 h-6 text-gray-700" />
              </div>
              <span className="text-xs">Support</span>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="p-6 bg-gradient-to-br from-gray-50 to-white mt-5">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
            <p className="text-gray-500 text-sm">We're committed to excellence</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Fast Shipping",
                description: "Quick delivery to your doorstep",
                icon: <FaShippingFast className="text-xl text-green-600" />,
                bg: "bg-green-50"
              },
              {
                title: "Easy Shopping",
                description: "Simple and secure checkout",
                icon: <FaShoppingCart className="text-xl text-blue-600" />,
                bg: "bg-blue-50"
              },
              {
                title: "24/7 Support",
                description: "Always here to help",
                icon: <FaHeadset className="text-xl text-purple-600" />,
                bg: "bg-purple-50"
              },
              {
                title: "Easy Returns",
                description: "Hassle-free return policy",
                icon: <FaExchangeAlt className="text-xl text-orange-600" />,
                bg: "bg-orange-50"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-xl ${feature.bg} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop view
  return (
    <section className="relative text-white h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={laptopVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

     {/* Navigation Bar - Fixed */}
      <nav className="relative z-[100] py-6 px-6 lg:px-8"> {/* Increased z-index */}
        <div className="mx-auto max-w-7xl flex justify-between items-center relative z-[100]">
          <div className="text-4xl font-bold font-sans z-[100]">E-WIS</div>
          <Navigation />
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-6xl font-bold mb-6">Premium Electronics</h1>
          <p className="text-xl md:text-2xl mb-8">
            Cutting-edge technology for modern living
          </p>
          <p className="text-lg mb-12 max-w-md mx-auto opacity-90 leading-relaxed">
            Discover our curated selection of laptops, smart TVs, and interactive displays designed to enhance your digital lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-md font-medium transition">
              Shop Now
            </button>
            <button className="border border-white hover:bg-blue-700 px-8 py-4 rounded-md font-medium transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;