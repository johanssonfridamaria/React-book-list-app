import React, {useState} from 'react'

export default function Book({book}) {

  const [isSelected, setIsSelected] = useState(false)

  const changeColor = ()=>{
    setIsSelected(!isSelected)
  }

  return (
  <li className={`list-group-item ${isSelected ? 'changeColor' : ''}`} onClick={changeColor}>
    {book.title}
  </li>
  )
}
