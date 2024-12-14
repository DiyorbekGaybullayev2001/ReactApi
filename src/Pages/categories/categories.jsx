import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
function Categories() {

    const [activeMenu, setActiveMenu] = useState(1);

  
  const navigate = useNavigate()
  
  const logoutfc=()=>{
    localStorage.removeItem("tokencha")
    navigate("/")
  }
  // https://realauto.limsa.uz/api/categories
  // get
  const [categ, setcateg]=useState([])
  const getCategories=()=>{
    fetch("https://realauto.limsa.uz/api/categories")
    .then((resp)=>resp.json())
    .then((element)=>setcateg(element?.data))
  }
  useEffect(()=>{
    getCategories()
    
  },[])
  
  const [modal, setmodal] = useState(false)
  //post
  const [nameEn, setNameEn]=useState()
  const [nameRu, setNameRu]=useState()
  const [images, setImages]=useState()
  // console.log(nameEn, nameRu, images);
  const formdata = new FormData()
  formdata.append("name_en", nameEn)
  formdata.append("name_ru", nameRu)
  formdata.append("images", images)
  const token =localStorage.getItem("tokencha")
  const createCategories=(e)=>{
    e.preventDefault()
    fetch("https://realauto.limsa.uz/api/categories",{
      method:"POST",
      headers:{
        // "Content-type":"multipart/formdata",
        "Authorization":`Bearer ${token}`
      },
      body:formdata
    }).then((res)=>res.json())
    .then((item)=>{
      if (item?.success) {
        toast.success(item?.message)
        getCategories()
        e?.target?.reset()
        setmodal(false)
      } else {
        toast.error(item?.message)
      }
    })
  }

  return (
    <div>

        <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-[#371ce4] text-white'>
            <th className='border text-left p-[8px]'>name en</th>
            <th className='border text-left p-[8px]'>name ru</th>
            <th className='border text-left p-[8px]'>images</th>
            <th className='bg-white'>
            {
            !modal &&
            <button onClick={()=>setmodal(true)} className='bg-[#5f1fdf] p-[10px]'>Modal ochish</button>
          }
            </th>
          </tr>
        </thead>
        <tbody>
        {
          categ?.map((item, index)=>(
            <tr key={index} className='bg-[#f0f0f0] '> 
              <td className='border text-left p-[8px]'>{item?.name_en}</td>
              <td className='border text-left p-[8px]'>{item?.name_ru}</td>
              <td className='border text-left p-[5px]'>
                <img className='h-[100px] w-[200px]' src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`} alt="" />
              </td>
              <td></td>
            </tr>
          ))
        }
        </tbody>   
      </table>
      
    </div>
  )
}

export default Categories

