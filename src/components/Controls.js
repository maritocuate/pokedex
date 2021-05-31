import React, { useState, useEffect } from 'react';
import { IoCaretBackCircleSharp, IoCaretForwardCircleSharp } from 'react-icons/io5'

function Controls(props) {

     const {back, forward} = props
     const [limit, setLimit] = useState('disabled')
     const [page, setPage] = useState(1)

     useEffect(() => {
          (page<2) ? setLimit('disabled') : setLimit('active')
     }, [page])

     const goBack = () => {
          if(page > 1) {
               back()
               setPage(page-1)
          }
     }
     const goForward = () => {
          forward()
          setPage(page+1)
     }

     return (
          <div className='d-flex justify-content-between controls'>
               <IoCaretBackCircleSharp className={`arrow ${limit}`} onClick={() => goBack()} />
               <div className='page-num'>{page}</div>
               <IoCaretForwardCircleSharp className='arrow' onClick={() => goForward()}/>
          </div>
     );
}

export default Controls;