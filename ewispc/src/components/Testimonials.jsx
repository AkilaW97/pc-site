const Testimonials = () => {
    const testimonials = [
      {
        quote: "The UltralBook Pro exceeded all my expectations. The performance is incredible and the customer service was exceptional.",
        author: "Sarah Johnson",
        role: "Graphic Designer",
      },
      {
        quote: "Our school replaced all our whiteboards with Interactive SmartBoards from TechNova, and it's transformed our teaching experience.",
        author: "Michael Chen",
        role: "School Principal",
      },
      {
        quote: "Fast shipping and the Quantum Smart TV was perfectly packaged. The picture quality is stunning!",
        author: "Emma Rodriguez",
        role: "Home Theater Enthusiast",
      },
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our customers say about our products and services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  