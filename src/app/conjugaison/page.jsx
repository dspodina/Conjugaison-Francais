"use client"

import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";

const Conjugaison = () => {
  let {data} = useGlobalContext()
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl mt-16 font-caveat">
        Conjugaison du verbe: {data&&data.word}
      </h2>
    </div>
  );
};


export default Conjugaison;
