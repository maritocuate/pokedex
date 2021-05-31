import React, { useContext, useEffect, useState } from 'react';
import { GiWeight, GiBroadsword, GiSwordsEmblem } from 'react-icons/gi'

import { PopupContext } from '../context/PopupContext';

function Popup() {

     const [loading, setLoading] = useState(true)
     const [pokeInfo, setPokeInfo] = useState({})
     const { url, status, closePopup } = useContext( PopupContext )

     useEffect(() => {
          if(url==='') return

          setLoading(true)
          fetch(url)
          .then(response => response.json())
          .then(poke => {
               setPokeInfo(poke)
               setLoading(false)
          })
     }, [status])

     return (
          <div className='popup-container' style={{'display':status}}>
               {
                    ( Object.keys(pokeInfo).length>0 ) ? 
                         <div className="card">
                              {
                                   loading && 
                                        <span className='loader'>
                                             <div className='spinner-border' role='status'></div>
                                        </span>
                              }
                              <img className="card-img-top" src={pokeInfo.sprites.other.dream_world.front_default} alt={pokeInfo.name}/>
                              <div className="card-body">
                                   <h5 className="card-title">{pokeInfo.name}</h5>
                                   <span className="card-text">
                                        <ul>
                                             <li><GiWeight /> Weight: {pokeInfo.weight}</li>
                                             <li><GiBroadsword /> Order: {pokeInfo.order}</li>
                                             <li><GiSwordsEmblem /> Experience: {pokeInfo.base_experience}</li>
                                        </ul>
                                   </span>
                              </div>
                              <button type="button" className="btn btn-danger btn-lg m-2 btn-block" onClick={()=>closePopup()}>Close</button>
                         </div>
                    : null
               }
               
          </div>
     );
}

export default Popup;