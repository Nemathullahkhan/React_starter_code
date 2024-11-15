import { Heart, HeartPulse, Search, Soup } from 'lucide-react'
import React from 'react'
import ReceipeCard from '../components/ReceipeCard'

const HomePage = () => {
  return (
   <>
    <div className=" p-[50px] flex-1">
      <div className='max-w-screen ms-auto'>
        <form>
          <label className='input bg-slate-900 shadow-md flex items-center gap-2'>
            <Search/>
            <input type="text"
            className='text-sm md:text-md grow'
            placeholder='What do you want to cook today?' />
         </label>
        </form>

        <p className='font-bold text-3xl md:text-4xl mt-4'>
          Recommended Recipes
        </p>
        <p className='font-semibold text-slate-500 ml-1 my-2 text-sm tracking-tighter'>
          Popular Choices
        </p>

        <div className="max-w-screen-xl mx-auto p-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Example Grid Item */}

            <ReceipeCard/>
            <ReceipeCard/>
            <ReceipeCard/>
            <ReceipeCard/>
            <ReceipeCard/>
            <ReceipeCard/>
            <ReceipeCard/>
            <ReceipeCard/>
            <ReceipeCard/>
            <ReceipeCard/>
            <ReceipeCard/>
            

            
            
          </div> 
        </div>


      </div>
    </div>
   </>
  )
}

export default HomePage