import '../../src/App.css'
import React from 'react'

const Para_div = (props) => {
  return <>
    <div>
      <h1 htmlFor="" className='jshead'>{props.h1}</h1>
      <p htmlFor="" className='jspara mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
        {props.p}</p>
    </div>
  </>

}

export { Para_div }
