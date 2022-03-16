import React from "react";
import { ReactComponent as PrevIcon } from "../images/icon-previous.svg";
import { ReactComponent as NextIcon } from "../images/icon-next.svg";

const BtnSlider = ({ direction, moveSlide, lightbox }) => {
  return (
    <button
      onClick={moveSlide}
      className={`absolute flex items-center transition transform active:scale-90 justify-center w-8 h-8 -translate-y-1/2 md:w-12 md:h-12 rounded-full outline-none cursor-pointer top-1/2 hover:scale-110 shadow-lg  bg-bg ${
        lightbox ? "" : "md:hidden "
      } ${
        direction === "next"
          ? "right-4 md:right-0 md:translate-x-1/2 "
          : "left-4 md:left-0 md:-translate-x-1/2"
      }`}
    >
      {direction === "next" ? (
        <NextIcon className="transform scale-75" />
      ) : (
        <PrevIcon className="transform scale-75" />
      )}
    </button>
  );
};

export default BtnSlider;
