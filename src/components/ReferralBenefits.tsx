import React, { useState } from 'react';

interface Program {
  name: string;
  referrerBonus: string;
  refereeBonus: string;
}

const ReferralBenefits: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Programs');

  const programsData: { [key: string]: Program[] } = {
    'All Programs': [
      { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
      { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
      { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      { name: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      { name: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      { name: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      { name: 'Professional Certificate Program in Strategy & Leadership', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
      { name: 'Executive Program in Business Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
      { name: 'Fintech Certification Program', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      { name: 'Senior Management Program', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      { name: 'Data Science Bootcamp', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      { name: 'Digital Transformation Certification', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      { name: 'Business Analytics Certification', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    ],
    'Product Management': [
      { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
      { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
      { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    ],
    'Strategy & Leadership': [
      { name: 'Professional Certificate Program in Strategy & Leadership', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    ],
    'Business Management': [
      { name: 'Executive Program in Business Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    ],
    'Fintech': [
      { name: 'Fintech Certification Program', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    ],
    'Senior Management': [
      { name: 'Senior Management Program', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    ],
    'Data Science': [
      { name: 'Data Science Bootcamp', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    ],
    'Digital Transformation': [
      { name: 'Digital Transformation Certification', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    ],
    'Business Analytics': [
      { name: 'Business Analytics Certification', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    ],
  };

  const programCategories = Object.keys(programsData);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-8">
        What Are The <span className="text-blue-600">Referral Benefits?</span>
      </h1>
      <div className="w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-4 space-y-4">
          {programCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`flex justify-between items-center border-b border-gray-200 pb-2 cursor-pointer ${selectedCategory === category ? 'bg-blue-100' : ''}`}
            >
              <span className={`text-sm ${selectedCategory === category ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>{category}</span>
              <span className={`text-sm ${selectedCategory === category ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>{'>'}</span>
            </div>
          ))}
        </div>

        {/* Referral Benefits Table */}
        <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4 bg-blue-100 rounded-t-lg">
            <h2 className="text-blue-600 font-bold text-lg">Programs</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Referrer Bonus</span>
              <span className="text-gray-700">|</span> {/* Divider line */}
              <span className="text-gray-700">Referee Bonus</span>
            </div>
          </div>
          {programsData[selectedCategory].map((program, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-200 py-2">
              <span className="text-gray-700">{program.name}</span>
              <div className="flex space-x-4">
                <span className="text-gray-700">{program.referrerBonus}</span>
                <span className="text-gray-700">|</span> {/* Divider line */}
                <span className="text-gray-700">{program.refereeBonus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Refer Now</button>
      </div>
    </div>
  );
};

export default ReferralBenefits;
