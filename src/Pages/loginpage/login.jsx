import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {

  const navigate = useNavigate()
  const [phone, setPhone] = useState()
  const [parol, setParol] = useState()

  const tokenxon = localStorage.getItem("tokencha")
  useEffect(()=>{
    if (tokenxon===null || tokenxon?.length<10) {
      navigate("/")
    } else {
      navigate("/home")
    }
  },[])
  // console.log(tokenchik);
  // console.log(phone, parol);

  // https://realauto.limsa.uz/api/auth/signin
  // https://tomubackend.tomu.uz/api/auth/sign-in/users
  
  function loginSubmit(e) {
    e.preventDefault();
    fetch ("https://realauto.limsa.uz/api/auth/signin",{
      method:"POST",
      headers:{
        // "Content-type":"multipart/formdata"
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        phone_number: phone,
        password: parol
      })
    }).then((res)=>res.json())
    .then((element)=>{
      // console.log(element.data.tokens.accessToken.token);
      if(element?.success) {
        toast.success(element?.message) 
        localStorage.setItem("tokencha", element.data.tokens.accessToken.token)
        navigate("/home")
      } else {
        toast.error(element?.message)
      }
     })
    }

  return (
    <div className='container m-auto h-[100vh] items-center'>
        <form onSubmit={loginSubmit} className='grid grid-cols-1 m-auto items-center w-[400px] p-[10px] mt-[300px] '>
          <input onChange={(e)=>{setPhone(e.target.value)}} className='border w-[100%] h-[35px]  rounded-lg m-[10px] p-[5px]' type="text" placeholder='Number' required min={2}/>  
          <input onChange={(e)=>{setParol(e.target.value)}} className='border w-full h-[35px] m-[10px] rounded-lg p-[5px]' type="text" placeholder='Password' required min={2}/>  
          <button className='border w-full h-[35px] m-[10px] text-[20px] rounded-lg  bg-[#2c4ddf] text-[#ffffff]'>LOGIN</button>  
        </form>
    </div>
  )
}

export default Login;
