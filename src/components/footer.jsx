import React from 'react'
import { logo1, logo10, logo2, logo4, logo5, logo6, logo9 } from '../assets/images'
import styles from "./footer.module.css"
function Footer() {
  return (
    <>
            <div className={`flex justify-between py-5 w-[96%] mx-auto ${styles.footerList}`}>
      
      <ul>
        <li className="font-bold text-sm mb-2">POPULAR CATEGORIES</li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Cars</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Flats for rent</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Mobile Phones</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Jobs</a></li>
      </ul>
    
    
      <ul>
        <li className="font-bold text-sm mb-2">TREANDING SEARCHES</li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Cars</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Flats for rent</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Mobile Phones</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Jobs</a></li>
      </ul>
    
    
      <ul>
        <li className="font-bold text-sm mb-2">ABOUT US</li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Cars</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Flats for rent</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Mobile Phones</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Jobs</a></li>
      </ul>
    
    
      <ul>
        <li className="font-bold text-sm mb-2">OLX</li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Cars</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Flats for rent</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Mobile Phones</a></li>
        <li><a className='text-xs text-gray-700  hover:text-black' href="#">Jobs</a></li>
      </ul>
    
    <div className="footercategories-lastflex">
       
         <li className="list-none font-bold mb-2">Follow Us</li>
       
       <div className='flex gap-2'>
          <img width="30" className='cursor-pointer' src={logo4} alt=""/>
          <img width="30" className='cursor-pointer' src={logo9} alt=""/>
          <img width="30" className='cursor-pointer' src={logo10} alt=""/>
          <img width="30" className='cursor-pointer' src={logo6} alt=""/>
       </div>
       <div className='flex gap-2 mt-6'>
        <img width="90" className='cursor-pointer' src={logo2}/>
        <img width="90" className='cursor-pointer' src={logo5}/>
        <img width="90" className='cursor-pointer' src={logo1}/>
       </div>
    </div>
  </div>
  <div className="bg-[#012F34] p-[15px] text-sm text-right">
            <span className='text-white'>Free Classifieds in Pakistan . © 2006-2023 OLX</span>
        </div>
    </>
  )
}

export default Footer