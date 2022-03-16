import React, { useContext, useState } from "react";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";
import BtnSlider from "./BtnSlider";
import { AppContext } from "../contexts/appContext";
import { ReactComponent as CancelIcon } from "../images/icon-close.svg";

const Slider = ({ lightbox }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const imageArr = [image1, image2, image3, image4];
  const thumbArr = [thumb1, thumb2, thumb3, thumb4];

  const { setIsLightboxActive } = useContext(AppContext);

  const nextSlide = () => {
    if (slideIndex !== imageArr.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imageArr.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imageArr.length);
    }
  };

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  return (
    <div
      className={`relative overflow-hidden h-72 md:rounded-2xl md:overflow-visible ${
        lightbox ? " md:h-lightbox md:w-lightbox " : " md:h-96 md:w-96 "
      }`}
    >
      {/* Slide */}

      {imageArr.map((imageSrc, index) => (
        <div className="absolute inset-0" key={index}>
          <img
            alt="product"
            src={imageSrc}
            className={`object-cover w-full h-full md:object-top transition ease-in duration-300 md:rounded-2xl ${
              slideIndex === index + 1 ? "opacity-1" : "opacity-0"
            }`}
            onClick={
              lightbox
                ? () => {}
                : () => {
                    setIsLightboxActive(true);
                  }
            }
          />
        </div>
      ))}

      {/* Buttons */}
      <BtnSlider moveSlide={nextSlide} direction={"next"} lightbox={lightbox} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} lightbox={lightbox} />

      {/* container-dots:only for small screens */}
      <div className="absolute flex space-x-2 left-1/2 bottom-4 -tranlate-x-1/2 md:hidden">
        {Array.from({ length: imageArr.length }).map((_, index) => (
          <div
            className={`${
              slideIndex === index + 1 ? "bg-primary" : "bg-primary-light"
            } w-3 h-3 transition rounded-full cursor-pointer shadow-inner transform hover:scale-110 active:scale-90`}
            onClick={() => handleDotClick(index + 1)}
            key={index}
          ></div>
        ))}
      </div>

      {/* container - thumbnails : only larger screen*/}
      <div
        className={`absolute left-0 right-0 bottom-auto hidden md:flex  ${
          lightbox
            ? "justify-center space-x-6 top-thumb-light"
            : "justify-between top-thumb"
        }`}
      >
        {thumbArr.map((imageSrc, index) => (
          <div
            className={` w-20 h-20 transition rounded-xl cursor-pointer overflow-hidden hover:opacity-50 transform ${
              slideIndex === index + 1
                ? "border-4 opacity-50 border-primary bg-white-overlay z-30"
                : ""
            }`}
            onClick={() => handleDotClick(index + 1)}
            key={index}
          >
            <img
              alt="thumb"
              src={imageSrc}
              className={`w-full h-full object-cover ${
                slideIndex === index + 1 ? "z-20" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* CANCLE BTN FOR LIGHTBOX */}
      {lightbox && (
        <div className="absolute z-50 right-2 -top-8 text-primary ">
          <CancelIcon
            className="cursor-pointer cancel-icon"
            onClick={() => setIsLightboxActive(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Slider;
