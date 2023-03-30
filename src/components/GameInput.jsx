"use client";
import React, { useState } from "react";

export default function GameInput({value, onChange}) {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="..."
        className="w-9/12 rounded-l-lg pl-2 min-h-[40px] min-w-[250px]"
      />
    </div>
  );
}
