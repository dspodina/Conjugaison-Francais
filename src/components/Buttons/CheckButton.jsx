"use client"; 

import Link from "next/link";

const TensesCheckButton = () => {
  return (
    <button className="bg-greenish rounded-r-lg min-w-[150px]">
      <Link className="text-lg" href="#">Check</Link>
    </button>
  );
};

export default TensesCheckButton;
