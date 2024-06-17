import React from "react";

const Avis = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex ">
        <div className="star h-4 w-4 bg-MikadoYellow "></div>
        <div className="star h-4 w-4 bg-MikadoYellow"></div>
        <div className="star h-4 w-4 bg-MikadoYellow"></div>
        <div className="star h-4 w-4 bg-MikadoYellow"></div>
        <div className="star h-4 w-4 bg-gradient-to-r from-40% from-MikadoYellow to-CoolGrey"></div>
      </div>
      <span className="font-poppins text-SpaceCadet body-large">4.6 / 5.0 </span>
      <span className="font-poppins text-CoolGrey body-large">(556)</span>
    </div>
  );
};

export default Avis;
