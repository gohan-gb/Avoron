import React from 'react'

const MarginWrapper = ({children}) => {
    return (
      <div className='mx-4 sm:mx-8 lg:mx-16 2xl:mx-32 ' >
          {children}
      </div>
    )
  }
  
  export default MarginWrapper