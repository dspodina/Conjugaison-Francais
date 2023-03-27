"use client";

import CheckResultButton from "@/components/Buttons/CheckResultBtn.jsx";
import NewWordBtn from "@/components/Buttons/NewWordBtn.jsx";
import FinishBtn from "@/components/Buttons/FinishBtn.jsx";
import GameInput from "src/components/GameInput.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jp from "jsonpath";

const Play = () => {
  let [verb, setVerb] = useState("");
  let [pronoun, setPronoun] = useState("");
  let [tenses, setTenses] = useState("");
  let [playResult, setPlayResult] = useState("");
  useEffect(() => {
    setVerb(randomVerb());
    setPronoun(randomPronoun());
    setTenses(randomTenses());
  }, []);
  const randomVerb = () => {
    const verbs = [
      "être",
      "pleurer",
      "avoir",
      "aller",
      "faire",
      "enregistrer",
      "pêcher",
      "dire",
      "tousser",
      "rougir",
      "revêtir",
      "remettre",
      "frapper",
      "répandre",
      "presser",
      "refléter",
      "gérer",
      "rejeter",
      "mélanger",
      "reconduire",
      "méprendre",
      "jurer",
      "soutenir",
      "secouer",
      "ressentir",
      "louer",
      "nommer",
      "informer",
      "geindre",
      "féliciter",
      "éviter",
      "endormir",
      "emprunter",
      "dépenser",
      "conseiller",
      "confondre",
      "cheminer",
      "causer",
      "blaguer",
      "augmenter",
      "arracher",
      "annoncer",
      "admirer",
      "adjoindre",
      "acquérir",
      "accueillir",
      "accrocher",
      "accourir",
      "accorder",
      "acclamer",
      "tomber",
      "souhaiter",
      "visiter",
      "remplacer",
      "reconnaître",
      "noter",
      "enseigner",
      "effacer",
      "décrire",
      "cuire",
      "coûter",
      "goûter",
      "ajouter",
      "allumer",
      "éteindre",
      "traduire",
      "épeler",
      "laver",
      "annuler",
      "permettre",
      "oser",
      "accompagner",
      "signer",
      "répéter",
      "remercier",
      "arranger",
      "inviter",
      "crier",
      "craindre",
      "approcher",
      "épouser",
      "supposer",
      "maintenir",
      "détester",
      "danser",
      "embrasser",
      "pardonner",
      "rire",
      "intéresser",
      "amuser",
      "terminer",
      "refuser",
      "accepter",
      "présenter",
      "chanter",
      "conduire",
      "choisir",
      "préparer",
      "offrir",
      "préférer",
      "coucher",
      "utiliser",
      "recevoir",
      "adorer",
      "agir",
      "expliquer",
      "vendre",
      "décider",
      "apporter",
      "bouger",
      "compter",
      "valoir",
      "fermer",
      "rencontrer",
      "sauver",
      "répondre",
      "raconter",
      "pouvoir",
      "continuer",
      "toucher",
      "emmener",
      "quitter",
      "monter",
      "lire",
      "rappeler",
      "acheter",
      "gagner",
      "retrouver",
      "écrire",
      "servir",
      "prier",
      "porter",
      "asseoir",
      "garder",
      "boire",
      "apprendre",
      "envoyer",
      "marcher",
      "occuper",
      "dormir",
      "excuser",
      "changer",
      "ouvrir",
      "tirer",
      "payer",
      "commencer",
      "devenir",
      "entrer",
      "manger",
      "travailler",
      "oublier",
      "tenir",
      "rendre",
      "vivre",
      "rentrer",
      "sentir",
      "perdre",
      "finir",
      "jouer",
      "revenir",
    ];
    const randomIndex = Math.floor(Math.random() * verbs.length);
    return verbs[randomIndex];
  };
  const randomPronoun = () => {
    const pronoun = [
      "je",
      "tu",
      "il",
      "elle",
      "on",
      "vous",
      "nous",
      "ils",
      "elles",
    ];
    const randomIndex = Math.floor(Math.random() * pronoun.length);
    return pronoun[randomIndex];
  };
  const randomTenses = () => {
    const tenses = [
      "à l'imparfait",
      "au passé composé",
      "au futur simple",
      "au présent",
      "au conditionnel présent",
    ];
    const randomIndex = Math.floor(Math.random() * tenses.length);
    return tenses[randomIndex];
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("inputValue: ", inputValue);
    console.log("verb", verb);
    console.log("tenses", tenses);
    console.log("pronoun", pronoun);
    //runApiFunction();
    axios
      .request(options)
      .then(function (response) {
        //console.log(response.data);
        // get the output array for a specific Tense
        let tenseArray = jp.query(response.data, getJsonPath(tenses));
        console.log(tenseArray[0]);
        // convert object into Array
        let objectToArray = Object.entries(tenseArray[0]);
        console.log(objectToArray);
        // get the output line for a specific Pronoun
        let pronounLine = objectToArray[getPronounLine(pronoun)][1];
        console.log(pronounLine);
        //compare input with the dictionry
        let playResult = pronounLine.search(inputValue);
        console.log(playResult);
        if (playResult >= 0) {
          setPlayResult("Well done!");
        } else {
          setPlayResult("Try again!");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

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
          <span className="text-smokypink capitalize">{verb}</span> {tenses}
        </h3>
      </div>
      <div className="min-h-[40px] mt-4">
        <div className="flex flex-row justify-center">
        <p className="text-2xl font-caveat mr-4 capitalize">{pronoun}</p>
        <GameInput value={inputValue} onChange={handleInputChange} />
        <CheckResultButton handleSubmit={handleButtonClick} />
        </div>
        <div>
          <p className="text-xl flex justify-center mt-4">{playResult}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-8 mb-24">
        <NewWordBtn />
        <FinishBtn />
      </div>
    </div>
  );
};

function getJsonPath(tenses) {
  if (tenses == "à l'imparfait") {
    return "$.data.indicatif.imparfait";
  } else if (tenses == "au passé composé") {
    return "$.data.indicatif.passeCompose";
  } else if (tenses == "au futur simple") {
    return "$.data.indicatif.futurSimple";
  } else if (tenses == "au présent") {
    return "$.data.indicatif.present";
  } else if (tenses == "au conditionnel présent") {
    return "$.data.conditionnel.present";
  }
}

function getPronounLine(pronoun) {
  if (pronoun == "je") {
    return 0;
  } else if (pronoun == "tu") {
    return 1;
  } else if (pronoun == "il" || pronoun == "elle" || pronoun == "on") {
    return 2;
  } else if (pronoun == "vous") {
    return 3;
  } else if (pronoun == "nous") {
    return 4;
  } else if (pronoun == "ils" || pronoun == "elles") {
    return 5;
  }
}

export default Play;
