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
    <div className="container mx-auto my-4 flex lg:flex-row h-[100px] lg:h-[150px] justify-between items-center">
      <div className="">
        <Link href="/">
          <Image
            src={Logo}
            alt="pa-ra-pa-parler"
            className="w-[200px] md:items-center"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-end mx-4">
        <SearchInput value={inputValue} onChange={handleInputChange} />
        <SearchResultButton  value={inputValue}
            handleSubmit={handleButtonClick}/>
      </div>
    </div>
  );
};

export default Header;
