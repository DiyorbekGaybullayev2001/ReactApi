import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
// import logo from '../../imgs/adminimg.png'
import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'
import img5 from '../../imgs/img5.png'
import img6 from '../../imgs/img6.png'
import img7 from '../../imgs/img7.png'
import img8 from '../../imgs/img8.png'
import img9 from '../../imgs/img9.png'
import img10 from '../../imgs/img10.png'

const initialContacts = [
  { id: 1, name: "Lindsey Stroud", email: "lindsey.stroud@gmail.com", company: "Hatchbuck", role: "Developer", img: img1, progress: 50, lastActive: "5 Minutes ago" },
  { id: 2, name: "Nicci Troiani", email: "nicci.troiani@gmail.com", company: "Slack dev", role: "Manager", img: img2, progress: 75, lastActive: "14 Minutes ago" },
  { id: 3, name: "George Fields", email: "george.fields@gmail.com", company: "Clockify", role: "CEO", img: img3, progress: 10, lastActive: "6 Hours ago" },
  { id: 4, name: "Lindsey Stroud", email: "lindsey.stroud@gmail.com", company: "Hatchbuck", role: "Hr", img: img4, progress: 50, lastActive: "5 Minutes ago" },
  { id: 5, name: "Nicci Troiani", email: "nicci.troiani@gmail.com", company: "Slack", role: "Manager", img: img5, progress: 75, lastActive: "14 Minutes ago" },
  { id: 6, name: "George Fields", email: "george.fields@gmail.com", company: "Clockify", role: "ceo", img: img6, progress: 10, lastActive: "6 Hours ago" },
  { id: 7, name: "Lindsey Stroud", email: "lindsey.stroud@gmail.com", company: "Hatchbuck", role: "Frontend dev", img: img7, progress: 50, lastActive: "5 Minutes ago" },
  { id: 8, name: "Nicci Troiani", email: "nicci.troiani@gmail.com", company: "Slack", role: "Manager", img: img8, progress: 75, lastActive: "14 Minutes ago" },
  { id: 9, name: "George Fields", email: "george.fields@gmail.com", company: "Clockify", role: "Seo", img: img9, progress: 10, lastActive: "6 Hours ago" },
  { id: 10, name: "Lindsey Stroud", email: "lindsey.stroud@gmail.com", company: "Hatchbuck", role: "Backent dev", img: img10, progress: 50, lastActive: "1 Minutes ago" },
];

export default function Categories() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContact, setNewContact] = useState({ name: "", email: "", company: "", role: "" });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewContact((prev) => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSelection = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const deleteSelected = () => {
    setContacts(contacts.filter((contact) => !selectedContacts.includes(contact.id)));
    setSelectedContacts([]);
  };

  const addContact = () => {
    if (newContact.name && newContact.email) {
      setContacts([...contacts, { id: Date.now(), ...newContact }]);
      setNewContact({ name: "", email: "", company: "", role: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="p-6 mt-[80px]">
      <div className=" w-full flex justify-between items-center px-4">
        <div>
          {selectedContacts.length > 0 && (
            <button onClick={deleteSelected} className="bg-red-500 text-white px-4 py-2 rounded">Delete selected</button>
            )}
        </div>
        <div>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white  px-4 py-2 rounded">Add contact</button>
        </div>
      </div>
      
      <table className="w-full mt-4 border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th></th>
            <th className="text-start pl-[20px] text-gray-400">Name</th>
            <th className="text-start pl-[10px] text-gray-400">Email</th>
            <th className="text-start pl-[10px] text-gray-400">Company</th>
            <th className="text-start pl-[10px] text-gray-400">Role</th>
            <th className="text-start  text-gray-400">Forecast</th>
            <th className="text-start  text-gray-400">Resent Activity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className={`border-b hover:bg-gray-50 ${selectedContacts.includes(contact.id) ? 'bg-blue-100' : ''}`} onClick={() => toggleSelection(contact.id)}>
              <td className="pl-[10px]">
                <input type="checkbox" checked={selectedContacts.includes(contact.id)} readOnly />
              </td>
              <td className="flex p-[10px] items-center"> 
                <img src={contact.img} alt="" className="h-[30px] w-[30px] rounded-full mr-2"/>    
                {contact.name}
              </td>
              <td>{contact.email}</td>
              <td>{contact.company}</td>
              <td>{contact.role}</td>
              <td className="text-gray-500">{contact.progress} %</td>
              <td className="text-gray-500">{contact.lastActive}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded shadow-lg w-[50%]">
            <h2 className="text-xl mb-4">Add Contact</h2>
            <input type="text" placeholder="Name" required className="border p-2 w-full mb-2" value={newContact.name} onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} />
            <input type="email" placeholder="Email" className="border p-2 w-full mb-2" value={newContact.email} onChange={(e) => setNewContact({ ...newContact, email: e.target.value })} />
            <input type="text" placeholder="Company" className="border p-2 w-full mb-2" value={newContact.company} onChange={(e) => setNewContact({ ...newContact, company: e.target.value })} />
            <input type="text" placeholder="Role" className="border p-2 w-full mb-2" value={newContact.role} onChange={(e) => setNewContact({ ...newContact, role: e.target.value })} />
            <input type="file" className="border p-2 w-full mb-2" required onChange={handleImageUpload}/>
            <button onClick={addContact} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded ml-[20px]">Cancel</button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}












// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// export default function Categories() {
//   const navigate = useNavigate();
//   const [modal, setModal] = useState(false);
//   const [deleteModal, setDeleteModal] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);

//   const logoutfc = () => {
//     localStorage.removeItem("tokencha");
//     navigate("/");
//   };

//   // https://realauto.limsa.uz/api/categories
//   const [categ, setCateg] = useState([]);
//   const getCategories = () => {
//     fetch("https://realauto.limsa.uz/api/categories")
//       .then((resp) => resp.json())
//       .then((element) => setCateg(element?.data));
//   };
//   useEffect(() => {
//     getCategories();
//   }, []);

//   //post
//   const [nameEn, setNameEn] = useState();
//   const [nameRu, setNameRu] = useState();
//   const [images, setImages] = useState();
//   const token = localStorage.getItem("tokencha");
//   const createCategories = (e) => {
//     e.preventDefault();
//     const formdata = new FormData();
//     formdata.append("name_en", nameEn);
//     formdata.append("name_ru", nameRu);
//     formdata.append("images", images);

//     fetch("https://realauto.limsa.uz/api/categories", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formdata,
//     })
//       .then((res) => res.json())
//       .then((item) => {
//         if (item?.success) {
//           toast.success(item?.message);
//           getCategories();
//           setNameEn("");
//           setNameRu("");
//           setImages(null);
//           setModal(false);
//         } else {
//           toast.error(item?.message);
//         }
//       });
//   };

//   const handleEdit = (item) => {
//     setEditId(item?.id);
//     setNameEn(item?.name_en);
//     setNameRu(item?.name_ru);
//     setImages(null);
//     setModal(true);
//   };

//   // delete
//   const confirmDelete = (id) => {
//     setDeleteId(id);
//     setDeleteModal(true);
//   };

//   const deleteCategory = async () => {
//     try {
//       const response = await fetch(`https://realauto.limsa.uz/api/categories/${deleteId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const result = await response.json();
//       if (result?.success) {
//         toast.success(result?.message);
//         getCategories();
//       } else {
//         toast.error(result?.message);
//       }
//     } catch (error) {
//       toast.error("Kategoriyani o'chirishda xatolik yuz berdi!");
//     } finally {
//       setDeleteModal(false);
//       setDeleteId(null);
//     }
//   };

//   // put
//   const [editId, setEditId] = useState(null);

//   const editCategory = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name_en", nameEn);
//     formData.append("name_ru", nameRu);
//     if (images) formData.append("images", images);

//     try {
//       const response = await fetch(`https://realauto.limsa.uz/api/categories/${editId}`, {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });
//       const result = await response.json();
//       if (result?.success) {
//         toast.success(result?.message);
//         getCategories();
//         setModal(false);
//         setEditId(null);
//         setNameEn("");
//         setNameRu("");
//         setImages(null);
//       } else {
//         toast.error(result?.message);
//       }
//     } catch (error) {
//       toast.error("Tahrirlash jarayonida xatolik yuz berdi!");
//     }
//   };

//   return (
//     <>
//       <div className='w-full'>
//         {modal && (
//           <div className='fixed z-500 items-center m-auto bg-[#d7d7d7] w-[100%] h-[100%]'>
//             <div className='absolute top-[250px] w-full items-center h-[100vh] m-auto text-center'>
//               <form onSubmit={editId ? editCategory : createCategories} className="items-center m-auto grid grid-cols-1 w-[30%] p-[10px] text-center">
//                 <input
//                   value={nameEn}
//                   onChange={(e) => setNameEn(e?.target?.value)}
//                   className="border m-[10px] p-[10px] rounded-lg"
//                   type="text"
//                   placeholder="name en"
//                   required
//                   minLength={2}
//                 />
//                 <input
//                   value={nameRu}
//                   onChange={(e) => setNameRu(e?.target?.value)}
//                   className="border m-[10px] p-[10px] rounded-lg"
//                   type="text"
//                   placeholder="name ru"
//                   required
//                   minLength={2}
//                 />
//                 <input
//                   onChange={(e) => setImages(e?.target?.files[0])}
//                   accept="image/*"
//                   className="border m-[10px] p-[10px] rounded-lg"
//                   type="file"
//                 />
//                 <button className="border text-white font-semibold m-[10px] p-[10px] rounded-lg bg-[#2d3ce3]">
//                   {editId ? "Edit" : "Add"} +
//                 </button>
//               </form>
//               <button onClick={() => setModal(false)} className="border text-white font-bold px-[80px] p-[10px] rounded-xl bg-[#5f1fdf]"> CLOSE </button>
//             </div>
//           </div>
//         )}

//         {deleteModal && (
//           <div className='fixed z-500 items-center m-auto bg-[#d7d7d7] w-[100%] h-[100%]'>
//             <div className='absolute top-[250px] w-full items-center h-[100vh] m-auto text-center'>
//               <p>Do you want to delete this category?</p>
//               <br />
//               <button onClick={deleteCategory} className="bg-red-500 text-white p-[10px] rounded-lg mr-2">OK</button>
//               <button onClick={() => setDeleteModal(false)} className="bg-gray-500 text-white p-[10px] rounded-lg">NO</button>
//             </div>
//           </div>
//         )}

//         <div className='w-full h-[100vh]'>
//           <div className='overflow-hidden overflow-y-scroll h-[100vh] pt-[85px] pl-1'>
//             <table className='w-full border-collapse'>
//               <thead>
//                 <tr className='bg-[#371ce4] text-white'>
//                   <th className='border text-left p-[8px]'>Name En</th>
//                   <th className='border text-left p-[8px]'>Name Ru</th>
//                   <th className='border text-left p-[8px]'>Images</th>
//                   <th className='bg-white'> {
//                     !modal &&
//                     <button onClick={() => setModal(true)} className='bg-[#5f1fdf] p-[10px]'> Add  + </button>
//                   }</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categ?.map((item, index) => (
//                   <tr key={index} className='bg-[#f0f0f0]'>
//                     <td className='border text-left p-[8px]'>{item?.name_en}</td>
//                     <td className='border text-left p-[8px]'>{item?.name_ru}</td>
//                     <td className='border text-left p-[5px]'>
//                       <img className='h-[100px] w-[200px]' src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`} alt="" />
//                     </td>
//                     <td>
//                       <button
//                         onClick={() => handleEdit(item)}
//                         className="bg-yellow-500 text-white p-[8px] rounded-lg mr-2"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => confirmDelete(item?.id)}
//                         className="bg-red-500 text-white p-[8px] rounded-lg"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
