import { useState } from "react";
import Navbar from "../../components/Navbar";
import { header } from "./index.ts";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Header() {
  const [slide, setSlide] = useState(0);
  const length = header.length;

  function nextClick() {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  }

  function prevClick() {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  }

  return (
    <main className="max-w-[1440px] relative overflow-hidden">
      <Navbar />
      <div className="flex flex-shrink-0 w-full">
        {header.map((head, index) => (
          <div
            key={index}
            className={`w-full ${index === slide ? "" : "hidden"}`}
          >
            <div className="w-full h-full grid lg:grid-cols-2">
              <div>
                <img src={head.img} alt="" />
              </div>
              <div className="px-10 py-6">
                <h1 className="sm:text-3xl lg:text-5xl font-bold">
                  {head.title}
                </h1>
                <p className="pt-10 py-4 text-gray-500">{head.text}</p>
                <div className="flex items-center">
                  <p className="text-xl uppercase tracking-[20px] font-semibold">
                    shop now
                  </p>
                  <FaArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[200px] h-[70px] bg-black absolute max-sm:bottom-[57%] 
      max-sm:left-[62%] max-sm:w-[150px]  md:bottom-[32%]  lg:bottom-0 left-[50%] flex justify-between items-center">
        <IoIosArrowBack
          size={50}
          className="text-gray-300 cursor-pointer"
          onClick={prevClick}
        />
        <IoIosArrowForward
          size={50}
          className="text-gray-300 cursor-pointer"
          onClick={nextClick}
        />
      </div>
    </main>
  );
}
