import React from "react";
import data from "../../json/objects.json";
import AddCart from "../Buttons/AddCart";
import NumberSelect from "../Buttons/NumberSelect";
import AddWishlist from "../Buttons/AddWishlist";
import SocialMedia from "../SocialMedia/SocialMedia";
import ColorChoice from "../Buttons/ColorChoice";
import Avis from "../Objects/Avis";

const Objects = () => {
  return (
    <div className="flex justify-center flex-col px-5 lg:px-20 py-10 w-[90%] lg:w-[50%] h-full">
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 12H1"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 17L1 12L6 7"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p className="mt-6 flex gap-3">
          <span className="label-small font-poppins text-CoolGrey">Chair </span>
          <span className="label-small font-poppin text-SpaceCadet">/</span>
          <span className="label-small font-poppin text-SpaceCadet">Meryl Lounge Chair</span>
        </p>
      </div>

      {data.map((item, index) => (
        <div className="mt-10" key={index}>
          <h2 className="font-poppins headline-large text-SpaceCadet">{item.name}</h2>
          <div className="flex justify-between mt-4 flex-col gap-2 sm:flex-row sm:gap-0">
          <p className="font-poppins title-medium text-SpaceCadet">{item.price}</p>
          <Avis />
          </div>
          <p className="font-poppins body-large text-SpaceCadet mt-8">{item.description}</p>
        </div>
      ))}
      <div className="relative ml-4 flex items-center h-8 w-full my-6">
        <ColorChoice />
      </div>
      <div className="flex max-w-96 w-full gap-10 flex-col sm:flex-row">
        <NumberSelect />
        <AddCart />
      </div>
      <p className="body-large font-poppins text-SpaceCadet mt-8">Free 3-5 day shipping • Tool-free assembly • 30-day trial</p>

      <div className="flex flex-col sm:flex-row gap-10 mt-20 justify-between">
        <AddWishlist />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Objects;
