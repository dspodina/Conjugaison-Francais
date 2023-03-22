"use client";

import Link from "next/link";

const Finish = () => {
  return (
    <button className="bg-pink mx-4 shadow-md mt-4 px-8 min-h-[40px] min-w-[70px] rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <Link className="text-lg" href="#">
        Finish
      </Link>
    </button>
  );
};

export default Finish;
