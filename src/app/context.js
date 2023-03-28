"use client"

import React, {useContext, useState} from "react";

let context = React.createContext(null)
export let useGlobalContext = () => useContext(context)

export default function ContextProvider ({children}) {
    let [data, setData] = useState(null)
    let [verb, setVerb] = useState("");
    let [pronoun, setPronoun] = useState("");
    let [tenses, setTenses] = useState("");
    return(
        <context.Provider value={{data, setData, verb, setVerb, pronoun, setPronoun, tenses, setTenses}}>{children}</context.Provider> 
    )

}