import { Heart, HeartPulse, Soup } from 'lucide-react'
import React from 'react'

const ReceipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-gray-100 shadow-md overflow-hidden">
              <a href="#" className="relative h-32">
                <img
                  src="/1.jpg"
                  alt="recipeimage"
                  className="rounded-md w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-white p-1 rounded-full flex items-center">
                  <Soup size={16} /> 4 Servings
                </div>
                <div className="absolute top-1 right-2 bg-white rounded-full p-1 ">
                  <Heart size = {20} fill="none" className='hover:fill-red-500 hover:text-red-500'/>
              </div>
              </a>
              <div className="p-3">
                <p className="text-black font-bold">Roasted Chicken</p>
                <p className="text-black text-sm">Turkish Kitchen</p>
                <div className="flex gap-2 mt-2">
                  <div className="bg-slate-800 p-1 rounded flex items-center tracking-tighter gap-1">
                    <HeartPulse size={16} /> Gluten-Free
                  </div>
                  <div className="bg-green-200 p-1 rounded flex items-center tracking-tighter gap-1">
                    <HeartPulse size={16} /> Heart-Free
                  </div>
                </div>
              </div>
            </div>
  )
}

export default ReceipeCard