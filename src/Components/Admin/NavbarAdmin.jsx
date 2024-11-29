import React from 'react'
import logoAPk from "../../img/logoanp.png"

const NavbarAdmin = () => {
  return (
    <div className='flex items-center bg-blue-900  bg-opacity-75 fixed w-full py-1 backdrop-blur-sm'>
      <img src={logoAPk} alt="" className='w-[150px] '/>
    </div>
  )
}

export default NavbarAdmin
