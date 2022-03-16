import React from "react";
import Overlay from "./Overlay";
import Slider from "./Slider";

const Lightbox = ({ setIsLightboxActive }) => {
  const handleCancelClick = () => {
    setIsLightboxActive(false);
  };
  return (
    <div className="absolute inset-0 z-40 justify-center hidden md:flex">
      <Overlay onClick={handleCancelClick} />
      <div className="z-50 mt-32">
        <Slider lightbox />
      </div>
    </div>
  );
};

export default Lightbox;
