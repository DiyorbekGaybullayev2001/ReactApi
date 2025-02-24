import React from 'react'

function Cars() {
  return (
    <div className='mt-[100px] ml-[20px]'>
      <h1>Settings</h1>
    </div>
  )
}

export default Cars









// import React, { useEffect, useState } from 'react'
// import {useNavigate} from 'react-router-dom'
// import { toast } from 'react-toastify'

// export default function Cars() {

//   const navigate = useNavigate()
//   const [modal, setmodal] = useState(false)
  
//   const logoutfc=()=>{
//     localStorage.removeItem("tokencha")
//     navigate("/")
//   }
//   // https://realauto.limsa.uz/api/

//   // get
//   const [cars, setCars]=useState([])
//   const getCars=()=>{
//     fetch("https://realauto.limsa.uz/api/cars")
//     .then((resp)=>resp.json())
//     .then((element)=>setCars(element?.data))
//   }
//   // console.log(cars);

//   //get brand
//   const [brand, setBrand]=useState([])
//   const getBrands=()=>{
//     fetch("https://realauto.limsa.uz/api/brands")
//     .then((resp)=>resp.json())
//     .then((element)=>setBrand(element?.data))
//   }
//   // console.log(brand);

//   //get categories
//   const [categ, setCateg]=useState([])
//   const getCateg=()=>{
//     fetch("https://realauto.limsa.uz/api/categories")
//     .then((resp)=>resp.json())
//     .then((element)=>setCateg(element?.data))
//   }
//   // console.log(categ);

//   //get cities
//   const [citi, setCiti]=useState([])
//   const getCities=()=>{
//     fetch("https://realauto.limsa.uz/api/cities")
//     .then((resp)=>resp.json())
//     .then((element)=>setCiti(element?.data))
//   }

//   //get Locations
//   const [location, setLocations]=useState([])
//   const getLocations=()=>{
//     fetch("https://realauto.limsa.uz/api/locations")
//     .then((resp)=>resp.json())
//     .then((element)=>setLocations(element?.data))
//   }
//   // console.log(location);
  

//   //get Models
//   const [model, setModel]=useState([])
//   const getModel=()=>{
//     fetch("https://realauto.limsa.uz/api/models")
//     .then((resp)=>resp.json())
//     .then((element)=>setModel(element?.data))
//   }
//   // console.log(model);

//   useEffect(()=>{
//     getCars()
//     getBrands()
//     getCateg()
//     getCities()
//     getLocations()
//     getModel()
//   },[])
  
  
//   //post
//   const [selectedBrand, setselectedBrand] = useState()
//   const [selectedCateg, setselectedCateg] = useState()
//   const [selectedCitie, setselectedCitie] = useState()
//   const [selectedLocation, setselectedLocation] = useState()
//   const [selectedModel, setselectedModel] = useState()
//   const [color, setColor]=useState()
//   const [year, setYear ] = useState()
//   const [seconds, setSeconds ] = useState()
//   const [max_speed, setMaxSpeed ] = useState()
//   const [max_people, setMaxPeople ] = useState()
//   const [transmission, setTransmission] = useState()
//   const [motor, setMotor] = useState()
//   const [drive_side, setDriveSide] = useState()
//   const [petrol, setPetrol] = useState()
//   const [limitperday, setLimitperday] = useState()
//   const [deposit, setDeposit] = useState()
//   const [premium_protection, setPremiumProtection] = useState()
//   const [price_in_aed, setPriceInAed] = useState()
//   const [price_in_usd, setPriceInUsd] = useState()
//   const [price_in_aed_sale, setPriceInAedSale] = useState()
//   const [price_in_usd_sale, setPriceInUsdSale] = useState()
//   const [cover, setCover]=useState()
//   const [images, setImages]=useState()

//   // console.log();

    
//   const formdata = new FormData()
//   formdata.append("brand_id", selectedBrand)
//   formdata.append("category_id", selectedCateg)
//   formdata.append("location_id", selectedLocation)
//   formdata.append("city_id", selectedCitie)
//   formdata.append("model_id", selectedModel)
//   formdata.append("color", color)
//   formdata.append("year", year)
//   formdata.append("seconds", seconds)
//   formdata.append("max_speed", max_speed)
//   formdata.append("max_people", max_people)
//   formdata.append("transmission", transmission)
//   formdata.append("motor", motor)
//   formdata.append("drive_side", drive_side)
//   formdata.append("petrol", petrol)
//   formdata.append("limitperday", limitperday)
//   formdata.append("premium_protection", premium_protection)
//   formdata.append("price_in_aed", price_in_aed)
//   formdata.append("price_in_usd", price_in_usd)
//   formdata.append("price_in_aed_sale", price_in_aed_sale)
//   formdata.append("price_in_usd_sale", price_in_usd_sale)
//   formdata.append("cover", cover)
//   formdata.append("images", images)
//   formdata.append("images", images)


//   const token =localStorage.getItem("tokencha")
//   const createCategories=(e)=>{
//     e.preventDefault()
//     fetch("https://realauto.limsa.uz/api/cars",{
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
//         getCars()
//         e?.target?.reset()  // State-ni reset qilish
//         setColor('');    
//         setYear('');
//         setSeconds('')
//         setMaxSpeed('')
//         setMaxPeople('')
//         setTransmission('')
//         setMotor('')
//         setDriveSide('')
//         setPetrol('')
//         setLimitperday('')
//         setDeposit('')
//         setPremiumProtection('')
//         setPriceInAed('')
//         setPriceInUsd('')
//         setPriceInAedSale('')
//         setPriceInUsdSale('')
//         setselectedBrand('')
//         setselectedCateg('')
//         setselectedCitie('')
//         setselectedLocation('')
//         setselectedModel('')
//         setCover(null);
//         setImages(null);
//         setmodal(false)
//       } else {
//         toast.error(item?.message)
//       }
//     })
//   }

//   const handleEdit = (item) => {
//     setEditId(item?.id);
//     setColor(item?.color);
//     setYear(item?.year);
//     setSeconds(item?.seconds)
//     setMaxSpeed(item?.max_speed)
//     setMaxPeople(item?.max_people)
//     setTransmission(item?.transmission)
//     setMotor(item?.motor)
//     setDriveSide(item?.drive_side)
//     setPetrol(item?.petrol)
//     setLimitperday(item?.limitperday)
//     setDeposit(item?.deposit)
//     setPremiumProtection(item?.premium_protection)
//     setPriceInAed(item?.price_in_aed)
//     setPriceInUsd(item?.price_in_usd)
//     setPriceInAedSale(item?.price_in_aed_sale)
//     setPriceInUsdSale(item?.price_in_usd_sale)
//     setselectedBrand(item?.brand_id);
//     setselectedCateg(item?.category_id);
//     setselectedCitie(item?.city_id);
//     setselectedLocation(item?.location_id);
//     setselectedModel(item?.model_id);
//     setCover(null);
//     setImages(null);
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
//         getCars(); // Ro'yxatni yangilash
//       } else {
//         toast.error(result?.message);
//       }
//     } catch (error) {
//       toast.error("Kategoriyani o'chirishda xatolik yuz berdi!");
//     }
//   };

//   // put 
//   const [editId, setEditId] = useState(null);

//   const editCategory = async (e) => {
//   e.preventDefault();
//   const formData = new FormData();
//   formdata.append("brand_id", selectedBrand)
//   formdata.append("category_id", selectedCateg)
//   formdata.append("location_id", selectedLocation)
//   formdata.append("city_id", selectedCitie)
//   formdata.append("model_id", selectedModel)
//   formData.append("color", color);
//   formData.append("year", year);
//   formData.append("seconds", seconds);
//   formData.append("max_speed", max_speed);
//   formData.append("max_people", max_people);
//   formData.append("transmission", transmission);
//   formData.append("motor", motor);
//   formData.append("drive_side", drive_side);
//   formData.append("petrol", petrol);
//   formData.append("limitperday", limitperday);
//   formData.append("deposit", deposit);
//   formData.append("premium_protection", premium_protection);
//   formData.append("price_in_aed", price_in_aed);
//   formData.append("price_in_usd", price_in_usd);
//   formData.append("price_in_aed_sale", price_in_aed_sale);
//   formData.append("price_in_usd_sale", price_in_usd_sale);

//   if (cover) formData.append("cover", cover);
//   if (images) formData.append("images", images);
//   if (images) formData.append("images", images);

//   try {
//     const response = await fetch(`https://realauto.limsa.uz/api/cars/${editId}`, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });
//     const result = await response.json();
//     if (result?.success) {
//       toast.success(result?.message);
//       getCars();
//       setmodal(false);
//       setEditId(null);
//       e?.target.reset()
//       setColor('');    // State-ni reset qilish
//       setYear('');
//       setSeconds('');
//       setMaxSpeed('');
//       setMaxPeople('')
//       setTransmission('')
//       setMotor('')
//       setDriveSide('')
//       setPetrol('')
//       setLimitperday('')
//       setDeposit('')
//       setPremiumProtection('')
//       setPriceInAed('')
//       setPriceInUsd('')
//       setPriceInAedSale('')
//       setPriceInUsdSale('')
//       setselectedBrand('');
//       setselectedCateg('');
//       setselectedCitie('');
//       setselectedLocation('');
//       setselectedModel('');
//       setCover(null);
//       setImages(null);
//       setImages(null);
//     } else {
//       toast.error(result?.message);
//     }
//   } catch (error) {
//     toast.error("Tahrirlash jarayonida xatolik yuz berdi!");
//   }
//    };

//   return (
//     <>
//     <div className='w-full'>

//     {
//         modal && (
//           <div className='fixed z-500 items-center m-auto bg-[#d7d7d7] w-[100%] h-[100%] ' >
//             <div className='absolute py-[100px] w-full items-center h-[100vh] m-auto text-center overflow-hidden overflow-y-scroll'>
//              <form onSubmit={editId ? editCategory : createCategories} className="items-center m-auto grid grid-cols-1 w-[30%] p-[10px] text-center">

//               <div className='w-full h-[100%] text-start  p-[10px]'>
//                 <p className=' font-semibold'>Category</p>
//                 <select onChange={(e)=>setselectedCateg(e?.target?.value)} className='rounded-xl w-full p-[8px] '> 
//                   <option>Select Categories</option>
//                   {
//                     categ.map((item)=>(
//                       <option key={item.id} value={item.id}>{item?.name_en} , {item?.name_ru} </option>
//                     ))
//                   }
//                 </select>
//               </div>

//               <div className='w-full h-[100%] text-start  p-[10px]'>
//                 <p className=' font-semibold'>Brands</p>
//                 <select onChange={(e)=>setselectedBrand(e?.target?.value)} className='rounded-xl w-full p-[8px] '> 
//                   <option>Select Brands</option>
//                   {
//                     brand.map((item)=>(
//                       <option key={item.id} value={item.id}>{item.title}</option>
//                     ))
//                   }
//                 </select>
//               </div>

//               <div className='w-full h-[100%] text-start  p-[10px]'>
//                 <p className=' font-semibold'>Model</p>
//                 <select onChange={(e)=>setselectedModel(e?.target?.value)} className='rounded-xl w-full p-[8px] '> 
//                   <option>Select Models</option>
//                   {
//                     model.map((item)=>(
//                       <option key={item.id} value={item.id}>{item.name}</option>
//                     ))
//                   }
//                 </select>
//               </div>

//               <div className='w-full h-[100%] text-start  p-[10px]'>
//                 <p className=' font-semibold'>Location</p>
//                 <select onChange={(e)=>setselectedLocation(e?.target?.value)} className='rounded-xl w-full p-[8px] '> 
//                   <option>Select Locations</option>
//                   {
//                     location.map((item)=>(
//                       <option key={item.id} value={item.id}>{item.name}</option>
//                     ))
//                   }
//                 </select>
//               </div>

//               <div className='w-full h-[100%] text-start  p-[10px]'>
//                 <p className=' font-semibold'>City</p>
//                 <select onChange={(e)=>setselectedCitie(e?.target?.value)} className='rounded-xl w-full p-[8px] '> 
//                   <option>Select Cities</option>
//                   {
//                     citi.map((item)=>(
//                       <option key={item.id} value={item.id}>{item.name}</option>
//                     ))
//                   }
//                 </select>
//               </div>

//              <input
//                value={color}
//                onChange={(e) => setColor(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="text"
//                placeholder="Color"
//                required
//                minLength={1}
//                />

//              <input
//                value={year}
//                onChange={(e) => setYear(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="number"
//                placeholder="Year"
//                required
//                minLength={3}
//                />

//              <input
//                value={seconds}
//                onChange={(e) => setSeconds(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="number"
//                placeholder="Seconds"
//                required
//                minLength={1}
//                />
               
//              <input
//                value={max_speed}
//                onChange={(e) => setMaxSpeed(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="text"
//                placeholder="Max Speed"
//                required
//                minLength={1}
//                />

//              <input
//                value={max_people}
//                onChange={(e) => setMaxPeople(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="text"
//                placeholder="Max People"
//                required
//                minLength={1}
//                />

//              <input
//                value={transmission}
//                onChange={(e) => setTransmission(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="text"
//                placeholder="Transmission"
//                required
//                minLength={1}
//                />

//              <input
//                value={motor}
//                onChange={(e) => setMotor(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="text"
//                placeholder="Motor"
//                required
//                minLength={1}
//                />

//              <input
//                value={drive_side}
//                onChange={(e) => setDriveSide(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="text"
//                placeholder="Drive Side"
//                required
//                minLength={1}
//                />

//              <input
//                value={petrol}
//                onChange={(e) => setPetrol(e?.target?.value)}
//                className="border m-[10px] p-[10px] rounded-lg"
//                type="text"
//                placeholder="Fuel/Petrol"
//                required
//                minLength={2}
//                />

//             <input
//               value={limitperday}
//               onChange={(e) => setLimitperday(e?.target?.value)}
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="text"
//               placeholder="Limitper Day"
//               required
//               minLength={1}
//               />

//             <input
//               value={deposit}
//               onChange={(e) => setDeposit(e?.target?.value)}
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="text"
//               placeholder="Deposit $"
//               required
//               minLength={2}
//               />

//             <input
//               value={premium_protection}
//               onChange={(e) => setPremiumProtection(e?.target?.value)}
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="text"
//               placeholder="Premium Protection Price"
//               required
//               minLength={3}
//               />

//             <input
//               value={price_in_aed}
//               onChange={(e) => setPriceInAed(e?.target?.value)}
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="number"
//               placeholder="Price in AED"
//               required
//               minLength={1}
//               />

//             <input
//               value={price_in_usd}
//               onChange={(e) => setPriceInUsd(e?.target?.value)}
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="number"
//               placeholder="Price in USD"
//               required
//               minLength={1}
//               />

//             <input
//               value={price_in_aed_sale}
//               onChange={(e) => setPriceInAedSale(e?.target?.value)}
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="number"
//               placeholder="Price in AED Sale (Otd)"
//               required
//               minLength={2}
//               />

//             <input
//               value={price_in_usd_sale}
//               onChange={(e) => setPriceInUsdSale(e?.target?.value)}
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="number"
//               placeholder="Price in USD Sale (Otd)"
//               required
//               minLength={2}
//               />

//               <div className='p-[10px] flex justify-start'>
//                 <p className='font-serif'>Inclusive</p>
//                 <input type="checkbox" className='w-[20px] ml-[10px] h-[20px]' />
//               </div>

//             <input
//               onChange={(e) => setCover(e?.target?.files[0])}
//               accept="image/*"
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="file"
//               />

//             <input
//               onChange={(e) => setImages(e?.target?.files[0])}
//               accept="image/*"
//               className="border m-[10px] p-[10px] rounded-lg"
//               type="file"
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
//         }
      

//     <div className='w-full h-[100vh]'>
//      <div className='overflow-hidden overflow-x-scroll overflow-y-scroll h-[100vh] pt-[85px] pl-1'>
//           <table className='w-full border-collapse'>
//         <thead>
//         <tr className='bg-[#371ce4] text-white'>
//         <th className='border text-left p-[8px]'>Brands</th>
//         <th className='border text-left p-[8px]'>Models</th>
//         <th className='border text-left p-[8px]'>Categories</th>
//         <th className='border text-left p-[8px]'>Locations</th>
//         <th className='border text-left p-[8px]'>Cities</th>
//         <th className='border text-left p-[8px]'>Cars data</th>
//         <th className='border text-left p-[8px]'>Images</th>
//         <th className='bg-white'> {
//           !modal &&
//           <button onClick={()=>setmodal(true)} className='bg-[#5f1fdf] p-[10px]'> Add  + </button>
//         }</th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//           cars?.map((item, index)=>(
//             <tr key={index} className='bg-[#f0f0f0] '> 
//             <td className='border text-left p-[8px]'>{item?.brand?.title}</td>
//             <td className='border text-left p-[8px]'>{item?.model?.name}</td>
//             <td className='border text-left p-[8px]'>{item?.category?.name_en},  {item?.category?.name_ru}</td>
//             <td className='border text-left p-[8px]'>{item?.location?.name}</td>
//             <td className='border text-left p-[8px]'>{item?.city?.name}</td>
//             <td className='border text-left p-[8px]'>
//              Color: {item?.color }, 
//              Year: {item?.year}{"\n"}, 
//              Seconds: {item?.seconds}{"\n"}, 
//              Max Speed: {item?.max_speed}{"\n"}, 
//              Max People: {item?.max_people}{"\n"}, 
//              Transmission: {item?.transmission}{"\n"}, 
//              Motor: {item?.motor}{"\n"}, 
//              Drive Side: {item?.drive_side}{"\n"}, 
//              Petrol: {item?.petrol}{"\n"}, 
//              Limitper Day: {item?.limitperday}{"\n"}, 
//              Deposit: {item?.deposit}{"\n"}, 
//              Premium Protection Price: {item?.premium_protection}{"\n"}, 
//              Price In Aed: {item?.price_in_aed}{"\n"}, 
//              Price In Usd: {item?.price_in_usd}{"\n"}, 
//              Price In Aed Sale: {item?.price_in_aed_sale}{"\n"}, 
//              Price In Usd Sale: {item?.price_in_usd_sale}{"\n"}, 
              
//             </td>
//             <td className='border text-left p-[5px]'>
//               <img className='h-[100px] w-[200px]' src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_images}`}    alt="imgs" />
//               <img className='h-[100px] w-[200px]' src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_images}`}    alt="imgs" />
//               <img className='h-[100px] w-[200px]' src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`}    alt="imgs" />
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

