import React from 'react'
import { FaLinkedin,FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa6'
import ProfileImg from '../assets/image.svg'
import resume from '../assets/Mihir_Parab_Resume.pdf'

const Intro = () => {
  return (
    <main className='min-h-screen flex xl:pt-0 pt-36 bg-[#f0ebe3] dark:bg-[#1f2937]' id='home'>
      <div className='xl:flex items-center container max-w-[1300px] mx-auto lg:px-3'>
        <section className='xl:w-1/2 xl:text-left text-center'>
              <p className='text-[15px] font-bold'>HELLO<span> MY NAME IS</span></p>
              <h1 className='xl:text-[64px] text-[64px] m-0 sm:py-0 py-4 text-violet-700'>MIHIR <span>PARAB</span></h1>
              <p className='text-[15px] font-bold'> I AM A FRESHER </p>
              <span className='xl:block'>
                <p className='text-lg pt-4 pb-4 text-[#262626] dark:text-white lg:w-4/5 font-sans'>
                    I've recently completed Post Graduate Diploma in Advanced Computing from C-DAC Nagpur with a decent score of 60.25% . I've also worked on projects including FrontEnd as well as BackEnd Technologies.
                </p>

                <div className='flex items-center gap-x-8 pb-6 cursor-pointer text-[20px] pt-4'>
                     <MdEmail/>
                     <FaPhoneAlt/>
                     <a href="https://www.linkedin.com/in/mihir-parab-5528a4241/"><FaLinkedin/></a>
                     <a href='https://github.com/mihir0707'><FaGithub/></a>
                </div>

                <div className='flex items-center w-fit text-[15px] font-bold pt-4'>
                    <span className='block rounded-full h-14 border border-black border-solid'>
                        <a href={resume} download="Resume"><button className='bg-transparent dark:text-white h-full font-bold px-8
                        rounded-full hover:border-2 border-solid hover:bg-[#29a587] hover:text-white'>
                           Download Resume
                        </button></a>

                    </span>
                </div>
              </span>
        </section>
        <section className='xl:w-1/2'>
            <div className='w-full sm:h-[680px] h-full relative xl:block flex justify-centre xl:mt-16 mt-16'>
                <img src={ProfileImg} alt='' className='lg:w-auto h-4/5 py-10 hover:animate-pulse rounded-full border-solid cursor-pointer'/>
            </div>
        </section>
      </div>
    </main>
  )
}

export default Intro
