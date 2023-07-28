import React from 'react'

const Button = ({label, handleClick}: {label:string, handleClick:()=>{}}) => {
  return (
    <button onClick={handleClick}>
        {label}
    </button>
  )
}

export default Button