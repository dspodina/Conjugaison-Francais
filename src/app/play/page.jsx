"use client";

import CheckResultButton from "@/components/Buttons/CheckResultBtn.jsx";
import NewWordBtn from "@/components/Buttons/NewWordBtn.jsx";
import FinishBtn from "@/components/Buttons/FinishBtn.jsx";
import GameInput from "@/components/GameInput.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jp from "jsonpath";
import wellDone from "public/wellDone.svg";
import tryAgain from "public/tryAgain.svg";
import Image from "next/image";
import { randomVerb } from "src/app/utilities.js";
import { randomPronoun } from "src/app/utilities.js";
import { randomTenses } from "src/app/utilities.js";
import { useGlobalContext } from "../context";

const Play = () => {
  let { verb, setVerb } = useGlobalContext();
  let { pronoun, setPronoun } = useGlobalContext();
  let { tenses, setTenses } = useGlobalContext();
  let [playResult, setPlayResult] = useState("");
  let testvariable;
  let pronounLine;
  useEffect(() => {
    setVerb(randomVerb());
    setPronoun(randomPronoun());
    setTenses(randomTenses());
  }, []);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
        let tenseArray = jp.query(response.data, getJsonPath(tenses));
        console.log(tenseArray[0]);
        // convert object into Array
        let objectToArray = Object.entries(tenseArray[0]);
        console.log(objectToArray);
        // get the output line for a specific Pronoun
        pronounLine = objectToArray[getPronounLine(pronoun)][1];
        console.log(pronounLine);
        // compare input with the dictionary
        let playResult = pronounLine.search(inputValue);
        console.log(playResult);
        if (playResult > 0) {
          setPlayResult("Bravo!");
        } else {
          setPlayResult("Oops! Wrong answer!");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (playResult === "Oops! Wrong answer!") {
    testvariable = (
      <Image src={tryAgain} alt="" className="w-[25px] mt-5 mr-1" />
    );
  } else if (playResult === "Bravo!") {
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

  return (
      <div>
        <div>
          <h2 className="text-4xl flex justify-center mt-12 font-caveat">
            Let's learn the verbs!
          </h2>
        </div>
        <div className="text-2xl flex justify-center mt-16">
          <h3>
            <span className="text-smokypink capitalize">{verb}</span> {tenses}{" "}
          </h3>
        </div>
        <div className="min-h-[40px] mt-4">
          <div className="flex flex-row justify-center">
            <p className="text-2xl font-caveat mr-4 capitalize">{pronoun}</p>
            <GameInput value={inputValue} onChange={handleInputChange} />
            <CheckResultButton handleSubmit={handleButtonClick} />
          </div>
          <div className="flex flex-row justify-center">
            <p>{testvariable}</p>
            <p className="text-xl mt-4">{playResult}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-8 mb-24">
          <NewWordBtn />
          <FinishBtn />
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
