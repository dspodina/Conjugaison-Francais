import Link from "next/link";

const CheckRules = () => {
  return (
    <button className="bg-greenish rounded min-h-[40px] w-[150px]">
      <Link className="text-lg" href="/search-result">Verb tenses</Link>
    </button>
  );
};

export default CheckRules;
