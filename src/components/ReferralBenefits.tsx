import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

const ReferralBenefits = () => {
  const [enrolled, setEnrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal

  const toggleEnrolled = () => {
    setEnrolled(!enrolled);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className='relative'>
        <div className="flex items-center absolute right-0">
          <span className="mr-2">Enrolled</span>
          <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle" checked={enrolled} onChange={toggleEnrolled} className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
            <span className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className={`dot absolute left-1 top-1 w-4 h-4 rounded-full transition transform ${enrolled ? 'translate-x-full bg-blue-500' : 'bg-white'}`}></span>
          </label>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        What Are The <a href="#" className="text-blue-500">Referral Benefits?</a>
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md mb-4 lg:mb-0">
          <div className="flex flex-col space-y-2">
            <div className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer">ALL PROGRAMS</div>
            <div className="p-2 bg-white text-gray-700 rounded-lg cursor-pointer">PRODUCT MANAGEMENT</div>
            <div className="p-2 bg-white text-gray-700 rounded-lg cursor-pointer">STRATEGY & LEADERSHIP</div>
            <div className="p-2 bg-white text-gray-700 rounded-lg cursor-pointer">BUSINESS MANAGEMENT</div>
            <div className="p-2 bg-white text-gray-700 rounded-lg cursor-pointer">FINTECH</div>
            <div className="p-2 bg-white text-gray-700 rounded-lg cursor-pointer">SENIOR MANAGEMENT</div>
            <div className="p-2 bg-white text-gray-700 rounded-lg cursor-pointer">DATA SCIENCE</div>
            <div className="p-2 bg-white text-gray-700 rounded-lg cursor-pointer">DIGITAL TRANSFORMATION</div>
            <div className="p-2 bg-white text-gray-700 rounded-lg cursor-pointer">BUSINESS ANALYTICS</div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold"></div>
          </div>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2">Programs</th>
                <th className="p-2">Referrer Bonus</th>
                <th className="p-2">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Professional Certificate Program in Product Management</td>
                <td className="p-2">₹ 7,000</td>
                <td className="p-2">₹ 9,000</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2">PG Certificate Program in Strategic Product Management</td>
                <td className="p-2">₹ 9,000</td>
                <td className="p-2">₹ 11,000</td>
              </tr>
              <tr>
                <td className="p-2">Executive Program in Data Driven Product Management</td>
                <td className="p-2">₹ 10,000</td>
                <td className="p-2">₹ 10,000</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2">Executive Program in Product Management and Digital Transformation</td>
                <td className="p-2">₹ 10,000</td>
                <td className="p-2">₹ 10,000</td>
              </tr>
              <tr>
                <td className="p-2">Executive Program in Product Management</td>
                <td className="p-2">₹ 10,000</td>
                <td className="p-2">₹ 10,000</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2">Advanced Certification in Product Management</td>
                <td className="p-2">₹ 10,000</td>
                <td className="p-2">₹ 10,000</td>
              </tr>
              <tr>
                <td className="p-2">Executive Program in Product Management and Project Management</td>
                <td className="p-2">₹ 10,000</td>
                <td className="p-2">₹ 10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative mt-4">
        <button className="flex items-center absolute right-0 bg-gray-400 py-2 px-4 rounded-lg">Show More <span className="ml-2">&#x25BC;</span></button>
      </div>
      
      <div className='mt-28 flex justify-center mb-10'>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={openModal}
        >
          Refer Now
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ReferralBenefits;
