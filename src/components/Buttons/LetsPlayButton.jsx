import Link from "next/link";

const LetsPlayButton = () => {
  return (
    <button className="bg-greenish mx-4 shadow-md mt-4 px-8 min-h-[40px] min-w-[140px] hover:bg-white rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <Link className="text-lg" href="/play">Let's play!</Link>
    </button>
  );
};

export default LetsPlayButton;