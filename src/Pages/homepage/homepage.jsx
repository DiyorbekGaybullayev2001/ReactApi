import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import Main from '../Main/Main'
// import Categories from '../categories/categories'
import Categories from '../categories/categories'
import Dashboard from '../dashboard/dashboart'
import Brands from '../brands/brands'
import Cities from '../cities/cities'
import Locations from '../locations/locations'
import Models from '../models/models'
import Cars from '../cars/cars'

function Homepage() {
  const navigate = useNavigate()

  const logoutfc = () => {
    localStorage.removeItem("tokencha")
    navigate("/")
  }

  return (
    <>
      <div className='flex'>
        <div className='flex'>
          <nav className='bg-[#0e1685] block h-[100vh] w-[300px]'>
            <ul className='text-white'>
              <li className='text-[25px] font-semibold px-[15px] mt-[100px] m-[10px] hover:bg-[#2c2cb8]'>
                <NavLink to="/home/dashboard" activeClassName="text-yellow-500">Dashboard</NavLink>
              </li>
              <li className='text-[25px] font-semibold px-[15px] hover:bg-[#2c2cb8] m-[10px]'>
                <NavLink to="/home/categories" activeClassName="text-yellow-500">Categories</NavLink>
              </li>
              <li className='text-[25px] font-semibold px-[15px] hover:bg-[#2c2cb8] m-[10px]'>
                <NavLink to="/home/brands" activeClassName="text-yellow-500">Brands</NavLink>
              </li>
              <li className='text-[25px] font-semibold px-[15px] hover:bg-[#2c2cb8] m-[10px]'>
                <NavLink to="/home/cities" activeClassName="text-yellow-500">Cities</NavLink>
              </li>
              <li className='text-[25px] font-semibold px-[15px] hover:bg-[#2c2cb8] m-[10px]'>
                <NavLink to="/home/locations" activeClassName="text-yellow-500">Locations</NavLink>
              </li>
              <li className='text-[25px] font-semibold px-[15px] hover:bg-[#2c2cb8] m-[10px]'>
                <NavLink to="/home/model" activeClassName="text-yellow-500">Models</NavLink>
              </li>
              <li className='text-[25px] font-semibold px-[15px] hover:bg-[#2c2cb8] m-[10px]'>
                <NavLink to="/home/cars" activeClassName="text-yellow-500">Cars</NavLink>
              </li>
            </ul>
          </nav>

          <div className='bg-[#0e1685] fixed w-full h-[80px] flex justify-between items-center'>
            <h1 className='text-[30px] font-bold px-[50px] mt-[15px] text-white'>ADMIN</h1>
            <button onClick={logoutfc} className="bg-red-500 p-4 m-[10px] rounded-lg text-white">Log Out</button>
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
            {/* <Route path="*" element={<Main/>} />  */}
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Homepage

