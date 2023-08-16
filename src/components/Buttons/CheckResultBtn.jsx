"use client";
import React from "react";

const CheckResultButton = ({ handleSubmit, value}) => {
  return (
    <button
      onClick={handleSubmit}
      className="bg-greenish rounded-r-lg w-[100px] text-lg shadow-md min-h-[40px] hover:bg-[#c4dbcd]"
      disabled = {!value.length}
    >
      Check
    </button>
  );
};

export default CheckResultButton;
