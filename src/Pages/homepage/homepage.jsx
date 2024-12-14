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
        setmodal(false)
      } else {
        toast.error(item?.message)
      }
    })
  }
  
  
  
  
  
  return (
    <> 

{
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
      }

<nav class="fixed top-0 z-50 w-full bg-[#0f1d87]  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div>
          <a href="#">ADMIN</a>
      </div>
      <button onClick={logoutfc} className='bg-[red] p-[10px]'>Log out</button>
    </div>
  </div>
</nav>

<div className='flex '>

<aside id="logo-sidebar" class=" top-0 left-0 z-40 w-64 h-screen pt-[65px] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">

   <div class="h-full px-3 pb-4 overflow-y-auto bg-[#0f1d87] dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#5470ff] dark:hover:bg-gray-700 group">
               <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#5470ff] dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               {/* <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#5470ff] dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               {/* <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#5470ff] dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#5470ff] dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#5470ff] dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#5470ff] dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li>
      </ul>
   </div>

   

  </aside>
  

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
              {/* <td></td> */}
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
