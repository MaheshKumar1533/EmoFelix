import React, { useState, useEffect } from 'react';
import { Heart, Zap, Brain, Users, Check, X, Mail, Bell, Sparkles, Bot, Gift, Timer, Star } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showOfferPopup, setShowOfferPopup] = useState(false);

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOfferPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNotifyMe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleClaimOffer = () => {
    setShowOfferPopup(false);
    // You can add logic here to redirect to payment or save the offer
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      {/* Offer Popup Modal */}
      {showOfferPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gradient-to-br from-pink-500/90 via-purple-600/90 to-blue-600/90 backdrop-blur-lg rounded-3xl border border-white/30 p-8 max-w-md w-full shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setShowOfferPopup(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Popup content */}
            <div className="text-center">
              {/* Gift icon with animation */}
              <div className="relative mb-6">
                <div className="bg-yellow-400 rounded-full p-4 inline-block">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Star className="w-6 h-6 text-yellow-300" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white mb-3">
                🎉 LIMITED TIME OFFER!
              </h2>
              
              {/* Offer details */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/30">
                <div className="text-4xl font-bold text-yellow-300 mb-2">
                  1 MONTH FREE
                </div>
                <div className="text-lg text-white/90 mb-2">
                  For First 1000 Customers
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-white/80">
                  <Timer className="w-4 h-4" />
                  <span>Only 247 spots left!</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="text-left mb-6">
                <div className="text-sm text-white/90 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Unlimited AI Characters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Voice & Video Calls</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>No Ads Experience</span>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleClaimOffer}
                  className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-full text-white font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🎁 CLAIM YOUR FREE MONTH
                </button>
                <button
                  onClick={() => setShowOfferPopup(false)}
                  className="w-full py-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Launching Soon Banner */}
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-center space-x-2 text-white">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-sm font-medium">🚀 Launching Soon - Join the AI Revolution</span>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 py-8">
          <div className="container mx-auto max-w-7xl">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="relative">
                  <Heart className="w-12 h-12 text-pink-400" />
                  <Zap className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1" />
                </div>
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Emofelix
                </h1>
                <div className="relative">
                  <Brain className="w-12 h-12 text-blue-400" />
                  <Bot className="w-6 h-6 text-green-400 absolute -bottom-1 -right-1" />
                </div>
              </div>
              
              <p className="text-2xl md:text-3xl text-white/90 font-light mb-8 max-w-2xl mx-auto">
                Emotional AI That Connects.
              </p>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="flex items-center space-x-2 text-white/70">
                  <Users className="w-5 h-5 text-pink-400" />
                  <span>Human Connection</span>
                </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span>AI Intelligence</span>
                </div>
              </div>

              <button 
                onClick={handleNotifyMe}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Notify Me When It Launches</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </button>
            </div>

            {/* Subscription Plans */}
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">3 Days Unlimited</h2>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Subscription Plans
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Free Plan */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-white py-2 px-4 rounded-full text-center font-semibold mb-4">
                    FREE
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-1">₹0.0</div>
                    <div className="text-white/70">/Month</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">3 Characters Free</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-red-400" />
                      <span className="text-white/70">Voice Selection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">Ads</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white font-semibold transition-all duration-300">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Per Month Plan */}
                <div className="bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-sm rounded-2xl border border-purple-400/30 p-6 transform scale-105 shadow-2xl">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full text-center font-semibold mb-4">
                    PER MONTH
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-1">₹99</div>
                    <div className="text-white/70">/Month</div>
                    <div className="text-sm text-white/60">
                      <span className="line-through">₹499/Month</span>
                      <span className="text-green-400 ml-2">Save 80.16%</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white">5 Characters Free</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white">Voice Selection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white">AI Assistant</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white">No Ads</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full text-white font-semibold transition-all duration-300 shadow-lg">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Per Year Plan */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 px-4 rounded-full text-center font-semibold mb-4">
                    PER YEAR
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-1">₹999</div>
                    <div className="text-white/70">/Year</div>
                    <div className="text-sm text-white/60">
                      <span className="line-through">₹4999/Year</span>
                      <span className="text-green-400 ml-2">Save 80%</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">Unlimited Characters</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">Multiple Languages</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">Voice/Video Call</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">No Ads</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">Own Voice Generation</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white font-semibold transition-all duration-300">
                    CHOOSE PLAN
                  </button>
                </div>
              </div>

              <div className="text-center">
                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white font-semibold transition-all duration-300">
                  SEE ALL PLANS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Waitlist Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-1">Join the Waitlist</h3>
                <p className="text-white/70">Be the first to experience emotional AI connection</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Mail className="w-5 h-5 text-white/40 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent w-64"
                  />
                </div>
                <button
                  onClick={handleNotifyMe}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full text-white font-semibold transition-all duration-300"
                >
                  {subscribed ? '✓ Subscribed!' : 'Join Waitlist'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;