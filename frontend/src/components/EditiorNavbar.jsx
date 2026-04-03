import React from 'react'
import logo from "../images/logo.png"
import { FiDownload, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


const EditiorNavbar = ({ projectTitle }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="EditiorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="flex items-center gap-4">
          <i onClick={() => navigate(-1)} className='p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px] hover:bg-gray-700'><FiArrowLeft /></i>
          <div className="logo">
            <img className='w-[150px] cursor-pointer' src={logo} alt="" />
          </div>
        </div>
        <p>File / <span className='text-[gray]'>{projectTitle || "Loading..."}</span></p>
        <i className='p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]'><FiDownload /></i>
      </div>
    </>
  )
}

export default EditiorNavbar