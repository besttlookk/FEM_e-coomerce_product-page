import React, { useContext, useState } from "react";
import { Button, Slider } from "./components";
import { v4 as uuidv4 } from "uuid";

import Header from "./layouts/Header";
import { ReactComponent as AddIcon } from "./images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "./images/icon-minus.svg";
import { ReactComponent as CartIcon } from "./images/icon-cart.svg";

import { AppContext } from "./contexts/appContext";
import { actionTypes } from "./contexts/appContext";
import Lightbox from "./components/Lightbox";

function App() {
  const [quantity, setQuantity] = useState(0);
  const qunatityInStock = 12;

  const { dispatch, isLightboxActive, setIsLightboxActive } =
    useContext(AppContext);

  const handleReduceQuantity = () => {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  };

  const handleIncreaseQuantity = () => {
    if (quantity === qunatityInStock) return;
    setQuantity((prev) => prev + 1);
  };

  // Add items to cart
  const addToCart = () => {
    const item = {
      id: uuidv4(), //generating random id
      name: "Fall Limited Edition Sneakers",
      price: 125,
      quantity,
      src: "../images/image-product-1-thumbnail.jpg",
    };
    dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
    setQuantity(0);
  };

  return (
    <div className="relative min-h-screen bg-bg font-primary">
      {isLightboxActive && (
        <Lightbox setIsLightboxActive={setIsLightboxActive} />
      )}
      {/* Wrapper for overall design */}
      <div className="mx-auto max-w-7xl">
        <Header />
        <main className="md:mt-20 md:grid md:grid-cols-2 md:items-center md:px-28">
          <section>
            <Slider />
          </section>
          <section className="p-6 md:pt-16 md:pr-12">
            <p className="text-sm font-bold tracking-wide uppercase text-primary">
              sneaker company
            </p>
            <h2 className="mt-2 text-3xl font-bold md:mt-3 md:text-4xl text-secondary-dark">
              Fall limited Edition <span className="block">Sneakers</span>
            </h2>
            <p className="mt-3 md:mt-6 text-secondary-gray">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer
            </p>
            {/* price section */}
            <div className="flex items-center justify-between mt-5 md:flex-col md:justify-start md:space-y-1 md:items-start">
              <div className="flex items-center">
                <span className="inline-block mr-4 text-3xl font-bold text-secondary-dark">
                  $125.00
                </span>
                <span className="inline-block px-1 py-1 font-bold rounded-md bg-primary-light text-primary">
                  50%
                </span>
              </div>
              <div>
                <span className="font-bold line-through text-secondary-light">
                  $250.00
                </span>
              </div>
            </div>
            {/* add to cart section */}
            <div className="mt-4 md:flex md:space-x-4 md:mt-5">
              <div className="flex items-center justify-between py-2 bg-gray-100 rounded-md md:w-36">
                <MinusIcon
                  className="ml-4 transform scale-110 cursor-pointer text-primary"
                  onClick={handleReduceQuantity}
                />
                <span className="text-lg font-bold text-secondary-dark">
                  {quantity}
                </span>
                <AddIcon
                  className="mr-4 transform scale-110 cursor-pointer text-primary"
                  onClick={handleIncreaseQuantity}
                />
              </div>
              <div className="mt-2 md:mt-0 md:flex-1">
                <Button onClick={addToCart} quantity={quantity}>
                  <>
                    <CartIcon className="cart-icon" />
                    <span className="text-sm font-bold">Add a cart</span>
                  </>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
