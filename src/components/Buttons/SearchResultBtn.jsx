"use client";

import Link from "next/link";

const SearchResultButton = ({ handleSubmit }) => {
  return (
    <button
      onClick={handleSubmit}
      className="bg-greenish rounded-r-lg lg:min-w-[100px] shadow-md min-w-[70px] hover:bg-[#ABC8B6]"
    >
      <Link className="text-lg" href="/conjugaison">
        Search
      </Link>
    </button>
  );
};

export default SearchResultButton;
