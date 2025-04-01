import { FaShippingFast, FaShoppingCart, FaHeadset, FaExchangeAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Fast & Free Shipping",
      description: "Experience Quick, Reliable Delivery Without Any Hidden Fees or Delays.",
      icon: <FaShippingFast className="text-4xl text-green-500" />
    },
    {
      title: "Easy to Shop",
      description: "Seamless Navigation, Quick Checkout, and a Hassle-Free Buying Process.",
      icon: <FaShoppingCart className="text-4xl text-green-500" />
    },
    {
      title: "24/7 Support",
      description: "Get Expert Help Anytime with Our Round-the-Clock Customer Service Team.",
      icon: <FaHeadset className="text-4xl text-green-500" />
    },
    {
      title: "Hassle Free Returns",
      description: "Return or Exchange Your Items Easily Without Any Complications or Stress.",
      icon: <FaExchangeAlt className="text-4xl text-green-500" />
    }
  ];

  return (
    <section className="hidden md:block py-5 bg-white mt-16"> {/* Added hidden md:block */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#03613a] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;