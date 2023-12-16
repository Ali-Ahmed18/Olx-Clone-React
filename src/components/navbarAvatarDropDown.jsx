import React, { useState, useEffect, useRef } from 'react';
import { profilePic } from "../assets/images"
import { Link } from "react-router-dom"

const ProfileAvatar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const user =JSON.parse(localStorage.getItem("authUser"))
  const logoutHandler = () => {
    localStorage.clear("authToken")
    localStorage.clear("authUser")
    window.location.reload(); // Page reload
  }
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div ref={dropdownRef} className="w-10 relative cursor-pointer" onClick={toggleDropdown}>
      <img src={profilePic} alt="Profile" />
      {dropdownOpen && (
        <div  className="block absolute top-12 right-0 bg-[#fff] border border-[#ccc] z-10">
          <ul className='whitespace-nowrap leading-2'>
          <li className='hover:bg-cyan-50 px-2 py-2 cursor-pointer flex items-center gap-1'>
            <img width={50} src={profilePic} alt="Profile" />
            <div>
              <p className='text-xs'>Hello,</p>
              <h1 className='capitalize font-semibold text-lg'>{`${user?.first_name} ${user?.last_name}`}</h1>
            </div>
            </li>
          <Link to={"/myads"}><li className='hover:bg-cyan-50 px-2 py-2 cursor-pointer'>My Ads</li></Link>
          <Link to={"/myfavourites"}><li className='hover:bg-cyan-50 px-2 py-2 cursor-pointer'>Favourite & saved searches</li></Link>
            <li className='hover:bg-cyan-50 px-2 py-2 cursor-pointer' onClick={logoutHandler}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
