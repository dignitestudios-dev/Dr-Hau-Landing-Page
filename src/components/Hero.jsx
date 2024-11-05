import React from 'react'; 
import { heroimage } from '../assets/export';
import { herobg } from '../assets/export'; // assuming herobg is the path of your background image

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
      id="home"
    >
      {/* Left Side (Text) */}
      <div className="text-white p-8 md:p-16 w-full md:w-1/2 ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight pl-8">
          Welcome to
        </h1>
        <p className="text-[50px] sm:text-[60px] md:text-[70px] font-bold text-[#D0FCB3] pl-8">
          DR.HAU
        </p>
        <h2 className="text-[20px] sm:text-[22px] md:text-[24px] mb-2 pl-8">
          Streamlining Healthcare for Vocational School Students
        </h2>
        <p className="text-[12px] sm:text-[14px] md:text-[16px] font-extralight pl-8">
          Dr. Hau is a mobile application designed to make healthcare management easier for
          vocational school students. By bridging the gap between students and healthcare providers, 
          Dr. Hau empowers users to take control of their health journey,from vaccination records to appointment scheduling,
          all in one convenient app.
        </p>
      </div>

      
      <div className="flex-shrink-0 mt-8 md:mt-0 w-full md:w-1/2">
        <img
          src={heroimage}
          alt="Descripti"
          className="w-auto h-auto "
        />
      </div>
    </div>
  );
};

export default Hero;
