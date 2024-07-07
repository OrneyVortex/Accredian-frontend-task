import React, { useState } from 'react';

const FAQContent = ({ activeTab }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = {
    eligibility: [
      {
        question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
        answer: 'No, prior experience is not required to enroll in the program.',
      },
      {
        question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
        answer: 'No, prior experience is not required to enroll in the program.',
      },
    ],
    'how-to-use': [
      {
        question: 'How do I access the program materials?',
        answer: 'You can access the program materials through our online portal after enrollment.',
      },
      
      {
        question: 'How do I access the program materials?',
        answer: 'You can access the program materials through our online portal after enrollment.',
      },
      
      {
        question: 'How do I access the program materials?',
        answer: 'You can access the program materials through our online portal after enrollment.',
      },
      
    ],
    'terms-conditions': [
      {
        question: 'What are the terms and conditions of the program?',
        answer: 'The terms and conditions are outlined in the program handbook, available upon request.',
      }
    ],
  };

  return (
    <div>
      {data[activeTab].map((item, index) => (
        <div key={index} className="border-b mb-2">
          <button
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center  mb-2 text-black"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white text-black">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQContent;
