// src/pages/LaptopNotebook.jsx
import Header from "./Header";
import Footer from "./Footer"; 

const LaptopNotebook = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Laptop & Notebook</h1>
        
        {/* Home Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Home</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Listed & Notebook</li>
          </ul>
          
          <hr className="my-6 border-gray-200" />
        </section>
        
        {/* Prototype Details Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Prototype Details</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">DNS XSISU-V.21</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">DNS XSISU-V.1</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Notebook XISAL</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Empty row - you would populate this with actual data */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <hr className="my-6 border-gray-200" />
        </section>
        
        {/* XSISU Notebook Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">XSISU Notebook</h2>
          {/* Content would go here */}
          <hr className="my-6 border-gray-200" />
        </section>
        
        {/* Shop for Products Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shop for Products</h2>
          
          <div className="space-y-2">
            <p className="font-medium text-gray-600">Support</p>
            <p className="font-medium text-gray-600">DNS Company</p>
            <p className="font-medium text-gray-600">Contact us</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LaptopNotebook;