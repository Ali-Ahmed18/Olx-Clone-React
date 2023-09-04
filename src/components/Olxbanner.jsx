import React from 'react'
import { pic11 , logo2 , logo5, logo1} from '../assets/images'
import { Typography } from '@material-tailwind/react'

function Olxbanner() {
    return (
        <>
            
                <div className="flex items-center justify-between">
                    <div className="w-[47%]">
                        <img src={pic11} />
                    </div>
                    <div className='hidden 2xl:block'>
                    <Typography variant='h2'className='text-gray-900'>
                            TRY THE OLX APP
                    </Typography>
                    <Typography variant='h5' className='mt-4 text-gray-700'>Buy, sell and find just about anything using the app on your mobile.</Typography>
                    </div>
                    
                    <div className="h-[130px] border border-gray-500 mr-5">
                    </div>
                    <div className="w-[47%]">
                        <small className='font-bold'>
                            GET YOUR APP TODAY
                        </small>
                        <div className='flex gap-2 mt-3'>
                            <img className='w-[30%]' src={logo2} />
                            <img className='w-[30%]' src={logo5} />
                            <img className='w-[30%]' src={logo1} />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Olxbanner