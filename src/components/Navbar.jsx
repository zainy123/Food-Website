import React, {useState} from 'react'

const Navbar = () => {
   const [color, setColor] = useState(false)
   const changeColor = () => {
      if (window.scrollY >= 80) {
         setColor(true)
      }
      else {
         setColor(false)
      }
   }
   const menuItems = [
      {
         path: 'menu',
         label: 'Menu'
      },
      {
         path: 'expert',
         label: 'Expert'
      },
      {
         path: 'testimonails',
         label: 'Testimonails'
      },
      {
         path: 'contact',
         label: 'Contact'
      },
      {
         path: 'about',
         label: 'About'
      }
   ]
   window.addEventListener('scroll', changeColor)
   return (
      <div className={color ? 'fixed top-0 left-0 z-[10000] w-full h-13 overflow-hidden bg-white shadow-sm' : 'fixed top-0 left-0 z-[10000]  w-full h-13 overflow-hidden'
}>
         <div className='w-full h-full flex items-center justify-between py-6 px-10'>
            <div className='pl-3 text-2xl font-extrabold text-[#0984e3]'>Food<span className='text-[#0984e3]'>.</span></div>
            <div className='w-[40%] h-[40px] border border-[#0984e3] rounded-xl'>
               <input type='text' placeholder='Search here...' className='w-full h-full pl-3 outline-none border-none bg-transparent'/>
            </div>
            <div>
               <ul className='flex items-center justify-between space-x-7 pr-5'>
                  {
                     menuItems.map(menuItem =>
                        <li className='text-[#0984e3] cursor-pointer ease-in duration-500 header'>
                           <a href={menuItem.path}> {menuItem.label} </a> 
                        </li>
                     )
                  }
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Navbar