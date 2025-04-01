import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import all brand logos
import intelLogo from '/src/assets/brand/intel.png';
import konicaLogo from '/src/assets/brand/konica.png';
import lexmarkLogo from '/src/assets/brand/lexmark.png';
import microsoftLogo from '/src/assets/brand/Microsoft.png';
import octaLogo from '/src/assets/brand/octa.png';
import pantumLogo from '/src/assets/brand/pantum.png';

const ClientCarousel = () => {
  // Client data with imported images
  const clients = [
    { id: 1, name: 'Intel', logo: intelLogo },
    { id: 2, name: 'Konica', logo: konicaLogo },
    { id: 3, name: 'Lexmark', logo: lexmarkLogo },
    { id: 4, name: 'Microsoft', logo: microsoftLogo },
    { id: 5, name: 'Octa', logo: octaLogo },
    { id: 6, name: 'Pantum', logo: pantumLogo },
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="client py-16 hidden md:block mt-4">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Partners
            </h2>
              {/* <div className="after absolute left-0 right-0 mx-auto h-1 w-20 bg-[#03613a]"></div> */}
          </div>

          <div className="carousel-client">
            <Slider {...settings}>
              {clients.map((client) => (
                <div key={client.id} className="slide px-2">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="mx-auto h-auto max-w-full object-contain"
                    style={{ height: '80px' }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;