import { useState } from 'react'
import logo from '../assets/Logo.svg'
import React from 'react'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom'
import './index.css'
import './App.css'
function App() {
  const [islogin,setislogin]=useState(false);

  return (
    <div className='h-screen w-screen bg-richblack-900'>
       <nav className='h-[20px] pt-4 w-full'> 
       <ul class="flex flex-wrap sm:flex-col md:flex-row md:justify-evenly sm:items-center">
          <li>
            <Link to='/'><img src={logo} alt=""  height={200} width={200}/></Link>
          </li>
          <li>
            <div className='flex gap-6'>
              <Link to='/' className='text-richblack-25 text-xl'><span>Home</span></Link>
              <Link to='/'className='text-richblack-25 text-xl'><span>About</span></Link>
              <Link to='/'className='text-richblack-25 text-xl'><span>Contact</span></Link>
            </div>
          </li>
          <li>
            <div className='flex gap-3'>
              {/* not logged in */}
              {
                !islogin && 
                <Link to='/Login'  className='text-richblack-25 text-xl'><span className='w-4 bg-gray-800 p-2 rounded-lg'>Log in</span></Link>           
              }
              {
                !islogin &&
                <Link to='/SignUp' className='text-richblack-25 text-xl'><span className='w-4 bg-gray-800 p-2 rounded-lg'>Sign Up</span></Link>
              }
              {/* logged in */}
              {
                islogin && 
                <Link to='/' onClick={()=>{setislogin(false)}} className='text-richblack-25 text-xl'><span className='w-4 bg-gray-800 p-2 rounded-lg'>Log out</span></Link>           
              }
              {
                islogin &&
                <Link to='/Dashboard' className='text-richblack-25 text-xl'><span className='w-4 bg-gray-800 p-2 rounded-lg'>Dashboard</span></Link>
              }
            
            </div>
          </li>
        </ul>
       </nav>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/SignUp' element={<SignUp setislogin={setislogin} islogin={islogin}></SignUp>}></Route>
        <Route path='/Login' element={<Login setislogin={setislogin} islogin={islogin}></Login>}></Route>
       </Routes>
    </div>
  )
}

export default App