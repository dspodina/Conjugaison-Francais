"use client";
import React, { useState } from "react";

const CheckResultButton = ({ handleSubmit, value}) => {
  return (
    <button
      onClick={handleSubmit}
      className="bg-greenish rounded-r-lg w-[100px] text-lg shadow-md min-h-[40px] hover:bg-[#ABC8B6]"
      disabled = {!value.length}
      // style={{opacity:value?1:0.7}}
    >
      Check
    </button>
  );
};

export default CheckResultButton;
