import React from "react";

const Button = ({ onClick, quantity, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={quantity === 0 ? true : false}
      className="flex items-center justify-center w-full py-4 space-x-3 text-white rounded-md shadow-lg disabled:brightness-150 disabled:cursor-not-allowed hover:brightness-110 bg-primary active:translate-y-1 shadow-primary-light"
    >
      {children}
    </button>
  );
};

export default Button;
