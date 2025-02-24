import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import imgs1 from "../../imgs/img1.png";
import imgs2 from "../../imgs/img2.png";
import imgs3 from "../../imgs/img3.png";
import imgs4 from "../../imgs/img4.png";
import imgs5 from "../../imgs/img5.png";
import imgs6 from "../../imgs/img6.png";
import imgs7 from "../../imgs/img7.png";
import imgs8 from "../../imgs/img8.png";
import imgs9 from "../../imgs/img9.png";

const messagesData = [
  { id: 1, name: "Lindsey Stroud", avatar: imgs1, message: "Your idea for this application is nice!", time: "30 Dec 2018, 12:34", unread: 1, messages: [
    { sender: "Lindsey Stroud", text: "Hello...", time: "11:12" },
    { sender: "You", text: "Hello...", time: "11:20" },
      { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga facere, placeat tenetur odio ratione libero quisquam. Esse, fugiat ipsum?", time: "11:12" },
      { sender: "You", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga facere, placeat tenetur odio ratione libero quisquam. Esse, fugiat ipsum?", time: "11:20" },
    ] },
  { id: 2, name: "Nicci Troiani", avatar: imgs2, message: "Nicci is typing a message...", time: "30 Dec 2018, 11:12", unread: 2, messages: [
    { sender: "Lindsey Stroud", text: "Hey", time: "11:11" },
    { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", time: "11:12" },
    // { sender: "You", text: "Hello...", time: "11:20" },
  ] },
  { id: 3, name: "WordPress conferesion", avatar: imgs3, message: "You: Sure!", time: "29 Dec 2018, 18:05", unread: 0, messages: [] },
  { id: 4, name: "Rebecca Moore", avatar: imgs4, message: "You: I’m not sure about this..", time: "29 Dec 2018, 18:05", unread: 0, messages: [] },
  { id: 5, name: "Jane Doe", avatar: imgs5, message: "You: I have a new feature for this project.", time: "29 Dec 2018, 18:05", unread: 6, messages: [
    { sender: "Lindsey Stroud", text: "Hey", time: "11:11" },
    { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", time: "11:12" },
    { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", time: "11:13" },
    { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", time: "11:14" },
    { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", time: "11:15" },
    { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", time: "11:16" },
    // { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", time: "11:12" },
  ] },
  { id: 6, name: "Jones Dermot", avatar: imgs6, message: "", time: "29 Dec 2018, 18:05", unread: 0, messages: [] },
  // { id: 7, name: "Martin Merces", avatar: imgs7, message: "You: Can we schedule an online meeting? Thanks! ", time: "29 Dec 2018, 18:05", unread: 0, messages: [] },
  { id: 8, name: "Franz Ferdinand", avatar: imgs8, message: "You: It’s fine!", time: "29 Dec 2018, 18:05", unread: 3, messages: [
    { sender: "Lindsey Stroud", text: "Hey...", time: "11:11" },
    { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", time: "09:12" },
    { sender: "Lindsey Stroud", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", time: "16:12" },
  ] },
  
];

export default function ChatApp() {
  const [messages, setMessages] = useState(messagesData);
  const [activeChat, setActiveChat] = useState(messages[0]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setActiveChat({ ...activeChat, messages: [...(activeChat.messages || []), { sender: "You", text: newMessage, time: "Just now" }] });
    setNewMessage("");
  };

  return (
    <div className="flex h-[80%] w-[95%] mt-[100px] m-[30px] shadow-2xl rounded-lg">
      <div className="w-1/3 bg-white border-r p-4 overflow-y-auto rounded-md">
        {messages.map((chat) => (
          <div
            key={chat.id}
            className={`p-4 rounded-lg cursor-pointer flex items-center gap-3 ${activeChat.id === chat.id ? "bg-blue-100" : "hover:bg-gray-200"}`}
            onClick={() => setActiveChat(chat)}
          >
            <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <h4 className="font-bold">{chat.name}</h4>
              <p className="text-gray-500 text-sm truncate">{chat.message}</p>
            <p className="text-[10px]">{chat.time}</p>
            </div>
            {chat.unread > 0 && <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{chat.unread}</div>} 
          </div>
        ))}
      </div>

      <div className="w-2/3 flex flex-col h-full rounded-xl">
        <div className="bg-white border-b p-4 font-bold flex items-center gap-2 rounded-t-xl">
          <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full" />
          {activeChat.name}
        </div>
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {(activeChat.messages || []).map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.sender === "You" ? "text-right" : "text-left"}`}>
              <div className={`inline-block p-3 w-[70%] rounded-lg ${msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>{msg.text}</div>
              <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 flex items-center gap-2 border-t rounded-b-xl">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border p-2 rounded-lg focus:outline-none"
          />
          <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            <IoIosSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}







// import React, { useEffect, useState } from 'react'
// import {useNavigate} from 'react-router-dom'
// import { toast } from 'react-toastify'

// export default function Locations() {

    
//   const navigate = useNavigate()
  
//   const logoutfc=()=>{
//     localStorage.removeItem("tokencha")
//     navigate("/")
//   }
//   // https://realauto.limsa.uz/api/

//   // get
//   const [categ, setcateg]=useState([])
//   const getCategories=()=>{
//     fetch("https://realauto.limsa.uz/api/locations")
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
//     fetch("https://realauto.limsa.uz/api/locations",{
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
//       const response = await fetch(`https://realauto.limsa.uz/api/locations/${id}`, {
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
//     const response = await fetch(`https://realauto.limsa.uz/api/locations/${editId}`, {
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


