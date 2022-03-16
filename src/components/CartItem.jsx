import React from "react";
import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";
import productThumnail from "../images/image-product-1-thumbnail.jpg";

const CartItem = ({ item, dispatch, actionTypes }) => {
  return (
    <div className="flex items-center mt-1 space-x-3">
      <div className="w-12 h-12 overflow-hidden rounded-md">
        <img
          src={productThumnail}
          alt="cart-item"
          className="object-cover w-full h-full"
        />
      </div>
      {/* details */}
      <div className="flex-1 ">
        <p className="text-sm text-secondary-gray">{item.name}</p>
        <p className="">
          $
          <span className="text-sm text-secondary-gray">
            {item.price * 1}.00 x {item.quantity * 1}
          </span>{" "}
          <span className="text-sm font-bold text-secondary-dark"> = $</span>
          <span className="text-sm font-bold text-secondary-dark">
            {item.price * item.quantity}.00
          </span>
        </p>
      </div>
      {/* delete icon */}
      <DeleteIcon
        className="transform cursor-pointer hover:fill-primary active:translate-y-1"
        onClick={() =>
          dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: item.id })
        }
      />
    </div>
  );
};

export default CartItem;
