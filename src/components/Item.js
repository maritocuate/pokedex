import React from 'react'

function Item(props) {

     const {name} = props

     return (
          <li className='list-group-item'>{name}</li>
     )
}

export default Item;