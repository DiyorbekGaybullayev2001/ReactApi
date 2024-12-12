import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

function Homepage() {
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
    <>
      <div className='container m-auto'>
      {
        modal && ( 

        <form onSubmit={createCategories} className='m-auto grid grid-cols-1 w-[50%]  p-[10px] text-center '>
           Modal ochildi
          <input onChange={(e)=>setNameEn(e?.target?.value)} className='border m-[10px] p-[10px] rounded-lg' type="text" placeholder='name en ' required minLength={2}/>
          <input onChange={(e)=>setNameRu(e?.target?.value)} className='border m-[10px] p-[10px] rounded-lg' type="text" placeholder='name ru ' required minLength={2}/>
          <input onChange={(e)=>setImages(e?.target?.files[0])} accept='image/*' className='border m-[10px] p-[10px] rounded-lg' type="file" required />
          <button className='border m-[10px] p-[10px] rounded-lg bg-[#24e94b]'>Qo'shish +</button>
        </form>
        )
      }


          Salomlar
          <button onClick={logoutfc} className='bg-[red] p-[10px]'>Log out</button>
          {
            !modal &&
            <button onClick={()=>setmodal(true)} className='bg-[#5f1fdf] p-[10px]'>Modal ochish</button>
          }

      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-[#371ce4] text-white'>
            <th className='border text-left p-[8px]'>name en</th>
            <th className='border text-left p-[8px]'>name ru</th>
            <th className='border text-left p-[8px]'>images</th>
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
            </tr>
          ))
        }
        </tbody>
        
      </table>
      
      </div>
    </>
  )}

export default Homepage
