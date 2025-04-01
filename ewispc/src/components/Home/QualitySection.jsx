import { useEffect, useState, useRef } from 'react';
import heroImage from '/src/assets/Laptop3.png';

const ProductCard = ({ productName, description, imageUrl }) => {
  return (
    <div className="relative group">
      <div className="relative w-full h-[450px] bg-[#232323] rounded-2xl overflow-hidden mx-auto">
        {/* Background circle */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#03613a] opacity-10 transition-all duration-500 ease-in-out group-hover:opacity-100" />
        
        {/* Brand watermark */}
        <div className="absolute top-[30%] -left-[20%] text-[12em] font-extrabold italic text-white/5">
          Premium
        </div>
        
        {/* Product image */}
        <div className="absolute top-1/2 -translate-y-1/2 z-10 w-full h-56 transition-all duration-500 group-hover:top-0 group-hover:translate-y-0">
          <img
            src={imageUrl}
            alt={productName}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] object-contain"
          />
        </div>
        
        {/* Product details */}
        <div className="absolute bottom-0 w-full h-24 text-center transition-all duration-500 z-20 group-hover:h-52">
          <div className="group-hover:hidden">
            <h2 className="font-semibold tracking-[1px] text-white text-lg">
              {productName}
            </h2>
          </div>
          <div className="hidden group-hover:block pt-4">
            <h2 className="font-semibold tracking-[1px] text-white text-lg">
              {productName}
            </h2>
            <p className="text-white/70 text-sm mt-1">{description}</p>
            <button className="inline-block py-2 px-6 bg-white rounded mt-3 font-semibold text-[#232323] text-sm transition-colors duration-200 hover:bg-[#9bdc28]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const QualitySection = () => {
  const products = [
    { name: "UltraBook Pro", description: "16GB RAM, 1TB SSD", image: heroImage },
    { name: "Quantum 4K TV", description: "65-inch Smart TV", image: heroImage },
    { name: "SmartBoard Pro", description: "86-inch touch display", image: heroImage },
    { name: "Blaze Gaming PC", description: "RTX 4080, 32GB RAM", image: heroImage },
    { name: "Swift Laptop Air", description: "13.3-inch, 8GB RAM", image: heroImage },
    { name: "Neon Gaming Monitor", description: "240Hz, 1ms Response", image: heroImage },
    { name: "Thunderbolt Dock", description: "4K Dual Display", image: heroImage },
    { name: "Crystal Soundbar", description: "Dolby Atmos, 300W", image: heroImage },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Duplicate items for seamless looping
  const duplicatedProducts = [...products, ...products];

  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Auto-scroll with smooth looping
  useEffect(() => {
    if (isMobile) return;

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovering) {
          setCurrentIndex((prev) => (prev + 1) % products.length);
        }
      }, 3000);
    };

    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [products.length, isHovering, isMobile]);

  // Smooth scroll effect
  useEffect(() => {
    if (isMobile || !carouselRef.current) return;

    const item = carouselRef.current.children[0];
    if (!item) return;

    const itemWidth = item.offsetWidth;
    const gap = 32; // gap-8 = 32px
    const scrollAmount = currentIndex * (itemWidth + gap);

    // Reset to start if at the end (for seamless loop)
    if (currentIndex >= products.length) {
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(0)`;
      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.7s ease';
        setCurrentIndex(0);
      }, 10);
    } else {
      carouselRef.current.style.transition = 'transform 0.7s cubic-bezier(0.33, 1, 0.68, 1)';
      carouselRef.current.style.transform = `translateX(-${scrollAmount}px)`;
    }
  }, [currentIndex, isMobile]);

  if (isMobile) return null;

  return (
    <section className="py-15 bg-white hidden md:block mt-8">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Engineered with Premium Components
          </h2>
        </div>

        <div className="relative mb-8">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div 
              ref={carouselRef}
              className="flex whitespace-nowrap gap-8 px-4"
              style={{ willChange: 'transform' }}
            >
              {duplicatedProducts.map((product, index) => (
                <div 
                  key={index}
                  className="inline-block flex-shrink-0"
                  style={{ width: 'calc(25% - 24px)' }} // 4 cards at 25% each
                >
                  <ProductCard
                    productName={product.name}
                    description={product.description}
                    imageUrl={product.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="/products" 
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-md font-medium transition"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;