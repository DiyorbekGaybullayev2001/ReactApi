import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Cars() {

  const navigate = useNavigate()
  const [modal, setmodal] = useState(false)
  
  const logoutfc=()=>{
    localStorage.removeItem("tokencha")
    navigate("/")
  }
  // https://realauto.limsa.uz/api/

  // get
  const [categ, setcateg]=useState([])
  const getCategories=()=>{
    fetch("https://realauto.limsa.uz/api/cars")
    .then((resp)=>resp.json())
    .then((element)=>setcateg(element?.data))
  }
  useEffect(()=>{
    getCategories()
  },[])
  
  
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
    fetch("https://realauto.limsa.uz/api/cars",{
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
        setNameEn('');    // State-ni reset qilish
        setNameRu('');
        setImages(null);
        setmodal(false)
      } else {
        toast.error(item?.message)
      }
    })
  }

  const handleEdit = (item) => {
    setEditId(item?.id);
    setNameEn(item?.name_en);
    setNameRu(item?.name_ru);
    setImages(null);
    setmodal(true);
  };
  

  // delete
  const deleteCategory = async (id) => {
    try {
      const response = await fetch(`https://realauto.limsa.uz/api/cars/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result?.success) {
        toast.success(result?.message);
        getCategories(); // Ro'yxatni yangilash
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      toast.error("Kategoriyani o'chirishda xatolik yuz berdi!");
    }
  };

  // put 
  const [editId, setEditId] = useState(null);

const editCategory = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name_en", nameEn);
  formData.append("name_ru", nameRu);
  if (images) formData.append("images", images);

  try {
    const response = await fetch(`https://realauto.limsa.uz/api/cars/${editId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const result = await response.json();
    if (result?.success) {
      toast.success(result?.message);
      getCategories();
      setmodal(false);
      setEditId(null);
      e?.target.reset()
      setNameEn('');    // State-ni reset qilish
      setNameRu('');
      setImages(null);
    } else {
      toast.error(result?.message);
    }
  } catch (error) {
    toast.error("Tahrirlash jarayonida xatolik yuz berdi!");
  }
};
  return (
    <>
    <div className='w-full'>

    {
        modal && (
          <div className='fixed z-500 items-center m-auto bg-[#d7d7d7] w-[100%] h-[100%] ' >
            <div className='absolute py-[100px] w-full items-center h-[100vh] m-auto text-center overflow-hidden overflow-y-scroll'>
             <form onSubmit={editId ? editCategory : createCategories} className="items-center m-auto grid grid-cols-1 w-[30%] p-[10px] text-center">

              <div className='w-full h-[100%] text-start  p-[10px]'>
                <p className=' font-semibold'>Category</p>
                <select className='rounded-xl w-full p-[8px] '> 
                  <option></option>
                </select>
              </div>

              <div className='w-full h-[100%] text-start  p-[10px]'>
                <p className=' font-semibold'>Brand</p>
                <select className='rounded-xl w-full p-[8px] '> 
                  <option></option>
                </select>
              </div>

              <div className='w-full h-[100%] text-start  p-[10px]'>
                <p className=' font-semibold'>Model</p>
                <select className='rounded-xl w-full p-[8px] '> 
                  <option></option>
                </select>
              </div>

              <div className='w-full h-[100%] text-start  p-[10px]'>
                <p className=' font-semibold'>Location</p>
                <select className='rounded-xl w-full p-[8px] '> 
                  <option></option>
                </select>
              </div>

              <div className='w-full h-[100%] text-start  p-[10px]'>
                <p className=' font-semibold'>City</p>
                <select className='rounded-xl w-full p-[8px] '> 
                  <option></option>
                </select>
              </div>

             <input
               value={nameEn}
               onChange={(e) => setNameEn(e?.target?.value)}
               className="border m-[10px] p-[10px] rounded-lg"
               type="text"
               placeholder="Colar"
               required
               minLength={2}
               />

             <input
               value={nameEn}
               onChange={(e) => setNameEn(e?.target?.value)}
               className="border m-[10px] p-[10px] rounded-lg"
               type="text"
               placeholder="Year"
               required
               minLength={2}
               />

             <input
               value={nameEn}
               onChange={(e) => setNameEn(e?.target?.value)}
               className="border m-[10px] p-[10px] rounded-lg"
               type="text"
               placeholder="Seconds"
               required
               minLength={2}
               />
               
             <input
               value={nameEn}
               onChange={(e) => setNameEn(e?.target?.value)}
               className="border m-[10px] p-[10px] rounded-lg"
               type="text"
               placeholder="Max Speed"
               required
               minLength={2}
               />

             <input
               value={nameEn}
               onChange={(e) => setNameEn(e?.target?.value)}
               className="border m-[10px] p-[10px] rounded-lg"
               type="text"
               placeholder="Max People"
               required
               minLength={2}
               />

             <input
               value={nameEn}
               onChange={(e) => setNameEn(e?.target?.value)}
               className="border m-[10px] p-[10px] rounded-lg"
               type="text"
               placeholder="Motor"
               required
               minLength={2}
               />

             <input
               value={nameEn}
               onChange={(e) => setNameEn(e?.target?.value)}
               className="border m-[10px] p-[10px] rounded-lg"
               type="text"
               placeholder="Transmission"
               required
               minLength={2}
               />

             <input
               value={nameEn}
               onChange={(e) => setNameEn(e?.target?.value)}
               className="border m-[10px] p-[10px] rounded-lg"
               type="text"
               placeholder="Drive Side"
               required
               minLength={2}
               />

             <input
               value={nameEn}
               onChange={(e) => setNameEn(e?.target?.value)}
               className="border m-[10px] p-[10px] rounded-lg"
               type="text"
               placeholder="Fuel/Petrol"
               required
               minLength={2}
               />

            <input
              value={nameRu}
              onChange={(e) => setNameRu(e?.target?.value)}
              className="border m-[10px] p-[10px] rounded-lg"
              type="text"
              placeholder="Limit Per Day"
              required
              minLength={2}
              />

            <input
              value={nameRu}
              onChange={(e) => setNameRu(e?.target?.value)}
              className="border m-[10px] p-[10px] rounded-lg"
              type="text"
              placeholder="Deposit"
              required
              minLength={2}
              />

            <input
              value={nameRu}
              onChange={(e) => setNameRu(e?.target?.value)}
              className="border m-[10px] p-[10px] rounded-lg"
              type="text"
              placeholder="Premium Protection Price"
              required
              minLength={2}
              />

            <input
              value={nameRu}
              onChange={(e) => setNameRu(e?.target?.value)}
              className="border m-[10px] p-[10px] rounded-lg"
              type="text"
              placeholder="Price in AED"
              required
              minLength={2}
              />

            <input
              value={nameRu}
              onChange={(e) => setNameRu(e?.target?.value)}
              className="border m-[10px] p-[10px] rounded-lg"
              type="text"
              placeholder="Price in USD"
              required
              minLength={2}
              />

            <input
              value={nameRu}
              onChange={(e) => setNameRu(e?.target?.value)}
              className="border m-[10px] p-[10px] rounded-lg"
              type="text"
              placeholder="Price in AED (Otd)"
              required
              minLength={2}
              />

            <input
              value={nameRu}
              onChange={(e) => setNameRu(e?.target?.value)}
              className="border m-[10px] p-[10px] rounded-lg"
              type="text"
              placeholder="Price in USD(Otd)"
              required
              minLength={2}
              />
              <div className='p-[10px] flex justify-start'>
                <p className='font-serif'>Inclusive</p>
                <input type="checkbox" className='w-[20px] ml-[10px] h-[20px]' />
              </div>

            <input
              onChange={(e) => setImages(e?.target?.files[0])}
              accept="image/*"
              className="border m-[10px] p-[10px] rounded-lg"
              type="file"
              />
            <button className="border text-white font-semibold m-[10px] p-[10px] rounded-lg bg-[#2d3ce3]">
              {editId ? "Edit" : "Add"} +
            </button>

          </form>
          <button onClick={() => setmodal(false)}  className="border text-white font-bold px-[80px] p-[10px] rounded-xl bg-[#5f1fdf]"> CLOSE </button>
              </div>
          </div>
          )
      }
      

    <div className='w-full h-[100vh]'>
     <div className='overflow-hidden overflow-y-scroll h-[100vh] pt-[85px] pl-1'>
          <table className='w-full border-collapse'>
        <thead>
        <tr className='bg-[#371ce4] text-white'>
        <th className='border text-left p-[8px]'>Brands</th>
        <th className='border text-left p-[8px]'>Models</th>
        <th className='border text-left p-[8px]'>Categories</th>
        <th className='border text-left p-[8px]'>Locations</th>
        <th className='border text-left p-[8px]'>Colars</th>
        <th className='border text-left p-[8px]'>Images</th>
        <th className='bg-white'> {
          !modal &&
          <button onClick={()=>setmodal(true)} className='bg-[#5f1fdf] p-[10px]'> Add  + </button>
        }</th>
        </tr>
        </thead>
        <tbody>
        {
          categ?.map((item, index)=>(
            <tr key={index} className='bg-[#f0f0f0] '> 
            <td className='border text-left p-[8px]'>{item?.w}</td>
            <td className='border text-left p-[8px]'>{item?.w}</td>
            <td className='border text-left p-[8px]'>{item?.w}</td>
            <td className='border text-left p-[8px]'>{item?.w}</td>
            <td className='border text-left p-[8px]'>{item?.w}</td>
            <td className='border text-left p-[8px]'>{item?.w}</td>
            <td className='border text-left p-[5px]'>
            <img className='h-[100px] w-[200px]' src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`} alt="" />
            </td>
              <td> 
                <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white p-[8px] rounded-lg mr-2"
                    >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCategory(item?.id)}
                    className="bg-red-500 text-white p-[8px] rounded-lg"
                    >
                    Delete
                </button>
           </td>
            </tr>
            ))
          }
          </tbody>   
        </table>
      
      </div>

      </div>
    </div>
    </>
  )
}

