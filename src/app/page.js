"use client";

import CheckResultButton from "@/components/Buttons/CheckResultBtn.jsx";
import NewWordBtn from "@/components/Buttons/NewWordBtn.jsx";
import GetAHintBtn from "@/components/Buttons/GetAHint.jsx";
import GameInput from "@/components/GameInput.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import wellDone from "public/wellDone.svg";
import tryAgain from "public/tryAgain.svg";
import Image from "next/image";
import { randomVerb } from "src/app/utilities.js";
import { randomPronoun } from "src/app/utilities.js";
import { randomTenses } from "src/app/utilities.js";
import { useGlobalContext } from "src/app/context";

const Play = () => {
  let { verb, setVerb } = useGlobalContext();
  let { pronoun, setPronoun } = useGlobalContext();
  let { tenses, setTenses } = useGlobalContext();
  let [playResult, setPlayResult] = useState("");
  let testvariable;
  let pronounLine;
  const wrongAnswers = [
    "C'est pas vrai!",
    "I know you can do better!",
    "Come on! You can do it!",
    "Phew, you were so close!",
    "Oops!",
    "Wrong answer!",
    "Don't give up!",
    "Maybe French isn't for you?",
    "Think better!",
    "Stay calm and keep learning!",
    "No, no, no!",
  ];


  const rightAnswers = [
    "Done",
    "Proud of you!",
    "Amazing!",
    "You rock!",
    "Oops! You were right again!",
    "Keep going!",
    "You're on a roll today!",
    "Yes, yes, yes!",
    "You know it!",
    "Great job!",
    "Hope you didn't look at the answer!",
  ];


  useEffect(() => {
    setVerb(randomVerb());
    setPronoun(randomPronoun());
    setTenses(randomTenses());
  }, []);


  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const randomWrongAnswer = () => {
    const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
    return wrongAnswers[randomIndex];
  };


  const randomRightAnswer = () => {
    const randomIndex = Math.floor(Math.random() * rightAnswers.length);
    return rightAnswers[randomIndex];
  };


  const handleButtonClick = () => {
    setInputValue("");
    setPlayResult("");
    console.log("inputValue: ", inputValue);
    console.log("verb", verb);
    console.log("tenses", tenses);
    console.log("pronoun", pronoun);
    //runApiFunction();
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        // get the output array for a specific Tense
        let jp = require("jsonpath");
        let tenseArray = jp.query(response.data, getJsonPath(tenses));
        console.log(tenseArray[0]);
        // convert object into Array
        let objectToArray = Object.entries(tenseArray[0]);
        console.log(objectToArray);
        // get the output line for a specific Pronoun
        pronounLine = objectToArray[getPronounLine(pronoun)][1];
        console.log(pronounLine);
        // compare input with the dictionary
        let playResult = pronounLine.search(inputValue.toLocaleLowerCase());
        console.log(playResult);
        if (playResult > 0) {
          setPlayResult(randomRightAnswer());
        } else {
          setPlayResult(randomWrongAnswer());
          setTimeout(() => {
            setInputValue("");
          }, 3000);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  if (wrongAnswers.includes(playResult)) {
    testvariable = (
      <Image src={tryAgain} alt="" className="w-[25px] mt-5 mr-1" />
    );
  } else if (rightAnswers.includes(playResult)) {
    testvariable = (
      <Image src={wellDone} alt="" className="w-[25px] mt-5 mr-1" />
    );
  } else testvariable = "";


  const options = {
    method: "GET",
    url: "https://french-conjugaison.p.rapidapi.com/conjugate/" + verb,
    headers: {
      "X-RapidAPI-Key": "c6b0447072msh0ad8b9499e5a62dp19a111jsn6cbc311b56dc",
      "X-RapidAPI-Host": "french-conjugaison.p.rapidapi.com",
    },
  };


  const handleHint = () => {
    // setInputValue("");
    // setPlayResult("");
    axios
      .request(options)
      .then(function (response) {
        // get the output array for a specific Tense
        let jp = require("jsonpath");
        let tenseArray = jp.query(response.data, getJsonPath(tenses));
        // convert object into Array
        let objectToArray = Object.entries(tenseArray[0]);
        // get the output line for a specific Pronoun
        pronounLine = objectToArray[getPronounLine(pronoun)][1];
        console.log(pronounLine);
        let match, nounLess, result;
        if (pronounLine.includes("'"))
        {
          nounLess = pronounLine.split("'"); 
          result = nounLess[1];
        }
        else
        {
          match = pronounLine.match(/(?<=\s).*/);           
          nounLess = match[0].split("/"); 
          result = nounLess[0]
        }
        
        // compare input with the dictionary
        // pronounLine = "**"+pronounLine[1]+"**"+pronounLine[3]
        console.log(result);
        setInputValue(result)
        setTimeout(() => {
          setInputValue("");
        }, 3000);
        
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col h-3/6 justify-center items-center mt-4 md:mt-16">
      <h3 className="m-4">
        <span className="text-smokyPink uppercase text-2xl mr-2">{verb}</span>
        <span className="text-2xl italic">{tenses}</span>
      </h3>
      <div className="min-h-[40px] mt-4">
        <div className="flex flex-row justify-center items-center">
          <p className="text-2xl mr-4 capitalize">{pronoun}</p>
          <GameInput value={inputValue} onChange={handleInputChange} />
          <CheckResultButton
            value={inputValue}
            handleSubmit={handleButtonClick}
          />
        </div>
        <div className="flex flex-row justify-center">
          <p>{testvariable}</p>
          <p className="text-lg mt-4">{playResult}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-8 mb-24">
        <NewWordBtn />
        <GetAHintBtn handleInputChange={handleInputChange} onClick={handleHint} />
      </div>
    </div>
  );
};

const getJsonPath = (tenses) => {
  if (tenses === "à l'imparfait") {
    return "$.data.indicatif.imparfait";
  } else if (tenses === "au passé composé") {
    return "$.data.indicatif.passeCompose";
  } else if (tenses === "au futur simple") {
    return "$.data.indicatif.futurSimple";
  } else if (tenses === "au présent") {
    return "$.data.indicatif.present";
  } else if (tenses === "au conditionnel présent") {
    return "$.data.conditionnel.present";
  }
};

const getPronounLine = (pronoun) => {
  if (pronoun == "je") {
    return 0;
  } else if (pronoun == "tu") {
    return 1;
  } else if (pronoun == "il" || pronoun == "elle" || pronoun == "on") {
    return 2;
  } else if (pronoun == "nous") {
    return 3;
  } else if (pronoun == "vous") {
    return 4;
  } else if (pronoun == "ils" || pronoun == "elles") {
    return 5;
  }
};

export default Play;
