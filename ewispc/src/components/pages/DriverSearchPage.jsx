import { FaSearch, FaDesktop, FaLaptop, FaPrint, FaDownload } from 'react-icons/fa';
import { useState } from 'react';
import Header from "../../components/Header";

const DriverSearchPage = () => {
  const [activeTab, setActiveTab] = useState('serial');
  const tabs = [
    { id: 'serial', label: 'Search by Serial Number' },
    { id: 'manual', label: 'Manual Search' },
    // Add more tabs here as needed in the future
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#03613a] to-green-600 text-white py-20 md:py-32 overflow-hidden flex-grow">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest Drivers and Utilities</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
                Find and download the latest drivers for your devices.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8 mt-16">

        {/* Breadcrumbs */}
        {/* <nav className="flex mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li className="text-blue-600 hover:text-blue-800 cursor-pointer">Home</li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Drivers</li>
          </ol>
        </nav> */}

        {/* Dynamic Width Tabs */}
        <div className="w-full bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-blue-100 text-green-800' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Serial Search */}
          {activeTab === 'serial' && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Search by Serial Number</h2>
              <p className="text-gray-600 mb-4">
                Quickly find drivers by entering your device's serial number. Don't know your serial?{' '}
                <span className="text-green-600 hover:text-green-800 font-medium cursor-pointer">
                  Use our Detection Tool
                </span>
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Serial Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your serial number"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaSearch className="text-gray-400" />
                    </div>
                  </div>
                </div>
                <button className="mt-6 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700">
                  Search
                </button>
              </div>
            </div>
          )}

          {/* Manual Search */}
          {activeTab === 'manual' && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Manual Search</h2>
              <p className="text-gray-600 mb-6">Select your product details to find the appropriate drivers</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option>Select a category</option>
                    <option>Desktop</option>
                    <option>Laptop</option>
                    <option>Printer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Series</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option>Select a series</option>
                    <option>Consumer PC</option>
                    <option>Business PC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Model</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option>Select a model</option>
                    <option>PRO 3100</option>
                    <option>PRO 3200</option>
                  </select>
                </div>
              </div>

              <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700">
                Find Drivers
              </button>
            </div>
          )}

          {/* Quick Downloads Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Detection Tool', 'Network Driver', 'Audio Driver', 'BIOS Update'].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <FaDownload className="text-green-600 text-xl" />
                    </div>
                    <h3 className="font-medium text-gray-800">{item}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Latest version for all devices</p>
                  <button className="text-sm text-green-600 hover:text-green-800 font-medium">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSearchPage;