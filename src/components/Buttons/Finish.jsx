"use client"; 

import Link from "next/link";

const Finish = () => {
  return (
    <button className="bg-pink rounded min-w-[150px] min-h-[40px]">
      <Link className="text-lg" href="#">Finish</Link>
    </button>
  );
};

export default Finish;