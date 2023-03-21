"use client"; 

import Link from "next/link";

const TensesNewWord = () => {
  return (
    <button className="bg-pink mx-4 shadow-md mt-4 px-8 min-h-[40px] min-w-[180px] rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <Link className="text-lg" href="#">Try a new word</Link>
    </button>
  );
};

export default TensesNewWord;
