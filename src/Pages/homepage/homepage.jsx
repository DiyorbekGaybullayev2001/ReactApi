import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
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
        setNameEn('');    // State-ni reset qilish
        setNameRu('');
        setImages(null);
        setmodal(false)
      } else {
        toast.error(item?.message)
      }
    })
  }


  // const [images, setImages] = useState(null);
  // const [editId, setEditId] = useState(null);

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
      const response = await fetch(`https://realauto.limsa.uz/api/categories/${id}`, {
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
    const response = await fetch(`https://realauto.limsa.uz/api/categories/${editId}`, {
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
      {
        modal && (
          <div className='fixed z-500 items-center m-auto bg-[#d7d7d7] w-[100%] h-[100%]' >
            <div className='absolute top-[300px] w-full items-center h-[100vh] m-auto'>

          <form onSubmit={editId ? editCategory : createCategories} className="items-center m-auto grid grid-cols-1 w-[30%] p-[10px] text-center">
            <input
              value={nameEn}
              onChange={(e) => setNameEn(e?.target?.value)}
              className="border m-[10px] p-[10px] rounded-lg"
              type="text"
              placeholder="name en"
              required
              minLength={2}
              />
            <input
              value={nameRu}
              onChange={(e) => setNameRu(e?.target?.value)}
              className="border m-[10px] p-[10px] rounded-lg"
              type="text"
              placeholder="name ru"
              required
              minLength={2}
              />
            <input
              onChange={(e) => setImages(e?.target?.files[0])}
              accept="image/*"
              className="border m-[10px] p-[10px] rounded-lg"
              type="file"
              />
            <button className="border m-[10px] p-[10px] rounded-lg bg-[#2d3ce3]">
              {editId ? "Yangilash" : "Qo'shish"} +
            </button>
          </form>
              </div>
          </div>
          )
      }


     {/* {
        modal && ( 
          <div className='fixed z-500 m-auto bg-[#dedada] w-[100%] h-[100%]' >
            <form onSubmit={createCategories} className='m-auto grid grid-cols-1 w-[50%]  p-[10px] text-center '>
              Modal ochildi
              <input onChange={(e)=>setNameEn(e?.target?.value)} className='border m-[10px] p-[10px] rounded-lg' type="text" placeholder='name en ' required minLength={2}/>
              <input onChange={(e)=>setNameRu(e?.target?.value)} className='border m-[10px] p-[10px] rounded-lg' type="text" placeholder='name ru ' required minLength={2}/>
              <input onChange={(e)=>setImages(e?.target?.files[0])} accept='image/*' className='border m-[10px] p-[10px] rounded-lg' type="file" required />
              <button className='border m-[10px] p-[10px] rounded-lg bg-[#24e94b]'>Qo'shish +</button>
            </form>
          </div>
        )
      } */}

<div className='flex '>
<div className='overflow-y-scroll overflow-hidden h-[100vh] pt-[70px] w-full'>
      

      
          

          <table className='w-full border-collapse'>
        <thead>
        <tr className='bg-[#371ce4] text-white'>
        <th className='border text-left p-[8px]'>name en</th>
        <th className='border text-left p-[8px]'>name ru</th>
        <th className='border text-left p-[8px]'>images</th>
        <th className='bg-white'> {
        !modal &&
        <button onClick={()=>setmodal(true)} className='bg-[#5f1fdf] p-[10px]'>Modal ochish</button>
      }</th>
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




      
    </>
  )}

export default Homepage
