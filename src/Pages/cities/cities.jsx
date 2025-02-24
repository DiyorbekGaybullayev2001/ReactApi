import React from 'react'

function Cities() {
  return (
    <div className='mt-[100px] ml-[20px]'>
      <h1>Email</h1>
    </div>
  )
}

export default Cities






// import React, { useEffect, useState } from 'react'
// import {useNavigate} from 'react-router-dom'
// import { toast } from 'react-toastify'

// export default function Cities() {

    
//   const navigate = useNavigate()
  
//   const logoutfc=()=>{
//     localStorage.removeItem("tokencha")
//     navigate("/")
//   }
//   // https://realauto.limsa.uz/api/categories

//   // get
//   const [categ, setcateg]=useState([])
//   const getCategories=()=>{
//     fetch("https://realauto.limsa.uz/api/cities")
//     .then((resp)=>resp.json())
//     .then((element)=>setcateg(element?.data))
//   }
//   useEffect(()=>{
//     getCategories()
//   },[])
  
//   const [modal, setmodal] = useState(false)

//   //post
//   const [name, setName]=useState()
//   const [text, setText]=useState()
//   const [images, setImages]=useState()
//   // console.log(name, text, images);

//   const formdata = new FormData()
//   formdata.append("name", name)
//   formdata.append("text", text)
//   formdata.append("images", images)
//   const token =localStorage.getItem("tokencha")
//   const createCategories=(e)=>{
//     e.preventDefault()
//     fetch("https://realauto.limsa.uz/api/cities",{
//       method:"POST",
//       headers:{
//         // "Content-type":"multipart/formdata",
//         "Authorization":`Bearer ${token}`
//       },
//       body:formdata
//     }).then((res)=>res.json())
//     .then((item)=>{
//       if (item?.success) {
//         toast.success(item?.message)
//         getCategories()
//         e?.target?.reset()
//         setName('');    // State-ni reset qilish
//         setText('');
//         setImages(null);
//         setmodal(false)
//       } else {
//         toast.error(item?.message)
//       }
//     })
//   }

//   const handleEdit = (item) => {
//     setEditId(item?.id);
//     setName(item?.name);
//     setText(item?.text);
//     setImages(null);
//     setmodal(true);
//   };
  

//   // delete
//   const deleteCategory = async (id) => {
//     try {
//       const response = await fetch(`https://realauto.limsa.uz/api/cities/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const result = await response.json();
//       if (result?.success) {
//         toast.success(result?.message);
//         getCategories(); // Ro'yxatni yangilash
//       } else {
//         toast.error(result?.message);
//       }
//     } catch (error) {
//       toast.error("Kategoriyani o'chirishda xatolik yuz berdi!");
//     }
//   };

//   // put 
//   const [editId, setEditId] = useState(null);

// const editCategory = async (e) => {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append("name", name);
//   formData.append("text", text);
//   if (images) formData.append("images", images);

//   try {
//     const response = await fetch(`https://realauto.limsa.uz/api/cities/${editId}`, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });
//     const result = await response.json();
//     if (result?.success) {
//       toast.success(result?.message);
//       getCategories();
//       setmodal(false);
//       setEditId(null);
//       e?.target.reset()
//       setName('');    // State-ni reset qilish
//       setText('');
//       setImages(null);
//     } else {
//       toast.error(result?.message);
//     }
//   } catch (error) {
//     toast.error("Tahrirlash jarayonida xatolik yuz berdi!");
//   }
// };
//   return (
//     <>
//     <div className='w-full'>

//       {
//         modal && (
//           <div className='fixed z-500 items-center m-auto bg-[#d7d7d7] w-[100%] h-[100%]' >
//             <div className='absolute top-[250px] w-full items-center h-[100vh] m-auto text-center'>
//              <form onSubmit={editId ? editCategory : createCategories} className="items-center m-auto grid grid-cols-1 w-[30%] p-[10px] text-center">
//              <input
//                value={name}
//                onChange={(e) => setName(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="text"
//                placeholder="Name"
//                required
//                minLength={2}
//                />
//             <input
//               value={text}
//               onChange={(e) => setText(e?.target?.value)}
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="text"
//               placeholder="Text"
//               required
//               minLength={2}
//               />
//             <input
//               onChange={(e) => setImages(e?.target?.files[0])}
//               accept="image/*"
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="file"
//               />
//             <button className="border text-white font-semibold m-[10px] p-[10px] rounded-lg bg-[#2d3ce3]">
//               {editId ? "Edit" : "Add"} +
//             </button>
//           </form>
//           <button onClick={() => setmodal(false)}  className="border text-white font-bold px-[80px] p-[10px] rounded-xl bg-[#5f1fdf]"> CLOSE </button>
//               </div>
//           </div>
//           )
//       }
      

//     <div className='w-full h-[100vh]'>
//      <div className='overflow-hidden overflow-y-scroll h-[100vh] pt-[85px] pl-1'>
//           <table className='w-full border-collapse'>
//         <thead>
//         <tr className='bg-[#371ce4] text-white'>
//         <th className='border text-left p-[8px]'>Name</th>
//         <th className='border text-left p-[8px]'>Text</th>
//         <th className='border text-left p-[8px]'>Images</th>
//         <th className='bg-white'> {
//           !modal &&
//           <button onClick={()=>setmodal(true)} className='bg-[#5f1fdf] p-[10px]'> Add  + </button>
//         }</th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//           categ?.map((item, index)=>(
//             <tr key={index} className='bg-[#f0f0f0] '> 
//             <td className='border text-left p-[8px]'>{item?.name}</td>
//             <td className='border text-left p-[8px]'>{item?.text}</td>
//             <td className='border text-left p-[5px]'>
//             <img className='h-[100px] w-[200px]' src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`} alt="" />
//             </td>
//               <td> 
//                 <button
//                     onClick={() => handleEdit(item)}
//                     className="bg-yellow-500 text-white p-[8px] rounded-lg mr-2"
//                     >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteCategory(item?.id)}
//                     className="bg-red-500 text-white p-[8px] rounded-lg"
//                     >
//                     Delete
//                 </button>
//            </td>
//             </tr>
//             ))
//           }
//           </tbody>   
//         </table>
      
//       </div>

//       </div>
//     </div>
//     </>
//   )
// }

