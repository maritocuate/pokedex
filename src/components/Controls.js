import React, { useState } from 'react';
import { IoCaretBackCircleSharp, IoCaretForwardCircleSharp } from 'react-icons/io5'

function Controls(props) {

     const {page, setPage, back, forward} = props
     const [limit, setLimit] = useState('disabled')

     const goBack = () => {
          if(page > 1) {
               back()
               setPage(page-1)
          }
          checkLimit()
     }
     const goForward = () => {
          forward()
          setPage(page+1)
          checkLimit()
     }
     const checkLimit = () => (page<2) ? setLimit('disabled') : setLimit('active')

     return (
          <div className='d-flex justify-content-between controls'>
               <IoCaretBackCircleSharp className={`arrow ${limit}`} onClick={() => goBack()} />
               <div className='page-num'>{page}</div>
               <IoCaretForwardCircleSharp className='arrow' onClick={() => goForward()}/>
          </div>
     );
}

export default Controls;