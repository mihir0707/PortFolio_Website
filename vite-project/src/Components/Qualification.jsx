import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Qualification = () => {
    const Timeline = ({Number1,Number2,courseName,CollegeName,YOP,Grade,courseName2,CollegeName2,YOP2,Grade2}) => {
            return(
              <div className='container mx-auto w-full h-full'>
                <div className='relative wrap overflow-hidden p-10 h-full'>
                      {/* <div className='border-2-2 absolute border-opacity-20 border-gray-700 h-full border'></div> */}

                      {/* <!-- right timeline --> */}

                      <div className='mb-8 flex justify-between items-center w-full right-timeline duration-500 hover:scale-105'>
                        <div className='order-1 w-5/12'></div>

                        <div className='z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 rounded-full'>
                                <h1 className='mx-auto font-semibold text-lg text-white'>{Number1}</h1>
                        </div>

                        <div className='order-1 bg-blue-400 rounded-lg shadow-xl w-5/12 px-6 py-4'>
                                   <h1 className='mb-3 font-bold text-white text-xl'>{courseName}</h1>
                                   <h3 className='text-white font-bold pt-5 pb-5'>{CollegeName}</h3>
                                   <p className='text-sm leading-snug tracking-wide text-white font-bold text-opacity-100'>{YOP}</p>
                                   <h3 className='text-sm leading-snug tracking-wide text-white text-opacity-100 font-bold pt-5'>{Grade}</h3>
                        </div>
                      </div>


                                 {/* Left Timeline */}
                      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline duration-500 hover:scale-105">
                            <div className="order-1 w-5/12"></div>
                           <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                              <h1 className="mx-auto text-white font-semibold text-lg">{Number2}</h1>
                           </div>
                           <div className="order-1 bg-blue-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                              {/* <h1 className="mb-3 font-bold text-white text-xl">{courseName2}</h1>
                              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                                   <h1 className='mb-3 font-bold text-white text-xl'>{courseName2}</h1>
                                   <h3 className='text-white font-bold pt-5 pb-5'>{CollegeName2}</h3>
                                   <p className='text-sm leading-snug tracking-wide text-white font-bold text-opacity-100'>{YOP2}</p>
                                   <h3 className='text-sm leading-snug tracking-wide text-white font-bold text-opacity-100 pt-5'>{Grade2}</h3>

                            </div>
                      </div>

                </div>
              </div>
            )  
    }

  return (
    <main className='bg-[#f0ebe3] pt-44 px-10 '>
       <div className='flex flex-col items-center'>
             <h1 className='sm:text-[44px] text-[26px] text-center m-0 text-violet-700 container mx-auto'> Educational Details</h1>
       </div>

       <section>
          <Timeline
                Number1 = "1"
                courseName="Post Graduate Diploma in Advanced Computing"
                CollegeName="Centre For Development of Advanced Computing (C-DAC)"
                YOP = "2024 | Nagpur, India"
                Grade="60.25%"

                Number2 = "2"
                courseName2="B.E. (Electrical)"
                CollegeName2="Lokmanya Tilak College of Engineering"
                YOP2 = "2023 | Navi Mumbai, India"
                Grade2 = "59.86%"
          />

          <Timeline
                Number1 = "3"
                courseName="XII"
                CollegeName="ST. Mary's Junior College"
                YOP = "2019 | Navi Mumbai, India"
                Grade="66.46%"

                Number2="4"
                courseName2="X"
                CollegeName2="ST. Mary's High School"
                YOP2 = "2017 | Navi Mumbai, India"
                Grade2 = "84%"
          />

       </section>

    </main>
  )
}

export default Qualification
