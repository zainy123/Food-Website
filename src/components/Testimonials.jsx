import React from 'react'
import T1 from '../assests/t1.jpg'
import T2 from '../assests/t2.jpg'
import T3 from '../assests/t3.jpg'


const Testimonials = () => {
   return (
      <div className='main-container mt-4'>
         <div className='flex flex-col items-center justify-center pt-7'> 
            <h1 className='text-[#0984e3] text-[30px]'><span className='text-[#ff0157] text-5xl'>T</span>hey Say About Us</h1>
            <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, minima.</p>
         </div>
         <div className='content-container flex items-center justify-center flex-row flex-wrap overflow-hidden'>
            <div className='card w-[340px] p-10 flex flex-col justify-center items-center bg-white border m-20'>
               <div className='img relative w-20 h-20 mb-5 rounded-[50%] overflow-hidden min-h-0'>
                  <img src={ T1 } alt='testimonail pic' className='absolute top-0 left-0 w-full h-full object-cover bg-cover bg-center'/>
               </div>
               <div>
                  <p>lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum </p>
                  <h1 className='text-[#3498db] text-center pt-2'>Some Famouse Guy</h1>
               </div>
            </div>
            <div className='card w-[340px] p-10 flex flex-col justify-center items-center bg-white border m-20'>
               <div className='img relative w-20 h-20 mb-5 rounded-[50%] overflow-hidden min-h-0'>
                  <img src={T2} alt='testimonail pic' className='absolute top-0 left-0 w-full h-full object-cover bg-cover bg-center'/>
               </div>
               <div>
                  <p>lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum </p>
                  <h1 className='text-[#3498db] text-center pt-2'>Some Famouse Guy</h1>
               </div>
            </div>
            <div className='card w-[340px] p-10 flex flex-col justify-center items-center bg-white border m-20'>
               <div className='img relative w-20 h-20 mb-5 rounded-[50%] overflow-hidden min-h-0'>
                  <img src={T3} alt='testimonail pic' className='absolute top-0 left-0 w-full h-full object-cover bg-cover bg-center'/>
               </div>
               <div>
                  <p className=''>lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum </p>
                  <h1 className='text-[#3498db] text-center pt-2'>Some Famouse Guy</h1>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testimonials