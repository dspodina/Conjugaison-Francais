import Link from "next/link";

const SearchButton = () => {
  return (
    <button className="bg-greenish lg px-12 items-center rounded-r-lg min-h-[40px]">
      <Link className="text-lg" href="/search-result">Search</Link>
    </button>
  );
};

export default SearchButton;
