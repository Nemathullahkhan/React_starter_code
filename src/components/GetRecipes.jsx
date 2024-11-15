import React, { useState } from 'react'

const GetRecipes = () => {
    const [input,setInput] = useState('')
    const [receipes, setReceipes] = useState([])

    const API_KEY = import.meta.env.VITE_RAPID_API_KEY; 
    const fetchData = async(receipe)=>{
        const encodedDish = encodeURIComponent(receipe);
        const response = await fetch(`https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${encodedDish}`,{
            methods:'GET',
            headers:{
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com'
            }
        });
        const data = await response.json();
        console.log(data);
        setReceipes(data);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetchData(input);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder='Enter the name of dish'
         value={input}
         onChange={(e)=>{setInput(e.target.value)}}/>
    </form>
    
    {receipes.length>0 ?(
        <div className="">
            {receipes.map((dish,index)=>(
                <div key ={index} className="">
                    <h1>{dish.title}</h1>
                    <p>{dish.instructions}</p>
                </div>
            ))}
        </div>
    ):(
        <div>Enter something</div>
    )}
    
    </>
  )
}

export default GetRecipes