import React, { useState } from "react";
import objects from '../../json/objects.json';

const Caroussels = () => {
  const images = objects.map(item => [item.image1, item.image2, item.image3, item.image4, item.image5]);

  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedImg, setSelectedImg] = useState(images[0][0]);

  const handleItemClick = (index) => {
    if (index >= 0 && index < images[0].length) {
      setSelectedItem(index);
      setSelectedImg(images[0][index]);
    }
  };

  const handlePrevClick = () => {
    handleItemClick((selectedItem - 1 + images[0].length) % images[0].length);
  };

  const handleNextClick = () => {
    handleItemClick((selectedItem + 1) % images[0].length);
  };

  return (
    <div className="w-full flex-1">
      <div className="flex flex-col items-center lg:items-end px-20">
        <div className="flex flex-col gap-4">
        <div className="flex items-center w-full headline-medium font-poppins gap-4">
          <span className=" text-SpaceCadet max-w-10 w-full min-w-10">0{selectedItem + 1}</span>
          <span className="text-CoolGrey text-center max-w-10 w-full min-w-10">/</span>
          <span className="text-CoolGrey max-w-10 w-full min-w-10">0{images[0].length}</span>
        </div>
        <div className="flex gap-20">
        <button onClick={handlePrevClick} className="minus">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#17183B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button onClick={handleNextClick} className="plus">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#17183B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        </div>
        </div>
        
      </div>

      <div className="flex items-center w-full h-96 relative">
        <img className="absolute w-full h-full object-contain z-10" draggable="false" src={selectedImg} alt="" />
        <div className="absolute right-0 h-64 w-[50%] to-80% bg-gradient-to-l from-[#4B8785] -z-10 opacity-40"></div>
      </div>

      <div className="flex justify-center gap-4 rounded-md px-8">
        {images[0].map((img, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(index)}
            className={`cursor-pointer border-2 max-w-20 w-full rounded-md border-FrenchGrey p-2 ${
              selectedItem === index ? "border-Verdigris" : ""
            }`}
          >
            <img className="rounded-md flex h-full object-cover items-center w-full" src={img} alt=""  draggable="false"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caroussels;
