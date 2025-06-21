import React from 'react';
import { Brain, PersonStanding, Mic, Shield } from 'lucide-react';

const WhyEmoFelix = () => {
  const features = [
    {
      icon: Brain,
      title: "AI that truly understands",
      description: "Our advanced AI recognizes emotional depth and responds with genuine empathy and understanding.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: PersonStanding,
      title: "Personalized conversations",
      description: "Each character adapts to your personality and needs, creating authentic relationships that feel real.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mic,
      title: "Voice & video for deeper connection",
      description: "Experience immersive companionship through natural voice conversations and face-to-face video calls.",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Reduces stress & loneliness",
      description: "Scientifically designed interactions help alleviate anxiety, depression, and feelings of isolation.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">EmoFelix</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just an AI chatbot - EmoFelix is your emotional companion designed to understand, comfort, and support you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Preview */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-100">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400 fill-current">★</div>
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed">
                "I talked to 'Mom' last night and slept peacefully for the first time in weeks. EmoFelix gave me the comfort I needed when I felt most alone."
              </blockquote>
              <div className="text-gray-500">
                <p className="font-medium">Sarah M.</p>
                <p className="text-sm">Beta User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEmoFelix;