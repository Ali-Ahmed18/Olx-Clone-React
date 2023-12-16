import { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likePostAction } from '../store/slices/likePostSlice';
import { useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ItemCard({ image, price, text, address, time, id , likes}) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const { _id } = JSON.parse(localStorage.getItem('authUser')) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleHeartClick = () => {
    if(!_id){
      navigate("/login")
      return
    }
    setIsHeartClicked(!isHeartClicked)
    dispatch(likePostAction({ id, userId: _id }));
  };
  useEffect(()=>{
     const isLiked = likes.includes(_id);
     setIsHeartClicked(isLiked)
  },[])

  return (
    <>
      <div className='border border-gray-300 rounded overflow-hidden cursor-pointer'>
        <Link to={`/singlepage/${id}`}>
          <div className="bg-gray-800">
            <img className='w-[100%] h-[170px] object-contain sm:object-cover md:object-cover lg:object-cover' src={image} alt="Item" />
          </div>
        </Link>

        <div className="px-4 py-5 relative">
        <button className='absolute top-4 right-4' onClick={handleHeartClick}>
        {isHeartClicked ? <FavoriteIcon/> : <FavoriteBorderIcon />}
      </button>
          <Link to={`/singlepage/${id}`}>
            <Typography variant='h5' className='flex justify-between'>
              Rs {price}
            </Typography>
            <Typography className='line-clamp-2'>{text}</Typography>
            <Typography className='text-gray-700 text-sm leading-6 mt-2'>
              {address}<br />{time}
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ItemCard;


