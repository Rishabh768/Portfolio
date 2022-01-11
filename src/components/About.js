import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import {FaChevronDown} from 'react-icons/fa'
function About() {
    return (
        <div className='max-w-4xl mt-20 mx-auto'>
            <p className='text-center text-2xl md:text-4xl font-bold '>
                Hey 👋
            </p>

            <p className='text-center sm:text-xl text-gray-600 leading-relaxed mt-4'>
                I am a full stack web developer , I love creating interactive websites that helps your  grow  online. 
            </p>

            <ScrollIntoView selector='#skills'>
                <div className='mx-auto p-20 '>
                <FaChevronDown className='text-2xl mx-auto animate-bounce text-blue-500 '/>
                </div>
            </ScrollIntoView>
        </div>
    )
}

export default About
