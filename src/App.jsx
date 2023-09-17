import React from 'react'
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

  let data = [
    {
      txt: "Mobiles",
      pic: pic13
    }
    , 
    {
      txt: "Vehicles",
      pic: pic14
    }
    , 
    {
      txt: "Property for Sale",
      pic: pic15
    }
    , 
    {
      txt: "Property for Rent",
      pic: pic26
    }
    , 
    {
      txt: "Electronics & Home Appliances",
      pic: pic16
    }
    , 
    {
      txt: "Bikes",
      pic: pic17
    }
    , 
    {
      txt: "Business, Industrial & Agriculture",
      pic: pic18
    }
    , 
    {
      txt: "Services",
      pic: pic19
    }
    , 
    {
      txt: "Jobs",
      pic: pic20
    }
    , 
    {
      txt: "Animals",
      pic: pic21
    }
    , 
    {
      txt: "Furniture & Home Decor",
      pic: pic22
    }
    , 
    {
      txt: "Fashion & Beauty",
      pic: pic23
    }
    , 
    {
      txt: "Books, Sports & Hobbies",
      pic: pic24
    }
    , 
    {
      txt: "Kids",
      pic: pic25
    }
  ]
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
            {data.map((elem,index)=>{
              const {txt, pic} = elem
               return <CategoriesComp key={index} image={pic} text={txt}/>
            })}
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
            <ItemCard image={pic8} price={"3500"} text={"Lorem ipsum dolor sit amet consectetur asbdjasdasd asbdjasd asdhasd asbdasd askdnkjasddsadas asdasda sadasd asdasd sdaasd sadddddddddddddddddddddddddddddddddddddddddddddd  asasasasasasasasd."} address={"North Nazimabad ,Karachi"} time={"2 days ago"} />

          </div>
        </section>

        <section className='mt-16' style={{ backgroundColor: "#F8FAF9" }}>
          <Olxbanner />
        </section>
      </div>
      <section className='border-t-2 border-gray-500'>
        <Footer />
      </section>
    </div>
  )
}

export default App
