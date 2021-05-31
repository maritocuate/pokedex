import React, { useEffect, useState } from 'react';

import Item from './Item';
import Controls from './Controls';

function ListItems() {

     const [list, setList] = useState([])
     const [urlBack, setUrlBack] = useState('')
     const [urlForward, setUrlForward] = useState('')

     useEffect(() => {
          if(urlBack==='') callApiList('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
     }, [urlBack])

     const callApiList = urlApi => {
          if(!urlApi) return

          fetch(urlApi)
          .then(response => response.json())
          .then(pokes => {
               setList(pokes.results)
               setUrlBack(pokes.previous)
               setUrlForward(pokes.next)
          })
     }

     return (
          <>
               <div className='card container-list'>
                    <ul className='list-group'>
                         {
                              list.map((item, index) => <Item key={index} name={item.name} url={item.url} />)
                         }
                    </ul>
               </div>
               <Controls
                    back={() => callApiList(urlBack)} 
                    forward={() => callApiList(urlForward)}
               />
          </>
     );
}

export default ListItems;