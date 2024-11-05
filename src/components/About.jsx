import React from 'react';
import { about } from "../assets/export.js";

const About = () => {
  return (
    <div className="bg-[#F8F8F8] flex flex-col lg:flex-row justify-center items-center px-4 py-10 mb-8" id="aboutus">
      
      <div className="lg:w-1/3 text-center lg:text-left lg:mr-52">
        <h2 className="text-xl sm:text-3xl lg:text-[50px] font-bold mb-4">
          About us
        </h2>
        <p className="text-[#757474] text-[14px] sm:text-[12px] mb-4">
        Dr. Hau was created with a single goal in mind: to make healthcare management easier for vocational school students. We know that balancing education and personal health can be a challenge, especially when it comes to managing medical appointments, vaccinations, and medical records. Our platform streamlines these processes, providing students with a user-friendly app that keeps all their healthcare information in one place. By giving students the tools to stay organized and informed, we empower them to take charge of their health journey with confidence.        </p>
        <p className="text-[#757474] text-[14px] sm:text-[12px] mb-4">
        At Dr. Hau, we believe that healthcare should be simple, accessible, and personalized. That’s why we’ve designed a mobile solution that connects students and healthcare providers seamlessly. From digital consent forms and vaccination information to appointment scheduling and medical record tracking, our app bridges the gap between students and healthcare services. Our mission is to make healthcare management a hassle-free experience, so students can focus on their studies, well-being, and future success.        </p>
       
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
