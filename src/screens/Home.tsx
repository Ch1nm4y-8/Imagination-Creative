import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../Hooks/useLenis";
import { cardData, homeBackgroundImagePath, modelImageBasePath, scrollerImageBasePath } from "../utils/HomeConfig";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useLenis();
  const navigate = useNavigate();

  useGSAP(() => {
    const animation1 = gsap.from(".page1-contents h1,.page1-contents h3", {
      x: -900,
      stagger: 0.3,
      duration: 0.7,
      delay: 1.5,
    });

    const animation2 = gsap.to(".page1-button", {
      opacity: 1,
      delay: 3,
    });

    const animation3 = gsap.from(".page-2-wrapper h3 span, .page-2-wrapper h4", {
      opacity: 0,
      stagger: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".page-2-wrapper",
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
    });
    const animation4 = gsap.from(".page-2-images div", {
      opacity: 0,
      duration: 2,
      stagger: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".page-2-wrapper",
        start: "-20% top",
        end: "50% top",
        scrub: true,
      },
    });

    const animation5 = gsap.to(".page-2-images ", {
      transform: "translateX(-42%)",
      scrollTrigger: {
        trigger: ".page-2-wrapper",
        start: "top 0%",
        end: "top -300%",
        scrub: 1,
        pin: true,
      },
    });

    // const animation6 = gsap.from(".page-3-images", {
    //   opacity: 0,
    //   stagger: 2,
    //   scrollTrigger: {
    //     trigger: ".page-3-wrapper",
    //     start: "top 40%",
    //     end: "top -400%",
    //     scrub: 1,
    //   },
    // });

    const animation7 = gsap.from(".page-4-wrapper h2", {
      // opacity: 0,
      y: -400,
      stagger: 0.5,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".page-4-wrapper",
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
    });

    const animation8 = gsap.from(".cards", {
      opacity: 0,
      // y: -400,
      stagger: 0.5,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".page-4-wrapper",
        start: "top 30%",
        end: "top -10%",
        scrub: true,
      },
    });

    const animation9 = gsap.to(".textElement", {
      x: "-60%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      animation1.kill();
      animation2.kill();
      animation3.kill();
      animation4.kill();
      animation5.kill();
      // animation6.kill();
      animation7.kill();
      animation8.kill();
      animation9.kill();

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const elements = ["DESIGN", "CLARITY", "COLOR", "QUALITY", "US"];

  return (
    <div className="main-class bg-black">
      <div className={`relative bg-fixed w-full h-[100vh] bg-cover bg-center`} style={{ backgroundImage: `url(${homeBackgroundImagePath})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/30"></div>

        <div className="page1-contents relative flex flex-col justify-center h-full z-10 items-center sm:items-start sm:ml-20 gap-5 sm:w-[35vw] ">
          <h3 className="text-white sm:text-2xl my-1vw">We turn your ideas into vibrant prints</h3>
          <h1 className="text-[#F1592A] text-[9vmax] text-center sm:text-start sm:text-[7vmax] leading-none  uppercase font-anton ">IMAGINATION CREATIVE</h1>
          <h3 className="text-white text-sm text-center sm:text-start">
            Your one-stop shop for vibrant, customizable prints on anything from mugs to merch. Perfect for businesses, creators, or just showing off your vibe.
          </h3>
          <button
            onClick={() => navigate("/contact")}
            className="opacity-0 page1-button bg-gradient-to-r cursor-pointer hover:scale-105 duration-500 from-[#b26851] to-[#df582f] sm:self-start rounded-sm px-7 py-2 text-white "
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="page-3-wrapper sm:my-80">
        {elements.map((word, i) => {
          const imageUrl = `${scrollerImageBasePath}${i + 1}.jpg`;
          return (
            <div key={i} className="page-3-images relative h-[100vh]  bg-no-repeat bg-center bg-fixed bg-cover sm:bg-contain" style={{ backgroundImage: `url(${imageUrl})` }}>
              <h2 className="absolute z-11 text-[#f7f7f7] w-full h-full justify-center items-center flex text-[22vw] text-center sm:text-[10vw] mix-blend-difference">IMAGINE {word}</h2>
              {i !== 0 && <div className="h-[1px] w-full bg-[grey]"></div>}
            </div>
          );
        })}
      </div>

      <div className="page-2-wrapper mt-96  overflow-hidden h-[100vh] p-10 text-white flex flex-col items-center">
        {/* <h3 className="uppercase font-serif leading-none text-[5vmax] text-center ">
          <span>Custom.</span> <span>Bold.</span> <span>You.</span>
          <br />
        </h3>
        <h2 className="text-2xl md:text-2xl  text-white pb-10 tracking-tight leading-snug">
          Get{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 italic">
            Custom Printed T-shirts
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-pink-500 rounded-sm blur-sm opacity-70 animate-pulse" />
          </span>{" "}
          tailored to your design and style.
        </h2> */}
        <h3 className="uppercase font-extrabold tracking-tight leading-none text-[5vmax] text-center text-white font-sans">
          <span>Custom.</span> <span>Bold.</span> <span>You.</span>
        </h3>

        <h4 className="text-lg md:text-2xl text-white pb-10 text-center font-medium tracking-tight leading-none mt-4">
          Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 font-bold uppercase">Custom Printed T-shirts </span>
          tailored to your design and style.
        </h4>

        <div className="page-2-images flex gap-10 overflow-y-hidden pl-900 ">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="w-[40vmax] sm:w-[25vmax] h-[100%] overflow-hidden">
              <img src={`${modelImageBasePath}img${i + 1}.jpg`} className="object-cover" alt="Tshirt" />
            </div>
          ))}
        </div>
      </div>

      {/* page4 */}
      <div className="page-4-wrapper mt-50 mb-10 bg-black max-w-full overflow-hidden">
        <h2 className="text-white text-[5vmax] font-serif text-center py-5">OUR COLLECTIONS...</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {cardData.map((card, i) => (
            <div
              key={i}
              className={`no-select cards group relative bg-[#303030] cursor-pointer rounded-xl flex justify-center  items-center "`}
              style={{ width: card.cardWidth, height: card.cardHeight }}
            >
              <p className="absolute top-0 right-0 text-[1vmax] text-white pr-3 pt-2">{card.title}</p>
              <img onContextMenu={(e) => e.preventDefault()} src={card.imgSrc} style={{ width: card.width, height: card.height }} className={`object-fit absolute`} alt="" />
              <img
                onContextMenu={(e) => e.preventDefault()}
                src={card.imgHoverSrc}
                style={{ width: card.width, height: card.height }}
                className={`object-fit absolute opacity-0 group-hover:opacity-100 group-active:opacity-100 duration-500`}
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center w-full ">
          <div className="text-[#F7F7F7] uppercase  text-2xl sm:text-4xl py-6 tracking-widest font-semibold animate-pulse drop-shadow-sm">And many more...</div>
          <button onClick={() => navigate("/products")} className="text-white border w-fit border-[#df582f] cursor-pointer duration-500 px-5 py-2 rounded-full overflow-hidden group relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 transform transition-transform bg-[#df582f] duration-500 -translate-x-full group-hover:translate-x-0 whitespace-nowrap w-full h-full z-1"></span>
            <span className="relative z-2">View More Products</span>
          </button>
        </div>
      </div>

      <div onClick={() => navigate("/contact")} className=" text-white  flex flex-nowrap overflow-hidden bg-gradient-to-r py-2   cursor-pointer from-[#b26851] to-[#df582f]">
        <div className="textElement flex whitespace-nowrap">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="mx-17">
              <p className="text-white text-xl">{`CONTACT US`}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
