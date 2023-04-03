"use client";
import React, { useEffect, useRef } from "react";

export default function GameInput({ value, onChange }) {
  let input = useRef();
  useEffect(() => {
    if (!value) {
      input.current.focus();
    }
  }, [value]);
  return (
    <div>
      <input
        ref={input}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="..."
        className="w-9/12 rounded-l-lg pl-2 min-h-[40px] min-w-[200px] lg:min-w-[250px]"
      />
    </div>
  );
}
