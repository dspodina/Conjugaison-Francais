"use client";

const Finish = ({onClick}) => {
  return (
    <button onClick={onClick} className="bg-pink text-lg mx-4 shadow-md mt-4 px-8 min-h-[40px] min-w-[70px] rounded-lg transition duration-500 ease-in-out transform hover:bg-[#EBC2AF] hover:-translate-y-1 hover:scale-105">
      Get a hint
    </button>
  );
};

export default Finish;
