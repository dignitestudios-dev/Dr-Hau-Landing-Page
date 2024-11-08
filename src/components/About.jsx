import React from 'react';
import { about } from "../assets/export.js";

const About = () => {
  return (
    <div className="bg-[#F8F8F8] flex flex-col lg:flex-row justify-center items-center px-4 py-10 mb-8" id="aboutus">
      
      <div className="lg:w-1/3 text-center lg:text-left lg:mr-52">
        <h2 className="text-xl sm:text-3xl lg:text-[50px] font-bold mb-6">
          About us
        </h2>
        <p className="text-[#484848] text-[14px] sm:text-[14px] mb-4">
        Dr Benny Hau is a Family Medicine physician and retired Professor of Medicine from Loma Linda University who has taken care of vocational students since 1992.  He has provided healthcare to hundreds of thousands of students.  This mobile app will make it easier for you to manage your vaccination and health care records all in one easy to use App.  In addition, this mobile app will help you to fill out the vaccination consents and also contains the Vaccination Information Sheets which details the vaccinations you will need for your clinical sites. 

At the end, our hope is that this app will make it easier for you to concentrate on your studies and not on the health screen requirements for your clinical externship.  Having you be successful in your healthcare goals is part of our mission.</p>
        
      </div>

      <div className="relative overflow-hidden mb-8 lg:mb-0">
        <img 
          src={about} 
          alt="Phone"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default About;
