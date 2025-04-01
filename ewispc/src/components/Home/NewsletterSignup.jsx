import { useState, useEffect, useRef } from 'react';
import backgroundVideo from '../../assets/newsletter.mp4';
import { FiAward, FiUsers, FiClock, FiPackage } from 'react-icons/fi';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const countersRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter-number');
          const speed = 200;
          
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = Math.floor(speed / target);
            let start = 0;
            
            const updateCounter = () => {
              const increment = target / speed;
              start += increment;
              if (start < target) {
                counter.textContent = Math.ceil(start);
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target;
              }
            };
            
            updateCounter();
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden bg-white py-8 px-4">
        <div className="max-w-md mx-auto text-center mb-6">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 ">Get Updates</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Desktop Version - Now with proper vertical centering */}
      <section className="hidden md:block relative overflow-hidden text-white min-h-[70vh] mt-15">
        {/* Video Background - full viewport height */}
        <div className="absolute inset-0 -z-10 h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Centered Content Container */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center py-12">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Form container */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-md w-full">
                <h3 className="text-2xl font-bold mb-6">Join our Newsletter</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Your e-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 mt-4"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Right content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
              <div className="w-full max-w-2xl" ref={countersRef}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Sign up for the Newsletter</h2>
                <p className="text-xl mb-8">Subscribe to get the top-notch practical tips</p>
                <div className="counter-section bg-transparent rounded-lg p-4">
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="text-center p-4 min-w-[150px]">
                      <div className="flex justify-center mb-2">
                        <FiPackage className="text-3xl text-blue-400" />
                      </div>
                      <p className="counter-number text-4xl font-bold mb-2" data-target="20">0</p>
                      <p className="text-white/80">Categories</p>
                    </div>
                    <div className="text-center p-4 min-w-[150px]">
                      <div className="flex justify-center mb-2">
                        <FiUsers className="text-3xl text-blue-400" />
                      </div>
                      <p className="counter-number text-4xl font-bold mb-2" data-target="55">0</p>
                      <p className="text-white/80">Cooperate clients</p>
                    </div>
                    <div className="text-center p-4 min-w-[150px]">
                      <div className="flex justify-center mb-2">
                        <FiClock className="text-3xl text-blue-400" />
                      </div>
                      <p className="counter-number text-4xl font-bold mb-2" data-target="35">0</p>
                      <p className="text-white/80">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;