import React, { useState } from 'react';
import { Mail, User, Gift, Clock } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Be Among the First to Experience <br />
              <span className="text-yellow-300">Emotional AI</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              We're launching soon. Be one of the first 1000 users to get 1 year of Premium Access for FREE!
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Benefits */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">1 Year Premium FREE</h3>
                      <p className="text-gray-600">Worth $299 - Unlock all characters, unlimited conversations, and priority support.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Early Access</h3>
                      <p className="text-gray-600">Be the first to experience emotional AI and help shape the future of digital companionship.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">847</div>
                    <div className="text-gray-600">users already signed up</div>
                    <div className="text-sm text-gray-500 mt-1">Only 153 spots left!</div>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-4 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Join the Waitlist - Get Premium FREE
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    We'll notify you as soon as EmoFelix is ready to help you feel less lonely.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;