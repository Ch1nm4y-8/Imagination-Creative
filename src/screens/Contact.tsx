import { Address, MailId, MapUrl, PhoneNumber, PhoneNumber2, whatsappLink } from "../utils/Constants";
import { mailIcon, mapIcon, phoneIcon, whatsappIcon } from "./svgIcons";

const config = [
  {
    icon: mapIcon,
    title: "Address",
    content: Address,
    link: MapUrl,
  },
  {
    icon: phoneIcon,
    title: "Phone",
    content: PhoneNumber,
    link: `tel:${PhoneNumber}`,
  },
  {
    icon: phoneIcon,
    title: "Phone",
    content: PhoneNumber2,
    link: `tel:${PhoneNumber2}`,
  },
  {
    icon: mailIcon,
    title: "Mail Id",
    content: MailId,
    link: `mailto:${MailId}?subject=Contact Us&body=Hello`,
  },
];

const Contact = () => {
  return (
    <div className="bg-black h-screen overflow-hidden flex justify-between">
      <div className="background-image absolute h-full w-full  sm:w-1/3 sm:relative">
        <img src="/assets/contact.jpg" className="w-full h-full object-cover" alt="Contact" />
        <div className="absolute top-0 left-0 "></div>
      </div>
      <div className="z-10 text-white bg-[rgba(0,0,0,0.73)] md:bg-transparent w-full sm:w-2/3 mt-10 flex flex-col justify-center items-center px-6">
        <div className=" w-full max-w-lg flex flex-col md:gap-6">
          <h1 className="text-5xl font-sans border-b-4 border-white text-center pb-2">CONTACT US</h1>

          {config.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="info flex items-center gap-3 cursor-pointer group hover:bg-gray-800 p-3 rounded-md transition-all duration-300"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <div className="flex flex-col">
                <h3 className="text-sm md:text-xl font-semibold">{item.title}</h3>
                <p className="text-sm md:text-lg">{item.content}</p>
              </div>
            </a>
          ))}

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mt-6 cursor-pointer group hover:bg-green-600 p-4 rounded-md transition-all duration-300">
            <div className="group-hover:scale-110 transition-transform duration-300">{whatsappIcon}</div>
            <div className="text-lg text-white font-semibold">WhatsApp Us</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
