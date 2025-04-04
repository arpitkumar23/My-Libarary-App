import React from 'react'
import Baner from "../../public/Baner.jpg"
import list from '../../public/list.json'
 

const Banner = () => {
  return (
    <>
    <div className='mx-auto md:px-20 px-4 flex'>
        <div className=" w-full md:h-1/2 mt-28 md:mt-48">
        <div className='space-y-12'> 
        <h1 className=' text-4xl font-bold text-black'>
            Hello , Welcome here to learn something <span className='text-pink-500'>new everyday !!!!</span>
            
            </h1>
            <p className='text-xl'>
                Lorem ipsum ing elit. Debitis ratione itaque incidunt,, pariatur harum! Esse, quasi veniam!Impedit molestiae necessitatibus maxime error in eum tempore eos suscipit! Explicabo dicta maiores ea magni quam libero reiciendis rem facere dolorem eligendi.
            </p>
            <label className="input input-bordered  flex items-center bg-white gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text " className="grow" placeholder="Email" />
          </label> 
         <button className="btn btn-secondary">Secondary </button>
            </div> 
            </div>
        <div className="w-full md:h-1/2 mt-28 ">
        <img src={Baner} className=' w-90 h-92' alt="" />
        </div>
        </div>
    </>
  )
}

export default Banner
