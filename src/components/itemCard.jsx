import { Typography } from '@material-tailwind/react'
import React from 'react'

function ItemCard({image,price,text,address,time}) {
    return (
        <>
            
                <div className='border border-gray-300 rounded overflow-hidden cursor-pointer'>
                    <div className="bg-gray-800"><img className=' w-[100%] h-[170px] object-contain sm:object-cover md:object-cover lg:object-cover' src={image}/></div>
                    <div className="px-4 py-5">
                        <Typography variant='h5' className='flex justify-between'>Rs {price}
                            <button>                
	                            <svg className="fill-current w-6 h-auto stroke-black stroke-[10px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	                              <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
	                            </svg>
                            </button>
                        </Typography>
                        <Typography className='line-clamp-2'>{text}</Typography>
                        <Typography  className='text-gray-700 text-sm leading-6 mt-2'>{address}<br />{time}</Typography>
                    </div>
                </div>
            
        </>
    )
}

export default ItemCard