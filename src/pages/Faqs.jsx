import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState('');

  const faqs = [
    {
      question: "What types of water products do you offer?",
      answer: "We offer a variety of water products, including bottled drinking water, sachet water. Each product undergoes rigorous quality testing to ensure safety and purity.."
    },
    {
      question: "How can I place an order for water delivery?",
      answer: "You can place an order for water delivery by calling our customer service hotline. Simply tell the product you need, choose your delivery schedule, and provide your contact details."
    },
    {
      question: "What measures do you take to ensure the quality of your water?",
      answer: "We have a comprehensive quality assurance process that includes multi-stage filtration, UV sterilization, and regular testing by certified laboratories to ensure our water meets or exceeds all safety standards."
    },
    {
        question: " Do you have any certifications for your water quality?",
        answer: "Yes, our water is certified by various national quality standards organizations, ensuring it is safe and of the highest quality.."
      },
      {
        question: "How can I contact customer service if I have a problem with my order?",
        answer: " You can contact our customer service team via phone or email. We are available 24/7 to assist you with any issues or concerns you may have."
      },
    {
        question: "Do you offer home or office delivery services?",
        answer: "Yes, we offer delivery services for both homes and offices. You can place an order through our website or contact our customer service team for more details"
    },
    {
        question: "Do you offer discounts for bulk purchases?",
        answer:" Yes, we offer discounts for bulk purchases. Please contact our sales team to discuss your needs and receive a customized quote or contact our customer service team for more details"
    },
    {
        question: "What are your prices for bottled and sachet water?",
        answer:"Our prices are competitive and vary based on the quantity purchased. For detailed pricing information, please contact our sales team"
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
      <div className="max-w-md mx-auto pt-10">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-900">Frequently asked questions
          </h2>
        {/*<h1 className="text-3xl pt-20 font-bold text-center text-blue-950 mb-8">Frequently Asked Questions</h1>*/}
        {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                  className="flex justify-between items-center border-b border-gray-300 cursor-pointer px-4"
                  onClick={() => toggleFaq(index)}
              >
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <svg
                    className={`w-6 h-6 transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
              {activeIndex === index && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
        ))}
      </div>
  );
};

export default Faqs;