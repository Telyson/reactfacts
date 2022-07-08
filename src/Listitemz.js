import React from 'react'

export default function Listitemz(props) {
  return (
    <div>
        <li style={{color:'white',margin:'15px 40px'}}>
          {props.list}
        </li>
    </div>
  )
}