import React from "react";

const Overlay = ({ onClick }) => {
  return (
    <div
      className={`fixed inset-0 bg-overlay transition z-40 `}
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
