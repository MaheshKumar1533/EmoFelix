import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is EmoFelix and how does it work?",
      answer: "EmoFelix is an AI-powered emotional support platform that lets you talk to comforting characters like Mom, Dad, siblings, or friends. Using advanced AI technology, these characters provide personalized emotional support through chat, voice, or video conversations."
    },
    {
      question: "Is my conversation data private and secure?",
      answer: "Absolutely. Your privacy is our top priority. All conversations are encrypted end-to-end, and we never share your personal data with third parties. Your emotional wellbeing conversations remain completely confidential."
    },
    {
      question: "Can EmoFelix replace real therapy or medical help?",
      answer: "EmoFelix is designed to provide emotional support and companionship, but it's not a replacement for professional therapy or medical treatment. If you're experiencing severe mental health issues, we encourage you to seek help from qualified professionals."
    },
    {
      question: "What's included in the Premium access?",
      answer: "Premium access includes unlimited conversations with all character types, voice and video calling features, priority customer support, advanced personality customization, and early access to new features and characters."
    },
    {
      question: "When will EmoFelix be available?",
      answer: "We're planning to launch EmoFelix in early 2024. Beta users will get early access, and we'll keep you updated throughout the development process with regular progress updates."
    },
    {
      question: "How realistic are the AI characters?",
      answer: "Our AI characters are designed to feel natural and emotionally authentic. They adapt to your personality, remember your preferences, and provide contextually appropriate responses that feel like talking to a caring family member or friend."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about EmoFelix and emotional AI companionship.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-purple-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;