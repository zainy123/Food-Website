import React from 'react'

const Navbar = () => {
   const menuItems = [
      {
         path: 'products',
         label: 'Product'
      },
      {
         path: 'help',
         label: 'Help'
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
   return (
      <div className='fixed w-full h-15 border-b shadow-lg border-gray-100'>
         <div className='w-full h-full flex items-center justify-between py-6'>
            <div className='pl-3'>Logo</div>
            <div>Search Bar</div>
            <div>
               <ul className='flex items-center justify-between space-x-4 pr-5'>
                  {
                     menuItems.map(menuItem =>
                        <li className=''>
                           {menuItem.label}
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