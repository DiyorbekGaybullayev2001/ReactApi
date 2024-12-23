import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Categories() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const logoutfc = () => {
    localStorage.removeItem("tokencha");
    navigate("/");
  };

  // https://realauto.limsa.uz/api/categories
  const [categ, setCateg] = useState([]);
  const getCategories = () => {
    fetch("https://realauto.limsa.uz/api/categories")
      .then((resp) => resp.json())
      .then((element) => setCateg(element?.data));
  };
  useEffect(() => {
    getCategories();
  }, []);

  //post
  const [nameEn, setNameEn] = useState();
  const [nameRu, setNameRu] = useState();
  const [images, setImages] = useState();
  const token = localStorage.getItem("tokencha");
  const createCategories = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name_en", nameEn);
    formdata.append("name_ru", nameRu);
    formdata.append("images", images);

    fetch("https://realauto.limsa.uz/api/categories", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
    })
      .then((res) => res.json())
      .then((item) => {
        if (item?.success) {
          toast.success(item?.message);
          getCategories();
          setNameEn("");
          setNameRu("");
          setImages(null);
          setModal(false);
        } else {
          toast.error(item?.message);
        }
      });
  };

  const handleEdit = (item) => {
    setEditId(item?.id);
    setNameEn(item?.name_en);
    setNameRu(item?.name_ru);
    setImages(null);
    setModal(true);
  };

  // delete
  const confirmDelete = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const deleteCategory = async () => {
    try {
      const response = await fetch(`https://realauto.limsa.uz/api/categories/${deleteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result?.success) {
        toast.success(result?.message);
        getCategories();
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      toast.error("Kategoriyani o'chirishda xatolik yuz berdi!");
    } finally {
      setDeleteModal(false);
      setDeleteId(null);
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
        setModal(false);
        setEditId(null);
        setNameEn("");
        setNameRu("");
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
        {modal && (
          <div className='fixed z-500 items-center m-auto bg-[#d7d7d7] w-[100%] h-[100%]'>
            <div className='absolute top-[250px] w-full items-center h-[100vh] m-auto text-center'>
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
                <button className="border text-white font-semibold m-[10px] p-[10px] rounded-lg bg-[#2d3ce3]">
                  {editId ? "Edit" : "Add"} +
                </button>
              </form>
              <button onClick={() => setModal(false)} className="border text-white font-bold px-[80px] p-[10px] rounded-xl bg-[#5f1fdf]"> CLOSE </button>
            </div>
          </div>
        )}

        {deleteModal && (
          <div className='fixed z-500 items-center m-auto bg-[#d7d7d7] w-[100%] h-[100%]'>
            <div className='absolute top-[250px] w-full items-center h-[100vh] m-auto text-center'>
              <p>Do you want to delete this category?</p>
              <br />
              <button onClick={deleteCategory} className="bg-red-500 text-white p-[10px] rounded-lg mr-2">OK</button>
              <button onClick={() => setDeleteModal(false)} className="bg-gray-500 text-white p-[10px] rounded-lg">NO</button>
            </div>
          </div>
        )}

        <div className='w-full h-[100vh]'>
          <div className='overflow-hidden overflow-y-scroll h-[100vh] pt-[85px] pl-1'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-[#371ce4] text-white'>
                  <th className='border text-left p-[8px]'>Name En</th>
                  <th className='border text-left p-[8px]'>Name Ru</th>
                  <th className='border text-left p-[8px]'>Images</th>
                  <th className='bg-white'> {
                    !modal &&
                    <button onClick={() => setModal(true)} className='bg-[#5f1fdf] p-[10px]'> Add  + </button>
                  }</th>
                </tr>
              </thead>
              <tbody>
                {categ?.map((item, index) => (
                  <tr key={index} className='bg-[#f0f0f0]'>
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
                        onClick={() => confirmDelete(item?.id)}
                        className="bg-red-500 text-white p-[8px] rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
