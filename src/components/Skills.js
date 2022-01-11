import React from 'react'
import {FaReact,FaNodeJs} from 'react-icons/fa'
import {SiMongodb,SiTailwindcss,SiJavascript} from 'react-icons/si'

const Skills = () => {
    return (

        <div id='skills'>
            <p className='text-center   mb-10  text-2xl sm:text-4xl font-bold'>Tech I Use </p>
         
        <div className='flex justify-center'>
           
            <div className='flex max-w-4xl  flex-wrap justify-center items-center '>

                <div className='flex flex-col rounded-lg w-40 p-10 m-6 bg-white items-center overflow-hidden shadow-2xl '>
                   
                    <FaReact color='cyan' className='text-4xl' />
                    <p className='text-xl sm:text-2xl font-semibold '>React</p>

                </div>


                <div className='flex flex-col rounded-lg w-40 p-10 m-6 bg-white items-center overflow-hidden shadow-2xl '>
                   
                   <SiMongodb color='green' className='text-4xl' />
                   <p className='text-xl sm:text-2xl font-semibold  '>MongoDB</p>

                </div>
                
                <div className='flex flex-col rounded-lg w-40 p-10 m-6 bg-white items-center overflow-hidden shadow-2xl'>
                   
                   <FaNodeJs color='green' className='text-4xl' />
                   <p className='text-xl sm:text-2xl font-semibold  '>NodeJs</p>

                </div>
                
                <div className='flex flex-col rounded-lg w-40 p-10 m-6 bg-white items-center overflow-hidden  shadow-2xl'>
                   
                   <SiTailwindcss color='#0ea5e9' className='text-4xl' />
                   <p className='text-xl sm:text-2xl font-semibold  '>Tailwind </p>

                </div>
                
                <div className='flex flex-col rounded-lg w-40 p-10 m-6 bg-white items-center overflow-hidden shadow-2xl '>
                   
                   <SiJavascript color='yellow' className='text-4xl' />
                   <p className='text-xl sm:text-2xl font-semibold  '>Javascript</p>

               </div>

            </div>
            </div>
            
        </div>
    )
}

export default Skills
