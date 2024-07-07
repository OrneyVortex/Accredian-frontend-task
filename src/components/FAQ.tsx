import React, { useState } from 'react';
import FAQContent from './FAQContent';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('eligibility');

  return (
    <div className=''>

    <div className="flex flex-col items-center min-h-fit  ">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h1>
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col w-full lg:w-1/4 border-r p-4">
          <button
            className={`p-4 text-left shadow-md mb-2 ${
              activeTab === 'eligibility'
                ? 'bg-blue-100 text-blue-500 hover:bg-blue-100'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('eligibility')}
          >
            Eligibility
          </button>
          <button
            className={`p-4 text-left shadow-md mb-2 ${
              activeTab === 'how-to-use'
                ? 'bg-blue-100 text-blue-500 hover:bg-blue-100'
                : 'bg-white text-black hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('how-to-use')}
          >
            How To Use?
          </button>
          <button
            className={`p-4 text-left shadow-md mb-2 ${
              activeTab === 'terms-conditions'
                ? 'bg-blue-100 text-blue-500 hover:bg-blue-100'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('terms-conditions')}
          >
            Terms & Conditions
          </button>
        </div>
        <div className="w-full lg:w-3/4 p-6">
          <FAQContent activeTab={activeTab} />
        </div>
      </div>
              </div>
    </div>
  );
};

export default FAQ;
