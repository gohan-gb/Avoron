import React from 'react'

const ButtonTwo = ({text='button', bgColor , textColor, hoverColor}) => {
  return (
    <div>
        <button style={{ color:textColor , backgroundColor:bgColor}}
         className='className="px-4 py-2 bg-dark border border-transparent rounded-e-full rounded-s-full hover:bg-white/90 text-white hover:border-dark hover:text-dark transition duration-300 w-fit px-4'>
         <nobr>{text}</nobr> 
        </button>
    </div>
  )
}

export default ButtonTwo