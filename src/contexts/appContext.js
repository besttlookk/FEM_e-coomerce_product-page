import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      const newState1 = [...state, payload];
      localStorage.setItem("sneakers-cart", JSON.stringify(newState1));
      return newState1;

    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter((item) => item.id !== payload); // payload will be the id of item to remove
      localStorage.setItem("sneakers-cart", JSON.stringify(newState2));
      return newState2;

    case actionTypes.CLEAR_CART:
      localStorage.removeItem("sneakers-cart");
      return [];

    default:
      return state;
  }
};

const initailValue = JSON.parse(localStorage.getItem("sneakers-cart")) || [];

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailValue);
  const [isLightboxActive, setIsLightboxActive] = useState(false);

  const values = { state, dispatch, isLightboxActive, setIsLightboxActive };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
