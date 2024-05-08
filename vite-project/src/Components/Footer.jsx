import React from 'react'
import { FaLinkedin,FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-[#f0ebe3] dark:bg[#1f2937] px-3'>
        <div className='container mx-auto py-[60px] flex sm:flex-row flex-col gap-y-4 items-center justify-between'>
                <div className='flex items-center gap-x-8 text-[20px] cursor-pointer'>
                   <a href='https://www.linkedin.com/in/mihir-parab-5528a4241/'><FaLinkedin/></a>
                   <FaPhoneAlt/>
                   <MdEmail/>
                   <a href='https://github.com/mihir0707'><FaGithub/></a>
                </div>

                <p className='font-sans text-[15px] text-gray-950'> ©️ 2024<span className='text-violet-700 px-2'>PortFolio.com.</span>All Rights Reserved.</p>

        </div>
    </footer>
  )
}

export default Footer
