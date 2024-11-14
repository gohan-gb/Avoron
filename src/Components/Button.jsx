import React from 'react'

const Button = ({text='button', width ='120px', bgcolor , textcolor}) => {
  return (
    <div>
        <button style={{width:width , color:textcolor , backgroundColor:bgcolor}}
         className='className="px-4 py-2 bg-white border border-transparent rounded-e-full rounded-s-full hover:bg-black/90 hover:border-white hover:text-white transition duration-300"'>
         {text}
        </button>
    </div>
  )
}

export default Button