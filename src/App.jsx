import React, { useState } from 'react'
import './App.css'
import { Typography } from "@material-tailwind/react";
import MyNavbar from './components/navbar';
import NavbarCategories from './components/NavbarCategories';
import CarouselCustomNavigation from './components/CarouselCustomnavigation';
import { pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26 } from "./assets/images"
import CategoriesComp from './components/CategoriesComp';
import ItemCard from './components/itemCard';
import Olxbanner from './components/Olxbanner';
import Footer from './components/footer';

function App() {


  return (
  <div className="max-w-[1366px] mx-auto">
      <MyNavbar />
      <NavbarCategories />
      <div className="w-[96%] mx-auto">
        <div className="h-[121px] lg:h-[220px] md:h-[183px] sm:h-[164px] py-5">
          <CarouselCustomNavigation />
        </div>
        <div className="categoriesSection">
          <Typography variant='h4' className='mt-4'>
            All Categories
          </Typography>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-y-5 mt-5">
            <CategoriesComp image={pic13} text={"Mobiles"} />
            <CategoriesComp image={pic14} text={"Vehicles"} />
            <CategoriesComp image={pic15} text={"Property for Sale"} />
            <CategoriesComp image={pic26} text={"Property for Rent"} />
            <CategoriesComp image={pic16} text={"Electronics & Home Appliances"} />
            <CategoriesComp image={pic17} text={"Bikes"} />
            <CategoriesComp image={pic18} text={"Business, Industrial & Agriculture"} />
            <CategoriesComp image={pic19} text={"Services"} />
            <CategoriesComp image={pic20} text={"Jobs"} />
            <CategoriesComp image={pic21} text={"Animals"} />
            <CategoriesComp image={pic22} text={"Furniture & Home Decor"} />
            <CategoriesComp image={pic23} text={"Fashion & Beauty"} />
            <CategoriesComp image={pic24} text={"Books, Sports & Hobbies"} />
            <CategoriesComp image={pic25} text={"Kids"} />
          </div>
        </div>

          <section className='mt-16'>
            <Typography variant='h3'>
                Fresh Recommendation
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 mt-5 gap-4">
              <ItemCard image={pic1} price={"3500"} text={"Lorem ipsum dolor sit amet consectetur."} address={"North Nazimabad ,Karachi"} time={"2 days ago"} />
              <ItemCard image={pic2} price={"3500"} text={"Lorem ipsum dolor sit amet consectetur."} address={"North Nazimabad ,Karachi"} time={"2 days ago"} />
              <ItemCard image={pic3} price={"3500"} text={"Lorem ipsum dolor sit amet consectetur."} address={"North Nazimabad ,Karachi"} time={"2 days ago"} />
              <ItemCard image={pic4} price={"3500"} text={"Lorem ipsum dolor sit amet consectetur."} address={"North Nazimabad ,Karachi"} time={"2 days ago"} />
              <ItemCard image={pic5} price={"3500"} text={"Lorem ipsum dolor sit amet consectetur."} address={"North Nazimabad ,Karachi"} time={"2 days ago"} />
              <ItemCard image={pic6} price={"3500"} text={"Lorem ipsum dolor sit amet consectetur."} address={"North Nazimabad ,Karachi"} time={"2 days ago"} />
              <ItemCard image={pic7} price={"3500"} text={"Lorem ipsum dolor sit amet consectetur."} address={"North Nazimabad ,Karachi"} time={"2 days ago"} />
              <ItemCard image={pic8} price={"3500"} text={"Lorem ipsum dolor sit amet consectetur."} address={"North Nazimabad ,Karachi"} time={"2 days ago"} />

            </div>
          </section>

          <section className='mt-16' style={{backgroundColor :"#F8FAF9"}}>
               <Olxbanner/>
          </section>
      </div>
          <section className='border-t-2 border-gray-500'>
                <Footer/>
          </section>
  </div>
  )
}

export default App
