/* eslint-disable react/prop-types */

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div
      className={`relative py-[30px] px-5 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${bgColor} ${textColor}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2 className="text-[26px] leading-9 font-bold mb-4">{name}</h2>
      <p className="text-[16px] leading-7 font-medium mb-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-6">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-gray-700 flex items-center justify-center group transition-all duration-300 hover:bg-blue-600 hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white text-gray-700 w-6 h-6 transition-all duration-300" />
        </Link>

        <span
          className="absolute bottom-4 right-4 w-[44px] h-[44px] flex items-center justify-center text-[18px] font-bold rounded-full shadow-md bg-white"
          style={{
            backgroundColor: "#ffffff",
            color: bgColor,
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
