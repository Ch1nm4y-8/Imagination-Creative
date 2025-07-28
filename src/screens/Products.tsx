import {
  homeDecorativesData,
  lightDecorativesData,
  officeAccessoriesData,
  deskDecorativesData,
  tshirtDesignBasePath,
  TshirtDesignLength,
  wallDecorativeBasePath,
  WallDecorativeLength,
} from "../utils/ProductsConfig";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1115] to-[#1f2937]  pt-16 text-white">
      <div className="w-full sm:w-[80vw] mx-auto">
        <div className="bg-[#F7F6F2] my-10 px-5 py-5 rounded-xl">
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-14 text-[black] tracking-wide">{deskDecorativesData.sectionTitle}</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10">
            {deskDecorativesData.products.map((item) => (
              <div key={item.title} className="group rounded-xl overflow-hidden bg-[black] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="w-full h-30 md:h-52 overflow-hidden">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-medium text-center text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F7F6F2] h-[22vw] rounded-xl flex items-center justify-center px-10">
          <div className="relative rounded-xl h-[80%] w-[40vw] ">
            <img src="/products/banner1.jpg" className="w-full h-full object-fit rounded-xl" alt="" />
          </div>
          <h3 className="text-black font-playwrite text-[5vw] sm:text-2xl md:text-3xl lg:text-5xl w-[60vw] leading-tight text-right">Sync in style with your soulmate.</h3>
        </div>

        <div className="bg-[black] my-10 px-5 py-5 rounded-xl">
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-14 text-[#F7F6F2] tracking-wide">{homeDecorativesData.sectionTitle}</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10">
            {homeDecorativesData.products.map((item) => (
              <div key={item.title} className="group rounded-xl overflow-hidden bg-[#F7F6F2] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="w-full h-30 md:h-52 overflow-hidden">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-medium text-center text-black">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[black] h-[22vw] rounded-xl flex items-center justify-between px-10">
          <h3 className="text-[#F2C361] font-playwrite text-[5vw]  sm:text-2xl md:text-3xl lg:text-5xl w-[60vw] leading-tight text-left">Light up your favorite moments.</h3>
          <div className="relative rounded-xl h-[80%] w-[40vw] ">
            <img src="/products/banner2.jpg" className="w-full h-full object-cover object-center rounded-xl" alt="" />
          </div>
        </div>

        {/* Office */}
        <div className="bg-[black] my-10 px-5 py-5 rounded-xl">
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-14 text-[#F7F6F2] tracking-wide">{officeAccessoriesData.sectionTitle}</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10">
            {officeAccessoriesData.products.map((item) => (
              <div key={item.title} className="group rounded-xl overflow-hidden bg-[#F7F6F2] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="w-full h-30 md:h-52 overflow-hidden">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-medium text-center text-black">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Light */}
        <div className="bg-[#F7F6F2] my-20 px-5 py-5 rounded-xl">
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-14 text-[black] tracking-wide">{lightDecorativesData.sectionTitle}</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3  gap-5 md:gap-10">
            {lightDecorativesData.products.map((item, index) => (
              <div
                key={item.title}
                className={`group flex flex-col rounded-xl overflow-hidden bg-[black] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${
                  (index + 1) % 3 === 0 ? "row-span-2" : ""
                }`}
              >
                <div className="flex-grow w-full h-30 md:h-52 overflow-hidden">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 flex items-center justify-center h-16">
                  <h4 className="text-lg font-medium text-center text-white truncate">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[black] my-20 px-5 py-5 rounded-xl">
          <h3 className="text-center text-4xl md:text-5xl font-bold mb-14 text-[#F7F6F2] tracking-wide">Wall Decoratives</h3>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
            {[...Array(WallDecorativeLength)].map((_, index) => (
              <div
                key={index}
                className={`group flex flex-col rounded-xl overflow-hidden bg-[#F7F6F2] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${
                  index === 0 && "col-span-2 lg:col-span-3"
                } ${index == 4 && "row-span-2"} ${index == 3 && "lg:row-span-2"}`}
              >
                <div className="flex-grow w-full h-50 md:h-75 overflow-hidden">
                  <img src={`${wallDecorativeBasePath}${index + 1}.jpg`} alt={"Photo Frame"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* T shirt Designs */}
        <div className="bg-transparent mb-10 px-5 py-5 rounded-xl">
          <h2 className="bg-black w-full text-center text-4xl md:text-5xl tracking-wide py-2 rounded-t-xl mb-2">Tshirt Print Designs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10">
            {[...Array(TshirtDesignLength)].map((_, index) => (
              <div key={index} className="group  overflow-hidden bg-[#F7F6F2] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="hover:border-2 hover:border-cyan-700 w-full h-full md:h-full overflow-hidden">
                  <img src={`${tshirtDesignBasePath}${index + 1}.jpg`} alt={"Tshirt"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black my-5 py-5 px-3 rounded-xl flex flex-col items-center gap-5">
          <h3 className="text-3xl md:text-5xl text-center font-serif">Not sure what to pick? Let us help you out.</h3>
          <button onClick={() => navigate("/contact")} className="bg-[#2A9BF7] cursor-pointer  hover:scale-105 duration-500 w-fit px-5 py-2 rounded-sm">
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
