import React, { useEffect, useState } from 'react';
import { IoCaretBackCircleSharp, IoCaretForwardCircleSharp } from 'react-icons/io5'
import Item from './Item';

function ListItems() {

     const [list, setList] = useState([])

     useEffect(() => {
          callApiList()
     }, [])

     const callApiList = () => {
          fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=20')
          .then(response => response.json())
          .then(pokes => {
               console.log(pokes)
               setList(pokes.results)
          })
     }

     return (
          <>
               <div className='card container-list'>
                    <ul className='list-group'>
                         {
                              list.map((item, index) => <Item key={index} name={item.name}/>)
                         }
                    </ul>
               </div>
               <span className='d-flex justify-content-between controls'>
                    <IoCaretBackCircleSharp />
                    <IoCaretForwardCircleSharp />
               </span>
          </>
     );
}

export default ListItems;