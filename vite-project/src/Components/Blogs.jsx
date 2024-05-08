import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Blogs = () => {  

  const Card = ({date, title, image, text}) => {
    return (
      <div>
         <div className='bg-white rounded-[20px] py-[30px] px-[35px] relative overflow-hidden duration-500 hover:scale-105'>
          <p className='text-[13px] font-medium dark:text-black'>{date}</p>
          <p className='text-2xl font-bold text-[#29a587] my-[15px]'>{title}</p>
          <p className='text-[#262626] opacity-80 leading-[1.7rem]'>{text}</p>

          <span className='pt-[10px]'>
            <a href='/' className='font-bold flex items-center gap-x-2 no-underline text-black pt-5'>
                    Read More <FaArrowRight className='text-[#29a587]'/>
            </a>
          </span>

          <img src={image} alt='' className='rounded-[18px] h-[180px] w-full object-cover mt-[30px]'/>
         </div>
      </div>
    )
  }  

  return (
    <main className='pb-5 pt-52 px-3 bg-[#f0ebe3] dark:bg-[#1f2937] id="blog"'>
        <div className='flex flex-col items-center container max-w-[1300px] mx-auto'>
            <h1 className='text-violet-700 sm:text-[44px] text-[26px] text-center m-0 '>Blog Section</h1>
            <p className='font-medium text-medium flex items-center text-center gap-x-4'>TECH<span className='caveat text-2xl text-black'>BLOGS</span></p>

            <section className='grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-10 mt-[60px]'>
              <Card 
              date="June 06, 2023"
              title="ChatGPT and Bard: What’s the difference?"
              text="For programmers, Generative AI offers tangible benefits. It helps with writing and debugging code, making our busy lives a bit easier as a result. But there are now competing tools like ChatGPT and Bard, which begs the question: which one is best for me to use?"
              image="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/ChatGPT-vs-Bard-c.png"
              />

              <Card 
              date="April 15, 2024"
              title="The new AWS Cloud Practitioner (CLF-C02): What to expect"
              text="The new version of the Certified Cloud Practitioner exam will be replacing the old one on September 18. Here's what you need to know if you're going to take it."
              image="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/AWS-CLF-exam-change.resize.1013.jpg"
              />

              <Card 
              date="May 02, 2024"
              title="How to use GraphQL in Spring: An easy step-by-step tutorial"
              text="Want to get started using GraphQL in Spring? In this guide, we cover how to set up a basic GraphQL server application and test it, so you can start building."
              image="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/SpringFramework.webp"
              />

              <Card 
              date="May 02, 2024"
              title="What is Go? An intro to Google's Go programming language (aka Golang)"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              image="https://www.pluralsight.com/content/dam/ps/blog/migration/app/uploads/2021/05/WhatsGolang.resize.1013.jpg"
              />

              <Card 
              date="April 30, 2019"
              title="Creating and Opening JAR Files Using the Java Programming Language"
              text="Jar extension (.jar) is an archiving format designed to structure and compress JAVA data files in one file class built on the ZIP format."
              image="https://pbs.twimg.com/profile_images/1410016948977422337/rKU8iR89_400x400.png"
              />

              <Card 
              date="May 06, 2024"
              title="RSA Conference 2024: The future of AI security"
              text="Day one of RSA Conference 2024 focused on AI security and how organizations can look to government policy to inform their security practices."
              image="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/AINews.resize.1013.jpg"
              />

            </section>
        </div>
    </main>
  )
}

export default Blogs
