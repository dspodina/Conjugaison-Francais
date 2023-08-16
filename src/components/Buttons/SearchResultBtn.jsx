"use client";
import Link from "next/link";
import React from "react";

const SearchResultButton = ({ handleSubmit, value }) => {
  return (
    <>
      {value.length > 0 ? (
        <button
          onClick={handleSubmit}
          className="rounded-r-lg lg:min-w-[100px] min-w-[70px]"
        >
          <Link className="text-lg" href="/conjugaison">
            Search
          </Link>
        </button>
      ) : (
        <button
          className="bg-greenish hover:bg-[#c4dbcd] text-lg rounded-r-lg lg:min-w-[100px] min-w-[70px] opacity-90 cursor-not-allowed"
          disabled
        >
          Search
        </button>
      )}
    </>
  );
};

export default SearchResultButton;
