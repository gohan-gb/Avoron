import React from 'react'

const Button = ({text='button', bgColor , textColor, hoverColor}) => {
  return (
    <div>
        <button style={{ color:textColor , backgroundColor:bgColor}}
         className='className="px-4 py-2 bg-white border border-transparent rounded-e-full rounded-s-full hover:bg-black/90 hover:border-white hover:text-white transition duration-300 w-fit px-4'>
         <nobr>{text}</nobr> 
        </button>
    </div>
  )
}

export default Button