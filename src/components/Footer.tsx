import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-black text-white h-[10vw] gap-2 border-t-2 border-t-[#202020] py-15 sm:py-10 flex flex-col justify-center items-center">
      <img className="w-[4vh] sm:w-[3vmax]" src="/assets/logo.png" alt="" />
      <img className="w-[15vh] sm:w-[10vw]" src="/assets/foot.png" alt="" />

      <pre className="text-sm">&copy; {new Date().getFullYear()} Imagination Creative • Terms • Privacy</pre>
    </div>
  );
};

export default Footer;
