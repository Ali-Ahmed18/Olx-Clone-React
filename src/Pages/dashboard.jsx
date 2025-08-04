import React, { useEffect, useState } from 'react';
import { Typography } from "@material-tailwind/react";
import MyNavbar from '../components/navbar';
import NavbarCategories from '../components/NavbarCategories';
import CarouselCustomNavigation from '../components/CarouselCustomnavigation';
import CategoriesComp from '../components/CategoriesComp';
import ItemCard from '../components/itemCard';
import Olxbanner from '../components/Olxbanner';
import Footer from '../components/footer';
import { format } from "timeago.js";
import data from "../localData/index";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from "@mui/material";
import BACKEND_URI from "../../public/backend/uri.js";

function Dashboard() {
  const navigate = useNavigate();
  const compData = data;
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const fetchData = await axios.get(`${BACKEND_URI}/api/v1/post`);
      setGetData(fetchData.data.data);
      setLoading(false);

      if (!fetchData.data.status) {
        navigate("/login");
      }
    })();
  }, []);

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
            {data?.map((elem, index) => {
              const { txt, pic } = elem;
              return <CategoriesComp key={index} image={pic} text={txt} />;
            })}
          </div>
        </div>
        <section className='mt-16'>
          <Typography variant='h3'>
            Fresh Recommendation
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 mt-5 gap-4">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-[100%] mt-5">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="bg-white rounded-md p-2 shadow-md w-[270px]">
                    <div className="animate-pulse space-x-4 w-full">
                      <div className="rounded-lg bg-gray-300 h-[30vh] w-full"></div>
                      <div className="flex space-y-4 flex-col py-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4 sm:w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/4 sm:w-2/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              getData?.map((x) => {
                const { price, title, product_img_url, location, created_on, _id, likes } = x;
                return (
                  <ItemCard
                    key={_id}
                    image={product_img_url[0]}
                    price={price}
                    text={title}
                    address={location}
                    likes={likes}
                    time={format(created_on)}
                    id={_id}
                  />
                );
              })
            )}
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
  );
}

export default Dashboard;
