import React, { useContext } from 'react'

import { PopupContext } from '../context/PopupContext'

function Item(props) {

     const { name, url } = props
     const { changeUrl } = useContext( PopupContext )

     return (
          <>
               <li className='list-group-item' onClick={()=>changeUrl(url)}>{name}</li>
          </>
     )
}

export default Item;