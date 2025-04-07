import { useEffect, useRef, useState } from 'react';

const CircularCarousel = ({ items, renderItem }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const speed = 1000; // Animation duration (ms)
  const autoplayDelay = 3000; // Autoplay interval (ms)

  // Arrange dots evenly around the circle
  const arrangeDots = () => {
    const dots = carouselRef.current?.querySelectorAll('.pagination-item');
    if (!dots) return;

    dots.forEach((dot, i) => {
      dot.style.transform = `rotate(${(360 / dots.length) * i}deg)`;
    });
  };

  // Calculate absolute rotation based on the target index
  const calculateRotation = (targetIndex) => {
    return -1 * (360 / items.length) * targetIndex;
  };

  // Rotate the outer ring to the specified index
  const rotate = (newIndex) => {
    if (!carouselRef.current || items.length <= 1) return;
    
    const pagination = carouselRef.current.querySelector('.pagination');
    if (!pagination) return;

    const newRotation = calculateRotation(newIndex);
    setRotationAngle(newRotation);
  };

  // Change slide (syncs rotation + content)
  const setSlide = (index) => {
    if (items.length <= 1) return;
    
    const newIndex = (index + items.length) % items.length;
    if (newIndex === activeIndex) return;
    
    rotate(newIndex);
    setActiveIndex(newIndex);
  };

  // Autoplay control
  const startAutoplay = () => {
    stopAutoplay();
    if (items.length <= 1) return;
    
    autoPlayRef.current = setInterval(() => {
      setSlide(activeIndex + 1);
    }, autoplayDelay);
  };

  const stopAutoplay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        setSlide(activeIndex + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        setSlide(activeIndex - 1);
        break;
      default:
        break;
    }
  };

  // Initialize dots arrangement
  useEffect(() => {
    arrangeDots();
  }, [items]);

  // Handle autoplay
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [activeIndex, items]);

  // Add keyboard listeners
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [activeIndex]);

  // If no items or only one item, render simple content
  if (!items || items.length === 0) {
    return <div className="empty-carousel">No items to display</div>;
  }

  if (items.length === 1) {
    return (
      <div className="single-item-carousel">
        {renderItem(items[0], 0)}
      </div>
    );
  }

  return (
    <div 
      ref={carouselRef}
      className="relative mx-auto w-full max-w-lg aspect-square"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      tabIndex={0}
      role="region"
      aria-label="Circular carousel"
      aria-roledescription="carousel"
    >
      {/* Slides (Static Inner Content - No Rotation) */}
      <div className="slides absolute inset-0">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0'
            }`}
            role="tabpanel"
            id={`carousel-item-${index}`}
            aria-hidden={index !== activeIndex}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Outer Circle (Rotating Pagination Ring) */}
      <div 
        className="pagination absolute top-1/2 left-1/2 w-[90%] h-[90%] border-2 border-gray-300 rounded-full pointer-events-none"
        style={{ 
          transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`,
          transition: `transform ${speed}ms ease-in-out` 
        }}
        role="tablist"
      >
        {items.map((item, index) => (
          <div 
            key={index}
            className={`pagination-item absolute top-0 left-0 w-full h-full ${
              index === activeIndex ? 'active' : ''
            }`}
          >
            <button
              onClick={() => setSlide(index)}
              className={`dot absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-white text-gray-900 font-bold' 
                  : 'bg-green-500 text-white hover:bg-white hover:text-gray-900'
              }`}
              role="tab"
              id={`carousel-tab-${index}`}
              aria-selected={index === activeIndex}
              aria-controls={`carousel-item-${index}`}
              tabIndex={index === activeIndex ? 0 : -1}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        className="prev absolute left-5 bottom-6 z-20 text-xs uppercase tracking-widest hover:text-green-900 hover:font-bold transition-colors"
        onClick={() => setSlide(activeIndex - 1)}
        aria-label="Previous slide"
      >
        Prev
      </button>
      <button 
        className="next absolute right-5 bottom-6 z-20 text-xs uppercase tracking-widest hover:text-green-900 hover:font-bold transition-colors"
        onClick={() => setSlide(activeIndex + 1)}
        aria-label="Next slide"
      >
        Next
      </button>

      {/* Screen reader only status */}
      <div className="sr-only" aria-live="polite">
        Slide {activeIndex + 1} of {items.length}
      </div>
    </div>
  );
};

export default CircularCarousel;