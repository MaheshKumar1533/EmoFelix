import React from 'react';
import { Heart, MessageCircle, Video, Mic } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-30 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left side - Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-purple-100">
                <Heart className="w-5 h-5 text-pink-500 mr-2 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">First 1000 users get 1 Year Premium FREE</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Lonely</span>?<br />
                Let <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">EmoFelix</span><br />
                Be There for You.
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Choose a comforting character — Mom, Dad, Brother, or Friend — and talk through chat, voice, or video powered by AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center justify-center">
                    Notify Me When We Launch
                    <Heart className="ml-2 w-5 h-5 group-hover:animate-pulse" />
                  </span>
                </button>
                
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-full shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-500" />
                  Chat
                </div>
                <div className="flex items-center">
                  <Mic className="w-5 h-5 mr-2 text-purple-500" />
                  Voice
                </div>
                <div className="flex items-center">
                  <Video className="w-5 h-5 mr-2 text-pink-500" />
                  Video
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Visual */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-white to-purple-50 rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center animate-bounce">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">AI Companion</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;