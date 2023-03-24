"use client"

import React, {useContext, useState} from "react";

let context = React.createContext(null)
export let useGlobalContext = () => useContext(context)

export default function ContextProvider ({children}) {
    let [data, setData] = useState(null)
    return(
        <context.Provider value={{data, setData}}>{children}</context.Provider> 
    )

}