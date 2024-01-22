import React from 'react'

type Color = "red" | "blue" | "green"

type buttonProps = {
    backgroundColor: Color,
    fontSize: number,
    pillShape ?: boolean,
    padding: [number, number],
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Button = ({backgroundColor, fontSize, pillShape, count, setCount}: buttonProps) => {
    console.log(pillShape)
  return (
    <div>
      <button className='p-5 bg-blue-600 text-slate-50 rounded- lg m-10' onClick={() => setCount((prevState) => prevState+1)}>
       Click me! {count} 
      </button>
    </div>
  )
}

export default Button
