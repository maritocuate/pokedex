import React, { useEffect, useState } from 'react';

import Item from './Item';
import Controls from './Controls';

function ListItems() {

     const [list, setList] = useState([])
     const [urlBack, setUrlBack] = useState('')
     const [urlForward, setUrlForward] = useState('')
     const [page, setPage] = useState(1)

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
                              list.map((item, index) => <Item key={index} name={item.name}/>)
                         }
                    </ul>
               </div>
               <Controls
                    page={page}
                    setPage={setPage}
                    back={() => callApiList(urlBack)} 
                    forward={() => callApiList(urlForward)}
               />
          </>
     );
}

export default ListItems;