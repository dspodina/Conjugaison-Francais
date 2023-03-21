import Link from "next/link";

const LetsPlay = () => {
  return (
    <button className="bg-greenish rounded min-h-[40px] w-[150px] mx-4">
      <Link className="text-lg" href="/play">Let's play!</Link>
    </button>
  );
};

export default LetsPlay;