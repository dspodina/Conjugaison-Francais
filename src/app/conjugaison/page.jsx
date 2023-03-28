"use client";

import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";

const Conjugaison = () => {
  let { data } = useGlobalContext();
  return data && (
    <div className="container mx-auto">
      <h2 className="text-4xl mt-16 font-caveat">
        Conjugaison du verbe: {data && data.word}
      </h2>
      <div className="flex flex-col">
        {/* {data.fullDescription} */}
       <p>{data.indicatif.present.indicatifPresentI}</p>
       <p>{data.indicatif.present.indicatifPresentYou}</p>
       <p>{data.indicatif.present.indicatifPresentHeSheIt}</p>
       <p>{data.indicatif.present.indicatifPresentWe}</p>
       <p>{data.indicatif.present.indicatifPresentYouAll}</p>
       <p>{data.indicatif.present.indicatifPresentThey}</p>
      </div>
    </div>
  ) 
};

export default Conjugaison;
