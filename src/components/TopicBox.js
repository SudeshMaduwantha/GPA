import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
    const topic =" My favourite food is kottu!"
  return (
    <div>
      <div className="topicBox">
        <span className='text'>my favourite food is {props.food} price is {props.price}</span>
        {props.children}
      </div>
    </div>
  )
}
