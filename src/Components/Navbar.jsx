import React from 'react'
import { Link } from 'react-router-dom'
import gambar from "../img/logoanp.png"
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 fixed w-full px-7 bg-blue-900 bg-opacity-75 backdrop-blur-sm">
      <img className='w-[150px]' src={gambar}/> 
      </div>
    </div>
  )
}
export default Navbar
