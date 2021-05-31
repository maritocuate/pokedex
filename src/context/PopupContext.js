import { createContext, useState } from "react";

export const PopupContext = createContext()

export const PopupProvider = ({ children }) => {
     
     const [url, setUrl] = useState('')
     const [status, setStatus] = useState('none')

     const changeUrl = path => {
          setUrl(path)
          setStatus('flex')
     }

     const closePopup = () => setStatus('none')

     return(
          <PopupContext.Provider value={{
               url,
               status,
               changeUrl,
               closePopup
          }}>
               { children }
          </PopupContext.Provider>
     )

}