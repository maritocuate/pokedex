import React, { useContext } from 'react'
import {IoFlagSharp} from 'react-icons/io5'

import { LangContext } from '../context/LangContext'

function LangMenu() {

     const { changeLocale } = useContext(LangContext)

     return (
          <nav>
               <IoFlagSharp />
               <p>
                    <span onClick={()=>changeLocale('en-US')}>EN</span> | 
                    <span onClick={()=>changeLocale('es-ES')}> ES</span>
               </p>
          </nav>
     )
}

export default LangMenu;