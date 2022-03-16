import React, { useContext } from "react";
import { actionTypes, AppContext } from "../contexts/appContext";
import Button from "./Button";
import CartItem from "./CartItem";

const Dropdown = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div
      className="absolute z-50 flex flex-col overflow-hidden rounded-lg shadow-xl top-cart-mob left-5 right-5 bg-bg md:top-cart-desktop md:-right-10 md:left-auto md:w-80"
      style={{ minHeight: "250px" }}
    >
      <div className="flex items-center justify-between border-b shadow-sm border-primary-light">
        <p className="px-6 py-6 text-sm font-bold text-secondary-dark">Cart</p>
        {state.length > 0 && (
          <p
            className="px-6 py-6 text-xs font-bold underline cursor-pointer text-secondary-gray hover:text-primary"
            onClick={() => dispatch({ type: actionTypes.CLEAR_CART })}
          >
            Clear All
          </p>
        )}
      </div>
      {/* CONTENT */}
      <div className="relative flex-1 px-6 py-4 ">
        {/* List of items below */}

        {state.length === 0 ? (
          <p className="absolute text-sm font-bold transform -translate-x-1/2 -translate-y-3/4 text-secondary-gray top-1/2 left-1/2">
            Your cart is empty
          </p>
        ) : (
          <div className="">
            <div>
              {state.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                  actionTypes={actionTypes}
                />
              ))}
            </div>
            {/* Checkout Button */}
            <div className="mt-6">
              <Button>
                <p className="text-xs font-bold"> Checkout</p>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
