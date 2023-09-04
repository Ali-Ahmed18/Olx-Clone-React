import React from 'react'
import {Typography } from "@material-tailwind/react";

function CategoriesComp({image,text}) {
  return (
    <>
             <div className="flex flex-col items-center cursor-pointer">
                <img className='w-[90px]' src={image}  />
                <Typography variant='h6' className='mt-1 text-center w-[85%]'>
                   {text}
                </Typography>
              </div>
    </>
  )
}

export default CategoriesComp