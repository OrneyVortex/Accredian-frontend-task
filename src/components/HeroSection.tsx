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
    <div className="">
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

      <div className="flex flex-col md:flex-row justify-center items-center mt-5">
        <div className="relative  h-auto md:h-96 flex w-full md:w-3/5 bg-blue-50 m-4 md:m-10 rounded-lg shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 transform -rotate-12">
            <img src={notes} className="h-12 md:h-20" alt="note" />
          </div>
          <div className="absolute top-0 right-0 transform rotate-12">
            <img src={notes} className="h-12 md:h-20" alt="note" />
          </div>
          <div className="absolute bottom-10 rotate-90 md:right-80">
            <img src={notes} className="h-12 md:h-20" alt="note" />
          </div>
          <div className="p-4 md:p-10 flex-1">
            <div className="flex flex-col items-start space-y-2 p-6 rounded-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Let's Learn <br /> & Earn
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Get a chance to win <br /> up-to <span className="text-blue-500 text-2xl md:text-4xl font-bold">Rs. 15,000</span>
              </p>
              <div>
                <button
                  className="bg-blue-500 text-white mt-4 w-32 md:w-40 py-2 rounded z-10"
                  onClick={openModal}
                >
                  Refer Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex h-full">
            <img src={image} className="object-fill h-full w-full md:m-5 " alt="main" />
          </div>

          <div className="absolute bottom-0 right-0 transform rotate-12">
            <img src={notes} className="h-12 md:h-20" alt="note" />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HeroSection;
