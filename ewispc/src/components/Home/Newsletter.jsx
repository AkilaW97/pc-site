const Newsletter = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Tech Updates</h2>
            <p className="text-gray-600 mb-8">
              Stay informed about the latest product releases, tech tips, and exclusive offers.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Newsletter;