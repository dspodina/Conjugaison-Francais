"use client";
import React, { useState } from "react";

export default function SearchInput({value, onChange}) {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Voir conjugaison du verbe"
        className="rounded-l-lg pl-2 min-h-[40px] min-w-[200px]"
      />
    </div>
  );
}
