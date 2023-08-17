"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import SearchInput from "src/components/SearchInput.jsx"
import SearchResultButton from "@/components/Buttons/SearchResultBtn.jsx";
import React, { useState } from "react";
import { useGlobalContext } from "@/app/context";


const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const {setData} = useGlobalContext()
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleButtonClick = () => {
    setInputValue("");
    fetch(`https://french-conjugaison.p.rapidapi.com/conjugate/${inputValue}`, options)
    .then(response => response.json())
    .then(response => setData(response.data))
    .catch(err => console.error(err));
    console.log(inputValue);
  };

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c6b0447072msh0ad8b9499e5a62dp19a111jsn6cbc311b56dc',
      'X-RapidAPI-Host': 'french-conjugaison.p.rapidapi.com'
    }
  };
  
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center">
        <div className="max-w-[200px] md:min-w-[200px]">
          <Link href="/">
            <Image
              src={Logo}
              alt="pa-ra-pa-parler"
            />
          </Link>
        </div>
        <div className="w-full md:flex md:flex-row hidden md:justify-end">
            <SearchInput
              value={inputValue}
              onChange={handleInputChange}
            />
            <SearchResultButton
              value={inputValue}
              handleSubmit={handleButtonClick}
            />
        </div>
      </div>
</div>
  );
};

export default Header;
