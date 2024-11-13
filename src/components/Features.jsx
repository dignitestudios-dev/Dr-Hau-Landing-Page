import React, { useState } from 'react';
import { feature } from "../assets/export.js";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Features = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  // Toggle feature open/close
  const toggleDropdown = (index) => {
    setActiveIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        // If index is already open, close it by removing it from the array
        return prevIndices.filter(i => i !== index);
      } else {
        // Otherwise, open it by adding the index to the array
        return [...prevIndices, index];
      }
    });
  };

  const features = [
    { title: "Profile Creation", description: "Easily manage your personal and medical information for accurate healthcare records." },
    { title: "Personal Medical Records", description: "View a complete overview of your vaccination and procedure history." },
    { title: "Digital Consent Forms", description: "Securely sign and submit consent for vaccinations and procedures." },
    { title: "Vaccination Information Sheets", description: "Access comprehensive details on vaccines to make informed decisions." }
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-4 py-10 mb-8 text-center lg:text-left" id='features'>
      <div className="relative overflow-hidden mb-8 lg:mb-0 lg:w-1/2 flex justify-center items-center">
        <div className="absolute bg-[#E0FFE5] rounded-full h-[300px] w-[300px] opacity-30 transform -translate-x-20 -translate-y-20"></div>
        <img 
          src={feature} 
          alt="Phone" 
          className="w-full h-full relative z-10 object-contain"
        />
      </div>

      <div className="lg:w-1/2 lg:ml-10 flex flex-col items-center lg:items-start w-full sm:w-[320px] md:w-[400px] lg:w-[500px]">
        <h2 className="text-xl sm:text-3xl lg:text-[50px] font-semibold mb-4">Key Features</h2>
        
        <div className="mt-6 space-y-3 max-w-xl w-full">
          {features.map((feature, index) => (
            <div key={index} className="w-full"> 
              <div 
                className={`flex justify-between items-center pt-4 cursor-pointer 
                  ${activeIndices.includes(index) ? "text-black font-bold" : "text-gray-500"} 
                  ${activeIndices.length === 0 ? "mb-2" : "mb-4"}`}
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex items-center space-x-1">
                  <span className="font-inter text-xl font-normal">{`0${index + 1} /`}</span>
                  <span className='font-inter font-medium md:text-[25px]'>{feature.title}</span>
                </div>
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-black">
                  {activeIndices.includes(index) ? (
                    <FiChevronUp className="text-black" />
                  ) : (
                    <FiChevronDown className="text-black" />
                  )}
                </div>
              </div>

              {activeIndices.includes(index) && (
                <div className="font-inter font-medium pl-2 text-gray-600 text-left">
                  {feature.description}
                </div>
              )}

              {!activeIndices.includes(index) && (
                <div className="mt-4 border-t border-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
