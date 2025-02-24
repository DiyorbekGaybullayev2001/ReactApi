import React from 'react'

function Models() {
  return (
    <div className='mt-[100px] ml-[20px]'>
      <h1>Deals</h1>
    </div>
  )
}

export default Models






// import React, { useEffect, useState } from 'react'
// import {useNavigate} from 'react-router-dom'
// import { toast } from 'react-toastify'

// export default function Models() {

    
//   const navigate = useNavigate()
  
//   const logoutfc=()=>{
//     localStorage.removeItem("tokencha")
//     navigate("/")
//   }
//   // https://realauto.limsa.uz/api/

//   // get brand
//   const [brand, setBrand]=useState([])
//   const getBrands=()=>{
//     fetch("https://realauto.limsa.uz/api/brands")
//     .then((resp)=>resp.json())
//     .then((element)=>setBrand(element?.data))
//   }


//   //get model
//   const [model, setModel]=useState([])
//   const getModels=()=>{
//     fetch("https://realauto.limsa.uz/api/models")
//     .then((resp)=>resp.json())
//     .then((element)=>setModel(element?.data))
//   }

//   useEffect(()=>{
//     getBrands()
//     getModels()
//   },[])
  
  
//   const [modal, setmodal] = useState(false)
//   //post
//   const [name, setName]=useState()
//   const [selectedBrand, setselectedBrand] = useState()
//   // const [images, setImages]=useState()
//   // console.log(name, text, images);

//   const formdata = new FormData()
//   formdata.append("name", name)
//   formdata.append("brand_id", selectedBrand)
//   // formdata.append("images", images)
//   const token =localStorage.getItem("tokencha")
//   const createCategories=(e)=>{
//     e.preventDefault()
//     fetch("https://realauto.limsa.uz/api/models",{
//       method:"POST",
//       headers:{
//         // "Content-type":"multipart/formdata",
//         // "Content-Type": "application/json",  // JSON format
//         "Authorization":`Bearer ${token}`
//       },
//       body:formdata
//     }).then((res)=>res.json())
//     .then((item)=>{
//       if (item?.success) {
//         toast.success(item?.message)
//         getModels()
//         e?.target?.reset()
//         setName('');    // State-ni reset qilish
//         setselectedBrand('');
//         // setImages(null);
//         setmodal(false)
//       } else {
//         toast.error(item?.message)
//       }
//     })
//   }

//   const handleEdit = (item) => {
//     setEditId(item?.id);
//     setName(item?.name);
//     setselectedBrand(item?.brand_id);
//     // setImages(null);
//     setmodal(true);
//   };
  

//   // delete
//   const deleteCategory = async (id) => {
//     try {
//       const response = await fetch(`https://realauto.limsa.uz/api/cars/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const result = await response.json();
//       if (result?.success) {
//         toast.success(result?.message);
//         getModels(); // Ro'yxatni yangilash
//       } else {
//         toast.error(result?.message);
//       }
//     } catch (error) {
//       toast.error("Kategoriyani o'chirishda xatolik yuz berdi!");
//     }
//   };

//   // put 
//   const [editId, setEditId] = useState(null);

//  const editCategory = async (e) => {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append("name", name);
//   formData.append("brand_id", selectedBrand);
//   // if (images) formData.append("images", images);
//   try {
//     const response = await fetch(`https://realauto.limsa.uz/api/models/${editId}`, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });
//     const result = await response.json();
//     if (result?.success) {
//       toast.success(result?.message);
//       getModels();
//       setmodal(false);
//       setEditId(null);
//       e?.target.reset()
//       setName('');    // State-ni reset qilish
//       setselectedBrand('');
//       // setImages(null);
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
//           <div className='fixed z-500 items-center m-auto bg-[#d7d7d7] w-[100%] h-[100%] ' >
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
//               <div className='w-full h-[100%] text-start  p-[10px]'>
//                 <p className=' font-semibold'>Brands ID</p>
//                 <select onChange={(e)=>setselectedBrand(e?.target?.value)} className='rounded-xl w-full p-[8px] '> 
//                   <option>Select Brands</option>
//                   {
//                     brand.map((item)=>(
//                       <option key={item.id} value={item.id}>{item?.title}</option>
//                     ))
//                   }
//                 </select>
//               </div>
//             {/* <input
//               onChange={(e) => setImages(e?.target?.files[0])}
//               accept="image/*"
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="file"
//               /> */}
//             <button className="border m-[10px] p-[10px] text-white font-semibold rounded-lg bg-[#2d3ce3]">
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
//         <th className='border text-left p-[8px]'>N:</th>
//         <th className='border text-left p-[8px]'>Name</th>
//         <th className='border text-left p-[8px]'>Brand Id</th>
//         {/* <th className='border text-left p-[8px]'>Images</th> */}
//         <th className='bg-white'> {
//           !modal &&
//           <button onClick={()=>setmodal(true)} className='bg-[#5f1fdf] p-[10px]'> Add  + </button>
//         }</th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//           model?.map((item, index)=>(
//             <tr key={index} className='bg-[#f0f0f0]'> 
//             <td className='border text-left p-[8px]'>{index+1}</td>
//             <td className='border text-left p-[8px]'>{item?.name}</td>
//             <td className='border text-left p-[8px]'>{item?.brand_title}</td>
//             {/* <td className='border text-left p-[5px]'>
//             <img className='h-[100px] w-[200px]' src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`} alt="" />
//             </td> */}
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


