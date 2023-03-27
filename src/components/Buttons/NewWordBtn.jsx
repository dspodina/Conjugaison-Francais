"use client";

import Link from "next/link";

const TensesNewWord = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <button onClick={handleReload} className="bg-pink text-lg mx-4 shadow-md mt-4 px-8 min-h-[40px] min-w-[180px] rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      Try a new word
    </button>
  );
};

export default TensesNewWord;
