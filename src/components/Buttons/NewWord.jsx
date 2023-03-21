"use client"; 

import Link from "next/link";

const TensesNewWord = () => {
  return (
    <button className="bg-pink rounded min-w-[150px] mr-12 min-h-[40px]">
      <Link className="text-lg" href="#">Try new word</Link>
    </button>
  );
};

export default TensesNewWord;
