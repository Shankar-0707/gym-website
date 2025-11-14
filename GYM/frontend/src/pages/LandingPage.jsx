import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-full"></div>
            <span className="text-2xl font-bold">FITNESS<span className="text-red-600">PRO</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-red-500 transition-colors">Features</a>
            <a href="#classes" className="hover:text-red-500 transition-colors">Classes</a>
            <a href="#pricing" className="hover:text-red-500 transition-colors">Pricing</a>
          </div>
          <Link 
            to="/login" 
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              TRANSFORM YOUR 
              <span className="text-red-600"> BODY</span>
              <br />
              TRANSFORM YOUR 
              <span className="text-red-600"> LIFE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of members achieving their fitness goals. 
              State-of-the-art equipment, expert trainers, and a supportive community await you.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/register" 
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl transform -rotate-3 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💪</div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Transform?</h3>
                  <p className="text-lg">Your fitness journey starts here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">WHY CHOOSE US</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏋️', title: 'Modern Equipment', desc: 'Latest fitness equipment from top brands' },
              { icon: '👨‍🏫', title: 'Expert Trainers', desc: 'Certified professionals to guide your journey' },
              { icon: '👥', title: 'Supportive Community', desc: 'Join a community that motivates you' }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;