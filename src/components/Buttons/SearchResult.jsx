"use client"; 

import Link from "next/link";

const SearchResultButton = () => {
  return (
    <button className="bg-greenish rounded-r-lg min-w-[100px] shadow-md min-h-[40px]">
      <Link className="text-lg" href="/conjugaison">Search</Link>
    </button>
  );
};

export default SearchResultButton;
