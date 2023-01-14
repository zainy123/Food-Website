import React from 'react'
import AboutImage from '../assests/e5.jpg'
const AboutUs = () => {
   return (
      <div className='grid grid-cols-2 m-7 gap-4'>
         <div className='flex items-center justify-center flex-col pl-5 max-w-[80%]'>
            <h1
               className='text-center text-3xl pb-4 text-[#0984e3] tracking-wider'>
               <span className='text-[#ff0517] text-5xl'>W</span>
               ho we are
            </h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo commodi, cum, optio earum excepturi odio itaque doloremque esse nulla obcaecati doloribus consequuntur? Obcaecati sit unde, illo exercitationem ducimus beatae culpa magnam voluptates, molestias repellat vitae amet reprehenderit quidem rem, id quod distinctio saepe odit iusto. Expedita laborum similique voluptatum
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo commodi, cum, optio earum excepturi odio itaque doloremque esse nulla obcaecati doloribus consequuntur? Obcaecati sit unde, illo exercitationem ducimus beatae culpa magnam voluptates, molestias repellat vitae amet reprehenderit quidem rem, id quod distinctio saepe odit iusto. Expedita laborum similique voluptatum.</p>
         </div>
         <div className='relative w-full min-h-[400px] overflow-hidden'>
            <img src={AboutImage} alt='About us' className='absolute top-0 left-0 object-contain w-full h-full'/>
         </div>
      </div>
   )
}

export default AboutUs