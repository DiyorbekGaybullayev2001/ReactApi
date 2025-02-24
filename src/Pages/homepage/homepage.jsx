
import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
// import Main from '../Main/Main'
// import Categories from '../categories/categories'
import Categories from '../categories/categories'
import Dashboard from '../dashboard/dashboart'
import Brands from '../brands/brands'
import Cities from '../cities/cities'
import Locations from '../locations/locations'
import Models from '../models/models'
import Cars from '../cars/cars'
import { AiFillBell } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import adminimg from '../../imgs/adminimg.png'
import { LuLayoutDashboard } from "react-icons/lu";
import { GrTasks } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaGripVertical } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function Homepage() {
  const navigate = useNavigate()

  // const logoutfc = () => {
  //   localStorage.removeItem("tokencha")
  //   navigate("/")
  // }

  return (
    <>
      <div className='flex'>
        <div className='flex'>
          <nav className='bg-[#ffffff] block h-[100vh] w-[300px] shadow-md'>
            <ul className=''>
              <li className=' px-[15px] mt-[120px] m-[10px] rounded-lg'>
                <NavLink to="" activeClassName="text-yellow-500">
                  <div className='flex items-center hover:text-blue-600'>
                    <img src={adminimg} alt="admin img" className='h-[50px] w-[50px] rounded-full'/>
                    <div className='ml-[10px]'>
                      <p className='text-[20px] font-serif'>Sierra Ferguson</p>
                      <p className='text-[12px] font-serif'>s.ferguson@gmail.com</p>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li className='text-[20px] font-semibold mt-[50px] px-[15px] flex items-center gap-1 m-[10px] rounded-lg hover:bg-blue-500 hover:text-white'>
              <LuLayoutDashboard/>
                <NavLink to="/home/dashboard" activeClassName="text-yellow-500 flex"> 
                  Dashboard</NavLink>
              </li>
              {/* <li className='text-[25px] font-semibold px-[15px] rounded-lg hover:bg-blue-600 hover:text-white m-[10px]'>
                <NavLink to="/home/categories" activeClassName="text-yellow-500">Categories</NavLink>
              </li> */}
              <li className='text-[20px] font-semibold flex items-center gap-2 px-[15px] rounded-lg hover:bg-blue-500 hover:text-white m-[10px]'>
                <GrTasks/>
                <NavLink to="/home/brands" activeClassName="text-yellow-500">Tasks</NavLink>
              </li>
              <li className='text-[20px] font-semibold flex items-center gap-2 px-[15px] rounded-lg hover:bg-blue-500 hover:text-white m-[10px]'>
                <MdOutlineMail/>
                <NavLink to="/home/cities" activeClassName="text-yellow-500">Email</NavLink>
              </li>
              <li className='text-[20px] font-semibold flex items-center gap-2 px-[15px] rounded-lg hover:bg-blue-500 hover:text-white m-[10px]'>
                <FaRegUser/>
                <NavLink to="/home/categories" activeClassName="text-yellow-500">Contact</NavLink>
              </li>
              <li className='text-[20px] font-semibold flex items-center gap-2 px-[15px] rounded-lg hover:bg-blue-500 hover:text-white m-[10px]'>
                <MdOutlineChatBubbleOutline/>
                <NavLink to="/home/locations" activeClassName="text-yellow-500">Chat</NavLink>
              </li>
              <li className='text-[20px] font-semibold flex items-center gap-2 px-[15px] rounded-lg hover:bg-blue-500 hover:text-white m-[10px]'>
                <FaGripVertical/>
                <NavLink to="/home/model" activeClassName="text-yellow-500">Deals</NavLink>
              </li>
              <hr />
              <li className='text-[20px] font-semibold flex items-center gap-2 px-[15px] rounded-lg hover:bg-blue-500 hover:text-white m-[10px]'>
                <IoSettingsOutline/>
                <NavLink to="/home/cars" activeClassName="text-yellow-500">Settings</NavLink>
              </li>
            </ul>
          </nav>

          <div className='shadow-md bg-white fixed w-full h-[80px] flex justify-between items-center'>
            <h1 className='text-[30px] font-serif px-[50px] mt-[15px] text-blue-700'>SaaS Kit</h1>
            <div className='flex shadow-md rounded-lg'>
              <IoSearchSharp className=' text-blue-500 text-[25px] m-[10px]'/>
              <input type="text" className='outline-none border-none p-[10px] w-[500px]' placeholder='Global search'/>
            </div>
            {/* <button onClick={logoutfc} className="bg-red-500 p-4 m-[10px] rounded-lg text-white">Log Out</button> */}
            <AiFillBell className='mr-[50px] text-blue-500 text-[25px] '/>
          </div>
        </div>

        {/* Asosiy Kontent Tashqi Qism */}
        <div className="flex-1">
          <Routes>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="categories" element={<Categories />} />
            <Route path="brands" element={<Brands/>} />
            <Route path="cities" element={<Cities/>} />
            <Route path="locations" element={<Locations/>} />
            <Route path="model" element={<Models/>} />
            <Route path="cars" element={<Cars/>} />
            {/* <Route path="/*" element={<Homepage/>} />  */}
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Homepage





// import React, { useState } from 'react';
// import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
// import { AiFillBell } from "react-icons/ai";
// import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { GrTasks } from "react-icons/gr";
// import { MdOutlineMail, MdOutlineChatBubbleOutline } from "react-icons/md";
// import { FaRegUser, FaGripVertical } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";
// import adminimg from '../../imgs/adminimg.png';
// import Dashboard from '../dashboard/dashboart';
// import Categories from '../categories/categories';
// import Brands from '../brands/brands';
// import Cities from '../cities/cities';
// import Locations from '../locations/locations';
// import Models from '../models/models';
// import Cars from '../cars/cars';

// function Homepage() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   return (
//     <div className='flex'>
//       {/* Sidebar */}
//       <div className={`bg-[#ffffff] h-[100vh] shadow-md transition-all duration-300 ${isSidebarOpen ? 'w-[300px]' : 'w-[80px]'}`}>
//         <div className='flex justify-between items-center p-4'>
//           {isSidebarOpen && <h1 className='text-[20px] font-bold text-blue-600 font-serif'>SaaS Kit</h1>}
//           <IoMenu className='text-[25px] cursor-pointer' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
//         </div>
//         <ul>
//           <li className='px-[15px] mt-[20px] flex items-center'>
//             <img src={adminimg} alt='admin' className='h-[50px] w-[50px] rounded-full' />
//             {isSidebarOpen && <div className='ml-[10px]'>
//               <p className='text-[16px] font-serif'>Sierra Ferguson</p>
//               <p className='text-[12px] font-serif'>s.ferguson@gmail.com</p>
//             </div>}
//           </li>
//           <li className='sidebar-item flex items-center gap-2'><NavLink to='/home/dashboard'><LuLayoutDashboard /> {isSidebarOpen && 'Dashboard'}</NavLink></li>
//           <li className='sidebar-item'><NavLink to='/home/brands'><GrTasks /> {isSidebarOpen && 'Tasks'}</NavLink></li>
//           <li className='sidebar-item'><NavLink to='/home/cities'><MdOutlineMail /> {isSidebarOpen && 'Email'}</NavLink></li>
//           <li className='sidebar-item'><NavLink to='/home/categories'><FaRegUser /> {isSidebarOpen && 'Contact'}</NavLink></li>
//           <li className='sidebar-item'><NavLink to='/home/locations'><MdOutlineChatBubbleOutline /> {isSidebarOpen && 'Chat'}</NavLink></li>
//           <li className='sidebar-item'><NavLink to='/home/model'><FaGripVertical /> {isSidebarOpen && 'Deals'}</NavLink></li>
//           <li className='sidebar-item'><NavLink to='/home/cars'><IoSettingsOutline /> {isSidebarOpen && 'Settings'}</NavLink></li>
//         </ul>
//       </div>

//       {/* Header & Content */}
//       <div className='flex-1'>
//         <div className='shadow-md bg-white fixed w-full h-[80px] flex justify-between items-center px-6'>
//           {/* <h1 className='text-[25px] font-serif text-blue-700'>SaaS Kit</h1> */}
//           <div className='flex shadow-md rounded-lg'>
//             <IoSearchSharp className='text-blue-500 text-[25px] m-[10px]' />
//             <input type='text' className='outline-none border-none p-[10px] w-[500px]' placeholder='Global search' />
//           </div>
//           <AiFillBell className='mr-[50px] text-blue-500 text-[25px] '/>
//         </div>

//         {/* Routes */}
//         <div className='mt-[80px] p-4'>
//           <Routes>
//             <Route path='dashboard' element={<Dashboard />} />
//             <Route path='categories' element={<Categories />} />
//             <Route path='brands' element={<Brands />} />
//             <Route path='cities' element={<Cities />} />
//             <Route path='locations' element={<Locations />} />
//             <Route path='model' element={<Models />} />
//             <Route path='cars' element={<Cars />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homepage;






