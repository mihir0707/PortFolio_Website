import React from 'react'

const Skills = () => {    
    const Card = ({title}) => {
      return (
        <div className='w-full'>
          <span className='w-full flex items-center justify-between px-4'>
            <p className='text-[21px] font-bold px-4'>{title}</p>
            {/* <p className='font-bold'>{percentage} <span>%</span></p> */}
          </span>
        </div>
      )
    }

  return (
    <main className='pt-44 bg-[#f0ebe3] dark:bg-[#1f2937] px-3' id='skills'>
       <div className='flex flex-col items-center container max-w-[1300px] mx-auto'>
        <h1 className='sm:text-[44px] text-[26px] text-center m-0 font-sans text-violet-700'> Professional Skills  </h1>

        <section className='grid lg:grid-cols-5 grid-cols-1 gap-10 mt-10'>
            <Card title='ReactJs'/>
            <Card title='ExpressJs'/>
            <Card title='SQL'/>
            <Card title='Git'/>
            <Card title='JavaScript'/>
            <Card title='Tailwind'/>
            <Card title='SpringBoot'/>
            <Card title='Python'/>
            <Card title='HTML'/>
            <Card title='Testing tool'/>
         
        </section>
       </div>
    </main>
  )
}

export default Skills
