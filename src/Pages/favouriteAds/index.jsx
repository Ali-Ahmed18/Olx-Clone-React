import React, { useEffect } from 'react'
import MyNavbar from '../../components/navbar'
import NavbarCategories from '../../components/NavbarCategories'
import ItemCard from '../../components/itemCard'
import axios from "axios"
import { useState } from 'react'
import { format } from 'timeago.js'
import Footer from '../../components/footer'
import { useDispatch, useSelector } from 'react-redux'
import { favouriteAdsAction } from '../../store/slices/favouriteAdsSlice'



function FavouriteAds() {
  const { loading, data } = useSelector((state) => state.favouriteAdsSlice )
  const dispatch = useDispatch()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("authUser"))
    dispatch(favouriteAdsAction(user?._id))
  }, [])
  
  return (
    <div className='flex flex-col min-h-screen'>

      <MyNavbar />
      <NavbarCategories />
      <div className='w-[80%] m-auto flex flex-col gap-[10px] mt-2 flex-1'>
        <p className='text-gray-400'>Profile</p>
        <p className='font-bold text-xl'>Favorites & Saved search</p>


        {loading ? "loading........" :
          data.length === 0 ? (<div className='flex justify-center font-bold'>No favorites yet</div>) :
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 mt-5 gap-4">
              {data?.map((x, y) => {
                const { price, title, product_img_url, location, created_on, _id, likes } = x
                return (

                  <ItemCard key={_id} image={product_img_url[0]} price={price} text={title} address={location} likes={likes} time={format(created_on)} id={_id} />
                )
              })}
            </div>

        }

      </div>
      <Footer />
    </div>
  )
}

export default FavouriteAds





