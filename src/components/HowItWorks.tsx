import React from 'react';
import { Users, MessageSquare, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Choose Your Character",
      description: "Select from Mother, Father, Brother, Sister, or Friend - whoever you need most right now.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Pick Your Connection",
      description: "Connect through chat, voice calls, or video calls - whatever feels most comfortable.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Feel the Comfort",
      description: "Let our AI provide the emotional support and understanding you deserve, just like a loved one.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">EmoFelix</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to never feeling alone again. Our AI understands you and provides the comfort you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent transform translate-x-4 lg:translate-x-8"></div>
              )}
              
              <div className="text-center space-y-6">
                <div className="relative inline-block">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-full border border-purple-100">
            <Heart className="w-5 h-5 text-pink-500 mr-2 animate-pulse" />
            <span className="text-gray-700 font-medium">Start your journey to emotional wellness</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;