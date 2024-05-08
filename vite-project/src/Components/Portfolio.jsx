import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import JobPortal from '../assets/jobportal.svg'
import Personal_PortFolio from '../assets/personal_portfolio.svg'
import MindMentor from '../assets/mindmentor.svg'
import { Link } from 'react-router-dom'


const Portfolio = () => {      
      const Card = ({title,sub_title,Img,text}) => {
        return (
          <div>
                <div className='bg-white rounded-[20px] py-[30px] px-[35px] relative overflow-hidden shadow-2xl duration-500 hover:scale-105'>
                    <img src={Img} alt='' className='h-48 rounded-[18px] object-cover'/>
                    <p className='text-[20px] text-[#29a587] font-bold pt-[30px] m-0 pb-[5px]'>{title}</p>
                    <p className='text-[#262626] opacity-80 my-[30px] leading-[1.7rem]'>{text}</p>
                    <h3 className='text-[#262626] opacity-80'>{sub_title}</h3>
                    <a href='https://github.com/JobKart123/Placement_Portal' className='font-bold flex items-center gap-x-2 no-underline text-black pt-[20px]'>
                        Know More
                       <FaArrowRight className='text-[#29a587]'/>
                    </a>
                </div>
          </div>
        )
      }
            
    return (
    <main className='pb-5 pt-52 px-10 bg-[#f0ebe3] dark:bg-[#1f2937] id="works"'>
        <div className='flex flex-col items-center container max-w-[1300px] mx-auto'>
            <h1 className='sm:text-[44px] text-[26px] text-center m-0 text-violet-700'>Portfolio</h1>
            <p className='font-medium text-lg text-black flex item-center text-center gap-x-4 pt-5 pb-10'>My Projects</p>
        </div>
      
        <section className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
          <Card 
            title= "Placement Portal"
            Img = {JobPortal}
            text = "A secure Placement Portal designed to streamline the job placement process for students."
            sub_title= "Technology : React, SpringBoot, SQL"
          />

          <Card 
            title= "PortFolio Website"
            Img = {Personal_PortFolio}
            text = "This is a frontend project highlighting my Personal PortForlio created with an intention through which recruiters can acquire detailed knowledge about my profile ."
            sub_title= "Technology : React, Tailwind Css"
          />

          <Card 
            title= "Lorem Ipsum"
            Img = {MindMentor}
            text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            sub_title= "Technology : ABC, XYZ, PQR"
          />

        </section>
    </main>
  )
}

export default Portfolio
