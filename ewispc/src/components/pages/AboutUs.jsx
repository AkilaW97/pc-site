import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import Ewisfactory from '../../assets/ewis.jpg';
import Boss from '../../assets/san.png';
import Madam from '../../assets/Manvir.jpg';
import He2 from '../../assets/male1.jpg';
import She2 from '../../assets/she1.jpg';
import CircularCarousel from '../../components/CircularCarousel';

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sanjeewa Wickramanayake',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech innovation and business strategy.',
      image: Boss
    },
    {
      id: 2,
      name: 'Sarah Wickramanayake',
      role: 'CTO',
      bio: 'Tech expert specializing in scalable solutions and cutting-edge development.',
      image: Madam
    },
    {
      id: 3,
      name: 'Michael Wickramanayake',
      role: 'Product Lead',
      bio: 'Passionate about creating user-centric products that solve real problems.',
      image: He2
    },
    {
      id: 4,
      name: 'Emily Wickramanayake',
      role: 'Customer Success',
      bio: 'Dedicated to ensuring our clients get the most value from our solutions.',
      image: She2
    }
  ];

  // Company milestones
  const milestones = [
    { 
      year: '2015', 
      event: 'Company Founded', 
      description: 'Started in a small garage with big dreams',
      bgColor: 'bg-green-600',
      textColor: 'text-gray-800'
    },
    { 
      year: '2017', 
      event: 'First Product Launch', 
      description: 'Released our flagship product to market',
      bgColor: 'bg-green-500',
      textColor: 'text-white'
    },
    { 
      year: '2019', 
      event: 'Series A Funding', 
      description: 'Secured $5M in funding to scale operations',
      bgColor: 'bg-green-600',
      textColor: 'text-gray-800'
    },
    { 
      year: '2021', 
      event: 'Global Expansion', 
      description: 'Opened offices in 3 new countries',
      bgColor: 'bg-green-500',
      textColor: 'text-white'
    },
    { 
      year: '2023', 
      event: '1M+ Users', 
      description: 'Reached over a million satisfied customers worldwide',
      bgColor: 'bg-green-600',
      textColor: 'text-gray-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#03613a] to-green-600 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Pioneering solutions that transform the way people live and work
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-green-950 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={Ewisfactory}
                  alt="Our office"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium">Our manufacturing arm in Hambanthota</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 text-justify">
                Since 1986, we've played a key role in shaping Sri Lanka's PC industry-first as the sole agent for IBM, 
                earning multiple Top Business Partner awards, and later partnering with HP to deliver high-end computers 
                and win top honors. In 2013, we revolutionized the local tech landscape by launching Sri Lanka's first and 
                only Original Device Manufacturing (ODM) plant in Sooriyawewa, Hambantota. As an independent IT provider, we 
                focus solely on customer satisfaction, offering tailored solutions through our team of expert consultants without 
                the pressure of international sales targets.
              </p>
              <p className="text-lg text-gray-600 mb-8 text-justify">
                As an independent IT service provider, we focus on delivering what matters most customer satisfaction. 
                Free from global sales targets, we provide tailored IT 
                solutions through a team of expert consultants dedicated to understanding and meeting business needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-600 mb-2 text-center">Our Vision</h3>
                  <p className="text-gray-700 text-center">At EWIS, we build lasting value through transparency, integrity, 
                    and strong relationships with all our stakeholders.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-600 mb-2 text-center">Our Values</h3>
                  <p className="text-gray-700 text-center">We understand client needs, empower our team, and deliver innovative 
                    solutions that enrich every life we touch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind our success, dedicated to delivering exceptional solutions
            </p>
          </div>
          
          <CircularCarousel 
            items={teamMembers}
            renderItem={(member) => (
              <div className="group bg-transparent rounded-xl overflow-hidden transition duration-300 w-64 mx-auto">
                <div className="relative h-64 flex items-center justify-center p-4">
                  <div className="relative w-48 h-48">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                </div>
              </div>
            )}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-500 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join our journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're looking for solutions or want to be part of our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="relative inline-block bg-white text-green-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              {/* Top border - animates first */}
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-out -mt-[1px] ml-[1px] mr-[1px]"></span>
             
              {/* Right border - animates second */}
              <span className="absolute top-0 right-0 w-0.5 h-0 bg-green-600 group-hover:h-full transition-all duration-300 ease-out delay-150 -mr-[1px] mt-[1px] mb-[1px]"></span>
             
              {/* Bottom border - animates third */}
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-out delay-300 -mb-[1px] ml-[1px] mr-[1px]"></span>
             
              {/* Left border - animates last */}
              <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-green-400 group-hover:h-full transition-all duration-300 ease-out delay-[450ms] -ml-[1px] mt-[1px] mb-[1px]"></span>
             
              Contact Us
            </Link>
            <Link
              to="/careers"
              className="relative inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              {/* Top border - animates first */}
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-out -mt-[1px] ml-[1px] mr-[1px]"></span>
             
              {/* Right border - animates second */}
              <span className="absolute top-0 right-0 w-0.5 h-0 bg-green-600 group-hover:h-full transition-all duration-300 ease-out delay-150 -mr-[1px] mt-[1px] mb-[1px]"></span>
             
              {/* Bottom border - animates third */}
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-out delay-300 -mb-[1px] ml-[1px] mr-[1px]"></span>
             
              {/* Left border - animates last */}
              <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-green-400 group-hover:h-full transition-all duration-300 ease-out delay-[450ms] -ml-[1px] mt-[1px] mb-[1px]"></span>
             
              Careers
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 w-full h-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>
          
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className={`mb-8 flex justify-between ${index % 2 === 0 ? 'items-center' : 'flex-row-reverse items-center'} w-full`}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                </div>
                <div className={`order-1 ${milestone.bgColor} rounded-lg shadow-xl w-5/12 px-6 py-4`}>
                  <h3 className={`mb-3 font-bold ${milestone.textColor} text-xl`}>{milestone.event}</h3>
                  <p className={`text-sm leading-snug tracking-wide ${milestone.textColor} text-opacity-100`}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutUs;