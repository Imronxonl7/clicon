import React, { createContext, useState } from 'react'
import { languageData } from '../language/language'


export const LanguageContext = createContext() 
const Language = ({children}) => {
    const [lang , setLang] = useState("en")
    const changeLanguage = languageData[lang]
  return (
    <LanguageContext.Provider value={{lang , setLang , changeLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default Language