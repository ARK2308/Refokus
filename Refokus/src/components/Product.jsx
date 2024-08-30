import React from 'react'
import Button from './Button'

const Product = (elem  ) => {
  return (
    <div className='w-full py-5   '>
        <div className='max-w-screen-xl mx-auto h-48 text-black flex justify-between items-center mt-10 bg-red-100 '>
            <h1 className='text-4xl'>{elem.title}</h1>
            <div className='dets w-1/3'>
            <p className='mb-10'>{elem.description}</p>
            <Button/>
            </div>
        </div>
      
    </div>
  )
}

export default Product