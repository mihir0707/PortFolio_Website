import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

const NavBar = () => {
    const [dropdown,setDropdown] = useState(false)

    const showDropdown = () =>{
        setDropdown(!dropdown)
    };

  return (
    <nav className='w-full lg:h-auto h-[10vh] flex flex-col justify-center items-center fixed z-50 bg-[#f0ebe3] dark:bg-[#1f2937]'>
      <div className='w-[95%] h-[10vh] flex justify-between items-baseline pt-2 text-violet-600 relative'>
          <div className='flex justify-between items-center w-full pt-4'> 
               <a href='/' className=' text-xl font-bold'>PortFolio.com</a>
          </div>

          {
            dropdown ? (
                <div className='text-2xl cursor-pointer text-[#1f2035] ml=[6px] lg:absolute z-10 top-6 right-0' onClick={showDropdown}>
                    <MdClose/>
                </div>

            ) : (
                <div className='text-2xl cursor-pointer text-[#1f2035] ml=[6px] dark:text-white' onClick={showDropdown}>
                    <HiMenuAlt3/>
                </div>
            )
          }
      </div>
      
        {dropdown ? (
            <div className='w-full h-[100vh] lg:w-[512px] absolute lg:top-0 top-[10vh] lg:right-0 bg-[#f0ebe3] dark:bg-[#1f2937] transition ease-in-out duration-150' onClick={showDropdown}>
                <div className='w-full lg:h-full h-[320px] flex flex-col items-baseline pt-20 gap-4 text-[#12222E]'>
                    <ul className='font-medium text-[18px] px-3 flex flex-col justify-center items-center w-full h-full lg:mt-0 mt-[10vh] gap-y-8'>
                           <a href='home' className='cursor-pointer no-underline text-black lg:hover:text-[#29a587] md:hover:text-[#29a587]'>Home</a>
                           <a href='home' className='cursor-pointer no-underline text-black hover:text-[#29a587]'>Skills</a>
                           <a href='home' className='cursor-pointer no-underline text-black hover:text-[#29a587]'>Projects</a>
                           <a href='home' className='cursor-pointer no-underline text-black hover:text-[#29a587]'>Education</a>
                           <a href='home' className='cursor-pointer no-underline text-black hover:text-[#29a587]'>Blogs</a>
                    </ul>
                </div>
            </div>
        ):null
      }
    </nav>
  )
}

export default NavBar
