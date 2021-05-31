import React, { useState } from 'react'
import {IntlProvider} from 'react-intl'
import EnglishLang from '../lang/en-US.json'
import SpanishLang from '../lang/es-ES.json'

export const LangContext = React.createContext()

export const LangProvider = ({children}) => {

     const [locale, setLocale] = useState('en-US')
     const [messages, setMessages] = useState(EnglishLang)

     const changeLocale = (langValue) => {
          setLocale(langValue)
          
          if(langValue==="es-ES") {
               setMessages(SpanishLang) 
          }else{
               setMessages(EnglishLang)
          }
     } 

     return (
          <LangContext.Provider value={{
               locale,
               changeLocale,
               messages
          }}>
               <IntlProvider locale={locale} messages={messages}>
                    {children}
               </IntlProvider>
          </LangContext.Provider>
     )
}