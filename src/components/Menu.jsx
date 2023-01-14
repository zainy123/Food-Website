import React from 'react'
import Pizza from '../assests/pizza.jpg'
import Burger  from '../assests/burger.jpg'
import Pasta  from '../assests/pasta.jpg'
import Salad from '../assests/salad.jpg'
import Sandwitch from '../assests/sandwich.jpg'
import Spaghetti from "../assests/spaghetti.jpg"
const Menu = () => {
   const Images = [
      {
         path: Pizza,
         label: 'Pizza'
      },
      {
         path: Burger,
         label: 'Burger'
      },
      {
         path: Pasta,
         label: 'Pasta'
      },
      {
         path: Salad,
         label: 'Salad'
      },
      {
         path: Sandwitch,
         label: 'Sandwich'
      },
      {
         path: Spaghetti,
         label: 'Spaghetti'
      }
   ]
   return (
      <div className='flex flex-col items-center justify-center mt-[190px]'>
         <div className='flex flex-col items-center justify-center'>
            <h1 className='tracking-wider text-lg'>Our<span className='text-[#ff0157] font-bold text-5xl'>M</span>enu</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga?</p>
         </div>
         <div className='grid grid-flow-row grid-cols-4 gap-7 pt-14 pb-24'>
            {
               Images.map(img =>
                  <div className='flex flex-col w-[340px] border shadow-xl m-3'>
                     <div className='relative w-full h-[300px]'>
                        <img src={img.path} alt={img.label}  className='top-0 left-0 absolute w-full h-full object-cover p-3'/>
                     </div>
                     <div>
                        <p className='text-xl p-4 pt-2 text-[#0985e3]'>{img.label}</p>
                     </div>
                  </div>
               )
            }
         </div>
      </div>
   )
}

export default Menu