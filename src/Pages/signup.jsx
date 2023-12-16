import React, { useRef, useState } from 'react'
import { login } from "../assets/images.jsx"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate()
    const email = useRef("")
    const password = useRef("")
    const firstName = useRef("")
    const lastName = useRef("")
    const age = useRef("")
    const gender = useRef("")
    const [isLoading , setIsLoading] = useState(false)
    const loginHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            if (!email.current.value || !password.current.value || !firstName.current.value || !lastName.current.value || !age.current.value || gender.current.selectedIndex == 0) {
                alert("required fields are missing!")
                return
            }
    
            const objToSend = {
                email: email.current.value,
                password: password.current.value,
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                age: age.current.value,
                gender: gender.current.value
            }

             const signup = await axios.post("http://localhost:5000/api/v1/createuser",objToSend)
           setIsLoading(false)

            if(signup.data.status){
                navigate("/login")
            }

        } catch (err) {
            console.log(err.message);
            setIsLoading(false)

        }
    }
    return (
        <>

            <form onSubmit={loginHandler} className=' max-w-[500px] m-auto mt-5 flex flex-col gap-[15px] p-[20px] '>
                <h1 className='text-center font-bold text-xl text-gray-600'>Signup</h1>
                <div className='w-[100%] flex flex-col justify-center items-center'>
                    <div className='w-[80%]'>
                        <p className='mb-[8px] text-gray-600'>First Name</p>
                    </div>
                    <div className='w-[80%] border-[1px] border-black p-[10px] rounded'>

                        <input ref={firstName} type="text" className='w-[90%] focus: outline-none' placeholder='Enter your first name' />
                    </div>
                </div>
                <div className='w-[100%] flex flex-col justify-center items-center'>
                    <div className='w-[80%]'>
                        <p className='mb-[8px] text-gray-600'>Last Name</p>
                    </div>
                    <div className='w-[80%] border-[1px] border-black p-[10px] rounded'>

                        <input ref={lastName} type="text" className='w-[90%] focus: outline-none' placeholder='Enter your last name' />
                    </div>
                </div>
                <div className='w-[100%] flex flex-col justify-center items-center'>
                    <div className='w-[80%]'>
                        <p className='mb-[8px] text-gray-600'>Email</p>
                    </div>
                    <div className='w-[80%] border-[1px] border-black p-[10px] rounded'>

                        <input ref={email} type="text" className='w-[90%] focus: outline-none' placeholder='Enter your email' />
                    </div>
                </div>
                <div className='w-[100%] flex flex-col justify-center items-center'>
                    <div className='w-[80%]'>
                        <p className='mb-[8px] text-gray-600'>Age</p>
                    </div>
                    <div className='w-[80%] border-[1px] border-black p-[10px] rounded'>

                        <input ref={age} type="number" className='w-[90%] focus: outline-none' placeholder='Enter your email' />
                    </div>
                </div>
                <div className='w-[100%] flex flex-col justify-center items-center'>
                    <div className='w-[80%]'>
                        <p className='mb-[8px] text-gray-600'>Gender</p>
                    </div>
                    <select ref={gender} defaultValue="Select Gender" className='w-[80%] border-[1px] focus: outline-none border-black p-[10px] rounded'>
                        <option value="Select Gender" disabled={true}>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
                <div className='w-[100%] flex flex-col justify-center items-center'>
                    <div className='w-[80%]'>
                        <p className='mb-[8px] text-gray-600'>Password</p>
                    </div>
                    <div className='w-[80%] border-[1px] border-black p-[10px] rounded'>
                        <input ref={password} type="text" className='w-[90%] focus: outline-none' placeholder='Enter your Password' />
                    </div>
                </div>
                <button disabled={isLoading} className={`text-center w-[80%] m-auto rounded p-[7px] bg-indigo-400 text-white ${isLoading ? "cursor-not-allowed" : "cursor-pointer"} `} >Signup</button>
                <p className='text-center w-[95%]'>Already have an accout? <span onClick={() => navigate("/login")} className='text-blue-600 cursor-pointer'>Log in</span></p>
            </form>

        </>
    )
}

export default Signup