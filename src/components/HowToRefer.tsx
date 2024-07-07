// src/components/HowToRefer.js

import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

const HowToRefer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">
        How do I <span className="text-blue-500">Refer</span>
      </h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Step 
          icon={<UserIcon />}
          text="Submit referrals easily via our website's referral section."
        />
        <Arrow />
        <Step 
          icon={<ClipboardIcon />}
          text="Earn rewards once your referral joins an Accredian program."
        />
        <Arrow />
        <Step 
          icon={<WalletIcon />}
          text="Both parties receive a bonus 30 days after program enrollment."
        />
      </div>
      
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={openModal}
        >
          Refer Now
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const Step = ({ icon, text }) => (
  <div className="flex flex-col items-center text-center mb-6 md:mb-0 w-full md:w-1/3">
    <div className="bg-blue-100 rounded-full p-4 mb-4">
      {icon}
    </div>
    <p className="text-sm">{text}</p>
  </div>
);

const Arrow = () => (
  <div className="hidden md:block text-blue-500 text-4xl">→</div>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

export default HowToRefer;
