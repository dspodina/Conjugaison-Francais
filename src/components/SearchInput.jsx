"use client";
import React, { useEffect, useRef } from "react";

export default function SearchInput({ value, onChange }) {
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
        placeholder="Conjugaison"
        className="rounded-l-lg pl-2 min-h-[40px] max-w-[120px] lg:min-w-[150px]"
      />
    </div>
  );
}
