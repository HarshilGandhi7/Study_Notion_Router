import Template from "./Template"
import { useState } from "react"
import Sign from '../../assets/signup.png'
import  google from '../../assets/google.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from "react-router-dom";


export default function SignUp(props){
    const setislogin=props.setislogin;
    const islogin=props.islogin;
    const [cat,setcat]=useState(true);
    const [passvisible,setpassvisible]=useState(false);
    const [confirmvisible,setconfirmvisible]=useState(false);
    function Category(){
        setcat(!cat)
    }
    const [formdata,setformdata]=useState({
        FirstName:'',
        LastName:'',
        Email:'',
        Createpass:'',
        Confirmpass:'',
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
    function togglePasswordVisibility1(){
        setconfirmvisible(!confirmvisible);
    }
    const navigate=useNavigate();
    function dashboardHandler(event){
        if(formdata.FirstName && formdata.LastName && formdata.Email && formdata.Createpass && formdata.Createpass==formdata.Confirmpass){
            setislogin(true);
            navigate('/dashboard')
            toast.success('Signed Up Successfully');
        }else{
            event.preventDefault();
            toast.error('Please Fill All The Fields Correctly',{autoclose:1000});
        }
    }
    console.log(formdata);
    return (
        <div className="mt-20 px-6 md:px-20 lg:px-32 xl:px-40 relative flex flex-col md:flex-row bg-richblack-900">
          <div className='w-full md:w-1/2 sm:mb-8 md:mb-0 md:mr-8 '>
            <Template
              heading={"Join the millions learning to code with StudyNotion for free"}
              subheading={"Build skills for today, tomorrow, and beyond."}
              subheading_blue={"Education to future-proof your career."}
            />
            <div className="flex flex-row gap-3 bg-gray-300 w-fit p-[10px] rounded-2xl mt-4">
              <button
                onClick={Category}
                className={`${
                  cat ? "bg-blue-950 p-[8px] rounded-xl text-white" : "p-[8px] rounded-xl"}`}>
                Student
              </button>
              <button
                onClick={Category}
                className={`${
                  !cat ? "bg-blue-950 p-[8px] rounded-xl text-white" : "p-[8px] rounded-xl"
                }`}
              >
                Instructor
              </button>
            </div>
            <form className="mt-4" onSubmit={dashboardHandler}>
              <div className="flex flex-row gap-4 w-3/4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="FirstName" className=' text-richblack-25'>
                    First Name <sup className="text-red-600">*</sup>
                  </label>
                  <input
                    required
                    type="text"
                    name="FirstName"
                    placeholder="Enter First Name"
                    value={formdata.FirstName}
                    onChange={ChangeHandler}
                    className="block w-full rounded-lg px-3 py-2 mt-1  bg-gray-800"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="LastName" className=' text-richblack-25'>
                    Last Name <sup className="text-red-600">*</sup>
                  </label>
                  <input
                    required
                    type="text"
                    name="LastName"
                    placeholder="Enter Last Name"
                    value={formdata.LastName}
                    onChange={ChangeHandler}
                    className="block w-full  bg-gray-800 rounded-lg px-3 py-2 mt-1"
                  />
                </div>
              </div>
    
              <div className="w-3/4 mt-4">
                <label htmlFor="Email" className="text-richblack-25 mt-4">
                    Email <sup className="text-red-600">*</sup>
                </label>
                <input
                required
                    type="email"
                    name="Email"
                    placeholder="Enter email address"
                    value={formdata.Email}
                    onChange={ChangeHandler}
                    className="block w-full  bg-gray-800 rounded-lg px-3 py-2 mt-1"
                />
              </div>
    
              <div className="flex flex-row gap-4 w-3/4 mt-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="Createpass" className="text-richblack-25">
                    Create Password <sup className="text-red-600">*</sup>
                  </label>
                  <div className="relative">
                    <input
                    required
                      type={passvisible ? "text" : "password"}
                      name="Createpass"
                      placeholder="Enter Password"
                      value={formdata.Createpass}
                      onChange={ChangeHandler}
                      className="block w-full  bg-gray-800 rounded-lg px-3 py-2 mt-1"
                    />
                    <FontAwesomeIcon
                      icon={passvisible ? faEyeSlash : faEye}
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="Confirmpass" className="text-richblack-25">
                    Confirm Password <sup className="text-red-600">*</sup>
                  </label>
                  <div className="relative">
                    <input
                    required
                      type={confirmvisible ? "text" : "password"}
                      name="Confirmpass"
                      placeholder="Enter Password"
                      value={formdata.Confirmpass}
                      onChange={ChangeHandler}
                      className="block w-full rounded-lg bg-gray-800 px-3 py-2 mt-1"
                    />
                    <FontAwesomeIcon
                      icon={confirmvisible ? faEyeSlash : faEye}
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                      onClick={togglePasswordVisibility1}
                    />
                  </div>
                </div>
              </div>
    
              <button
              className='bg-yellow-500 py-2 px-4 rounded-md text-black font-medium w-3/4 item-center mt-5'
              type='submit'>
              Create Account
              </button>
              <div className="flex flex-row items-center mt-5 w-3/4">
                <div className="flex-1 border-b border-gray-400"></div>
                <div className="mx-3 text-gray-400">OR</div>
                <div className="flex-1 border-b border-gray-400"></div>
              </div>
              <button className='flex items-center justify-center mt-4 border border-gray-800 p-2 rounded-md w-3/4'>
                <img src={google} alt='Google' className='w-5 h-5' />
                <div className='ml-2 text-richblack-25 '>Sign in with Google</div>
            </button>
            </form>
          </div>
          <div className='w-full md:w-1/2 relative'>
            <img src={Sign} alt="SignUp" />
          </div>
        </div>
      );
}