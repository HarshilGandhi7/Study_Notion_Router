import login from '../../assets/login.png'
import Template from "./Template"
import { useState } from "react"
import  google from '../../assets/google.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import frame from '../../assets/frame.png'
import '../index.css'
export default function Login(props){
    const setislogin=props.setislogin;
    const islogin=props.islogin;
    const [passvisible,setpassvisible]=useState(true)
    const [formdata,setformdata]=useState({
        Email:'',
        Createpass:'',
    })
    function ChangeHandler(event){
        const { name, value } = event.target;
        setformdata((prevformdata)=>({
            ...prevformdata,
            [name]:value,
        }))
    }
    function togglePasswordVisibility(){
        setpassvisible(!passvisible);
    }
    const navigate=useNavigate();
    function dashboardHandler(event){
        if(formdata.Email && formdata.Createpass){
            setislogin(true);
            navigate('/Dashboard');
            toast.success("Succesfully Signed In")
        }else{  
            event.preventDefault();
            toast.error("Please Fill All Fields",{autoclose:1500});
        }
    }
    return (
        <div className='mt-20 px-6 md:px-20 lg:px-32 xl:px-40 relative flex flex-col md:flex-row bg-richblack-900'>
      {/* Left Column - Form */}
      <div className='w-full md:w-1/2 sm:mb-8 md:mb-0 md:mr-8 '>
        <Template
          heading={"Welcome Back"}
          subheading={"Build skills for today, tomorrow, and beyond."}
          subheading_blue={"Education to future-proof your career."}
        />
        <form className='mt-6' onSubmit={dashboardHandler}>
          <label htmlFor='Email' className='text-richblack-25'>Email Address <sup className='text-red-600'>*</sup></label>
          <br />
          <input
            required
            className='required mt-1 px-3 py-2 mb-3 w-3/4 border border-gray-300 rounded bg-gray-800'
            type='email'
            name='Email'
            placeholder='Enter email address'
            value={formdata.Email}
            onChange={ChangeHandler}
          />
          <br />
          <label htmlFor='Createpass' className=' text-richblack-25 '>Create Password <sup className='text-red-600'>*</sup></label>
          <br />
          <div className='relative'>
            <input
              required
              type={passvisible ? 'text' : 'password'}
              name='Createpass'
              placeholder='Enter Password'
              value={formdata.Createpass}
              onChange={ChangeHandler}
              className='mt-1 px-3 py-2 w-3/4 border border-gray-300 rounded bg-gray-800'
            />
            <FontAwesomeIcon
              icon={passvisible ? faEye : faEyeSlash}
              className='absolute right-[28%] top-4 text-gray-400 cursor-pointer'
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className='mt-1 text-sm text-richblack-600 cursor-pointer text-blue-500'>Forgot Password</div>
          <button className='mt-4 bg-yellow-500 py-2 px-4 rounded-md text-black font-medium w-3/4 item-center' type='submit'>Sign In</button>
          <div className='flex items-center mt-4 w-3/4'>
            <div className='flex-grow border-t border-gray-300'></div>
            <div className='mx-4 text-sm text-richblack-25'>OR</div>
            <div className='flex-grow border-t border-gray-300'></div>
          </div>
          <button className='flex items-center justify-center mt-4 border border-gray-800 p-2 rounded-md w-3/4'>
            <img src={google} alt='Google' className='w-5 h-5' />
            <div className='ml-2 text-richblack-25 '>Sign in with Google</div>
          </button>
        </form>
      </div>

      {/* Right Column - Image */}
      <div className='w-full md:w-1/2 relative'>
        <img src={login} alt='Login' className='object-cover w-full h-auto md:rounded-lg z-2' />
      </div>
    </div>
    )
}