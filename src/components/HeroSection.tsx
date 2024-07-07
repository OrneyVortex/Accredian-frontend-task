// src/components/HeroSection.js

import React, { useState } from 'react';
import Modal from './Modal';
import image from '../assets/Anniversary.png';
import notes from '../assets/note1.svg';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    { name: 'Refer', href: '#refer' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Support', href: '#support' },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='p-4'>

      <div className="flex justify-center mt-10">
        <div className="flex justify-around items-center bg-blue-100 p-2 rounded-full w-full md:w-2/5">
          {items.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-gray-700 text-lg hover:text-blue-500 ${activeIndex === index ? 'text-blue-500' : ''}`}
              onClick={() => handleClick(index)}
            >
              {item.name}
              {activeIndex === index && (
                <span className="absolute top-7 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div className="relative h-auto md:h-96 flex w-full md:w-1/2 bg-blue-50 m-4 md:m-10 rounded-lg shadow-2xl">
          <div className='absolute rotate-180'>
            <img src={notes} className='h-10 md:h-20' alt="note" />
          </div>
          {/* <div className='absolute object-right-top pl-40 md:pl-80 pt-32 md:pt-64 z-20'>
            <img src={notes} className='h-12 md:h-24' alt="note" />
          </div> */}
          <div className='absolute pl-48 md:pl-96 z-0'>
            <img src={notes} className='h-13 md:h-26' alt="note" />
          </div>
          <div className='p-4 md:p-10'>
            <div className="flex flex-col items-start space-y-2 p-6 rounded-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Let's Learn <br /> & Earn
              </h1>
              <p className="text-md md:text-lg text-gray-700">
                Get a chance to win <br /> up-to <span className="text-blue-500 text-xl md:text-3xl font-bold">Rs. 15,000</span>
              </p>
              <div>
                <button
                  className="bg-blue-500 text-white mt-4 w-24 md:w-32 rounded z-10"
                  onClick={openModal}
                >
                  Refer Now
                </button>
              </div>
            </div>
          </div>
          <div className='z-0 bottom-0 right-0'>
            <img src={image} className='object-contain h-full' alt="Anniversary" />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HeroSection;
