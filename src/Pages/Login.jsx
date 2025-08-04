import React, { useRef, useState } from 'react'
import {login} from "../assets/images.jsx"
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MyNavbar from '../components/navbar.jsx';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../store/slices/loginSilce.js';


function Login() {
    const [hide , setHide] = useState(false)
    const navigate = useNavigate()
    const email  = useRef("")
    const password  = useRef("")
    const dispatch = useDispatch()
    // const [loading , setLoading] = useState(false)
    const {loading} = useSelector((state)=> state.loginSlice)
    
    const loginHandler = async (e)=>{
        e.preventDefault()
        
        try{
            if(!email.current.value || !password.current.value){
                alert("required fields are missing!")
                
                return
            }
           
            
            dispatch(loginAction({email : email.current.value,password:password.current.value,navigate}))



        }catch(err){
                
                console.log(err.message);
        }
    }
    return (
        <>
          <MyNavbar/>
                <form onSubmit={loginHandler} className=' max-w-[500px] m-auto mt-5 flex flex-col gap-[15px] p-[20px] '>
                <h1 className='text-center font-bold text-xl text-gray-600'>Login in</h1>
                <div className='w-[100%] flex justify-center'>
                    <div className='w-[60%] '>
                        <img src={login} className='w-[100%] h-[100%] object-contain' alt="" />
                    </div>
                </div>
                    <div className='w-[100%] flex flex-col justify-center items-center'>
                        <div className='w-[80%]'>
                        <p className='mb-[10px] text-gray-600'>Phone number</p>
                        </div>
                        <div className='w-[80%] flex gap-[20px] border-[1px] border-black p-[10px] rounded'>
                            <PhoneEnabledIcon />
                            <input ref={email} type="text" className='w-[90%] focus: outline-none' placeholder='Enter your email' />
                        </div>
                    </div>
                    <div className='w-[100%] flex flex-col justify-center items-center'>
                        <div className='w-[80%]'>
                        <p className='mb-[10px] text-gray-600'>Password</p>
                        </div>
                        <div className='w-[80%] flex gap-[20px] border-[1px] border-black p-[10px] rounded'>
                            <HttpsIcon />
                            <input ref={password} type={hide ? "text" : "password"} className='w-[85%] focus: outline-none' placeholder='Enter your password' />
                            <span className='cursor-pointer' onClick={()=> setHide(!hide)}>
                               {hide ? <VisibilityIcon /> : <VisibilityOffIcon/>} 
                            </span>
                        </div>
                    <p className='text-end w-[80%] text-blue-600 text-sm cursor-pointer'>Forget password?</p>
                    </div>
                    <button disabled={loading} className={`${loading ? "cursor-not-allowed" : "cursor-pointer"} text-center w-[80%] m-auto rounded p-[7px] bg-indigo-400 text-white cursor-pointer`} >{loading ? <CircularProgress size={"1.5rem"} sx={{ color: "#fff" }} /> : "Submit"}</button>
                    <p className='text-center w-[95%]'>don't have an accout? <span onClick={()=> navigate("/signup")} className='text-blue-600 cursor-pointer'>Sign up</span></p>
                    </form>
          
        </>
    )
}

export default Login