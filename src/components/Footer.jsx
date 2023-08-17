import SearchInput from "src/components/SearchInput.jsx"
import SearchResultButton from "@/components/Buttons/SearchResultBtn.jsx";
import React, { useState } from "react";
import { useGlobalContext } from "@/app/context";
import { Container } from "postcss";


const Footer = () => {
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
    <footer className="bg-greenish text-lg p-4">
      <div className="container mx-auto my-6 md:my-4 flex flex-col md:items-start items-center justify-between">
        <div>
          <p>2023 © Pa-ra-pa-parler</p>
        </div>
        <div className="flex md:hidden md:justify-end mt-4 md:mt-0">
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
    </footer>
    
  );
};

export default Footer;
