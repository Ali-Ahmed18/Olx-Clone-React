import React, { useEffect, useState } from 'react'
import MyNavbar from '../../components/navbar'
import NavbarCategories from '../../components/NavbarCategories'
import { pic17 } from '../../assets/images'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChatIcon from '@mui/icons-material/Chat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlagIcon from '@mui/icons-material/Flag';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./singlepage.css"
import Footer from '../../components/footer'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { format } from 'timeago.js'
import { CircularProgress } from "@mui/material";
import Carousel from '../../components/carousel';
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import { likePostAction } from '../../store/slices/likePostSlice';
import { useDispatch, useSelector } from 'react-redux';
import singlePostSlice, { like, singlePostAction } from '../../store/slices/singlePostSlice';


function Singlepage() {
  const { id } = useParams()
  const {loading,data,isLiked} = useSelector((state)=> state.singlePostSlice)
  const token = localStorage.getItem("authToken")
  const user = localStorage.getItem("authUser")
  const auth = token && user
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isHeartClicked, setIsHeartClicked] = useState(isLiked);
  const { _id } = JSON.parse(localStorage.getItem('authUser')) || {};
  const handleHeartClick = () => {
    if(!_id){
      navigate("/login")
      return
    }
    
    dispatch(like())
    dispatch(likePostAction({ id, userId: _id }));
  };


  useEffect(() => {
    (async () => {
      try {
        dispatch(singlePostAction({id,userId: _id }))
      } catch (err) {
        console.log(err.message);
            navigate(`/404Page`)
      }
    })()

  }, [])
  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center h-[100vh]'>< CircularProgress size={"100px"} /></div>
      ) : (
        <>
          <MyNavbar />
          <NavbarCategories />
          <div className='w-[100%] flex justify-center mb-[15px] mt-[15px]'>
            <ul className='w-[80%] flex gap-[10px] flex-wrap'>
              <Link to={"/"}><li className='text-sm text-gray-600'>Home</li></Link>
              <span className='text-sm text-gray-600'>/</span>
              <li className='text-sm text-gray-600'>{data?.what_sell}</li>
              <span className='text-sm text-gray-600'>/</span>
              <li className='text-sm text-gray-600'>{data?.what_sell}</li>
              <span className='text-sm text-gray-600'>/</span>
              <li className='text-sm text-gray-600'>{data?.what_sell} in Lahore</li>
              <span className='text-sm text-gray-600'>/</span>
              <li className='text-sm text-gray-600'>{data?.what_sell} in Punjab</li>
              <span className='text-sm text-gray-600'>/</span>
              <li className='text-sm text-gray-600'>{data?.what_sell} in Sialkot</li>
              <span className='text-sm text-gray-600'>/</span>
              <li className='text-sm text-gray-600'>{data?.what_sell} in Islamabad</li>
            </ul>
          </div>
          <div className='w-[95%] max-w-[1200px] m-auto'>
            <div className='a632154 flex gap-[15px]'>
              <div className='a545321  w-[100%] flex flex-col gap-[15px]'>
               
                  <Carousel >
                    {data?.product_img_url.map((s, y) => {
                      return (
                        <div key={y} className='w-[100%] flex-shrink-0 bg-black'>
                           <img className='w-[100%] h-[100%] object-contain' src={s}  />
                        </div>
                      )
                    })}
                  </Carousel>
            

                <div className='border-[1px] w-[100%] p-[15px] border-gray-400 rounded flex flex-col gap-[10px]'>
                  <div className='flex justify-between'>
                    <p className='text-4xl font-bold'>Rs {data?.price}</p>
                    <div>
                    <span><ShareIcon /></span>
                    <span className='cursor-pointer' onClick={handleHeartClick}>{isLiked ? <FavoriteIcon/> : <FavoriteBorderIcon />}</span>
                    </div>
                    
                  </div>
                  <p className='text-xl font-bold'>{data?.title}</p>
                  <div className='flex justify-between'>
                    <p><LocationOnIcon />{data?.location}</p>
                    <p>{format(data?.created_on)}</p>
                  </div>
                </div>
                <div className='border-[1px] w-[100%] p-[15px] border-gray-400 rounded flex flex-col gap-[10px]'>
                  <div className='flex justify-between'>
                    <p className='text-2xl font-bold'>Details</p>
                  </div>

                  <div className='flex flex-wrap'>
                    <div className='basis-[48%] flex flex-col gap-3 mr-4 mb-3'>
                      <div className=' flex gap-1'>
                        <p className='basis-[50%]'>Brand</p>
                        <p className='basis-[50%] font-bold'>{data?.brand}</p>
                      </div>
                      <div className=' flex gap-1'>
                        <p className='basis-[50%]'>Condition</p>
                        <p className='font-bold basis-[50%]'>{data?.condition}</p>
                      </div>
                    </div>

                    <div className='basis-[48%]'>
                      <div className=' flex gap-1'>
                        <p className='basis-[50%]'>Price</p>
                        <p className='font-bold basis-[50%]'>{data?.price}</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='border-[1px] w-[100%] p-[15px] border-gray-400 rounded flex flex-col gap-[10px]'>
                  <div className='flex justify-between'>
                    <p className='text-4xl font-bold'>Description</p>
                  </div>
                  <p className='whitespace-pre-wrap text-[17px]'>{data?.description}</p>
                </div>
              </div>
              <div className='md:w-[100%] flex flex-col gap-[15px]'>
                <div className='border-[1px] w-[100%] border-gray-400 rounded p-[10px] flex flex-col items-center gap-[15px]'>
                  <div className='flex gap-[10px] w-[90%]'>
                    <img src={pic17} className='w-[70px] h-[70px] rounded-full' alt="" />
                    <div className='flex flex-col gap-[6px]'>
                      <p className='font-bold text-sm capitalize'>{data?.user_name}</p>
                      <p className='text-sm'>Member Since Dec 2018</p>
                      <p className='font-bold text-sm'>See Profile <NavigateNextIcon /></p>
                    </div>
                  </div>
                  {auth? <button className='w-[90%] p-[10px] border-[2px] border-none bg-[#002f34] text-white rounded outline-none m-auto'>
                    <PhoneIcon />
                    {data?.phone_no}
                  </button> : <Link to={"/login"} className='w-[90%]'><button className='w-[100%] p-[10px] border-[2px] border-none bg-[#002f34] text-white rounded outline-none m-auto'>
                    <PhoneIcon />
                    Show phone number
                  </button></Link>}
                  
                  <button className='w-[90%] p-[10px] border-[2px] border-black rounded outline-none m-auto'>
                    <ChatIcon />
                    Chat
                  </button>
                </div>
                <div className='border-[1px] w-[100%] border-gray-400 rounded p-[20px] flex flex-col gap-[5px]'>
                  <p className='text-2xl font-bold'>Location</p>
                  <p className=''><LocationOnIcon />{data?.location}</p>
                </div>
                <div className='flex justify-between'>
                  <p>AD ID {data?._id}</p>
                  <p><FlagIcon /> report this ad</p>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <Footer />
          </div>
        </>
      )}

    </>
  )
}

export default Singlepage
