import React from "react";

const About = () => {
  return (
    <div className="bg-black h-screen overflow-hidden flex items-center justify-center pt-10 ">
      <div className="info w-full sm:w-1/2 bg-[rgba(0,0,0,0.73)] z-11 text-white flex flex-col justify-around h-full">
        <div className="px-6">
          <h1 className="text-2xl md:text-6xl border-b-1 border-white font-serif text-center">About Us</h1>
          <p className="text-justify text-[2vmax] md:text-[13px] lg:text-[18px]">
            With 12 years of experience, we at Imagination Creative are passionate about bringning your ideas to life. At imagination Creative, we believe in the power of creativity to make a
            meaningful impact. We're dedicated to provide top-notch printing and decoration services, Turning ideas into stunning realities with our innovative approach. Moreover, we offer these
            services at a lower cost by cutting out middlemen, ensuring you receive the best value for your investment. Our journey started with a clear vision: to turn imagination into remarkable
            creations.
          </p>
        </div>
        <div className="px-6">
          <h1 className="text-2xl md:text-6xl border-b-1 border-white font-serif text-center">Why Choose Us</h1>
          <p className="text-justify text-[2vmax] md:text-[13px] lg:text-[18px]">
            Choosing Imagination Creative means selecting a team dedicated to quality, creativity and affordibility. We pay close attention to every detail to ensure you satisfaction. Our clear
            communication and commitment to exceeding expectations make your experience smooth and enjoyable. With us, you'll benefit from straighforward processes and excellent results, all delivered
            with professionalism.
          </p>
        </div>
      </div>
      <div className="absolute background-image sm:w-1/2 sm:relative">
        <img src="/assets/about-bg.png" className="w-[90%] hover:scale-105 duration-700" alt="" />
      </div>
    </div>
  );
};

export default About;
