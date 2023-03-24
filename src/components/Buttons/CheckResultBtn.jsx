"use client";
import React, { useState } from "react";

const CheckResultButton = ({ handleSubmit }) => {
  return (
    <button
      onClick={handleSubmit}
      className="bg-greenish rounded-r-lg w-[100px] text-lg shadow-md min-h-[40px] hover:bg-[#ABC8B6]"
    >
      Check
    </button>
  );
};

export default CheckResultButton;
