import React from 'react'

const Hero = () => {
   return (
      <div className='relative min-h-[100vh] w-full banner bg-center bg-cover flex items-center justify-center '>
         <div className='text-center max-w-[900px]'>
            <h1 className='text-8xl text-[#6fa4e1]'>Always Choose Good</h1>
            <p className='text-[#6fa4e1] text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aut harum vitae nobis voluptate deleniti ullam corporis, iure sit doloribus vero molestiae odio voluptas fugit repudiandae necessitatibus suscipit et aliquam!</p>
            <button className='text-[25px] tracking-tight bg-[#0984e3] text-white px-2 py-2 mt-2 font-mono border border-none outline-none rounded-lg'>Our Menu</button>
         </div> 
      </div>
   )
}

export default Hero