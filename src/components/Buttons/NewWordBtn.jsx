"use client";

import React, { useState, useEffect } from "react";
import {randomVerb} from "src/app/utilities.js"
import {randomPronoun} from  "src/app/utilities.js"
import {randomTenses} from "src/app/utilities.js"
import { useGlobalContext } from "@/app/context";


const TensesNewWord = props => {
  let {setVerb, setPronoun, setTenses} = useGlobalContext()
  const handleUpdate = () => {
    setVerb(randomVerb())
    setPronoun(randomPronoun())
    setTenses(randomTenses())
  }
  return (
    <button onClick={handleUpdate} className="bg-pink text-lg mx-4 shadow-md mt-4 px-8 min-h-[40px] min-w-[180px] rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      Try a new word
    </button>
  );
};

export default TensesNewWord;
