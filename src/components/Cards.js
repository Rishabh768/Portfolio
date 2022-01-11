import React from 'react'
import profile from '../images/profile.jpg'
import {FaEnvelope, FaGithub,FaLinkedin, FaTwitter} from 'react-icons/fa'
const Cards = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-xs  mx-auto shadow-xl bg-white rounded-lg p-5  drop-shadow-xl'>
                <div>
                    <img
                        alt='profile image'
                        className='w-32 h-32 shadow-xl  drop-shadow-sm object-cover rounded-full mx-auto' src={profile}></img>
                </div>
                <div className='text-center mt-5'>
                    <p className='text-xl sm:text-2xl text-gray-900 '>Rishabh Chauhan</p>
                    <p className='text-xs sm:text-base text-gray-600 w-auto pt-2 px-5 pb-4 border-b-2 inline-block'>Web Developer / Student</p>


                    <div className='flex items-center justify-center mt-4'>

                        <a className='m-1 p-1 text-xl sm:p-2 sm:m-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-full '
                             href='#'>
                            <FaGithub/><span className='sr-only'>Github</span>
                        </a>
                        <a  className='m-1 p-1 text-xl sm:p-2 sm:m-2 text-cyan-800 hover:bg-cyan-800  hover:text-white transition-colors duration-300 rounded-full '
                            href='#'>
                            <FaLinkedin/><span className='sr-only'>Linkedin</span>
                        </a>
                        <a  className='m-1 p-1 text-xl sm:p-2 sm:m-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-full '
                            href='#'>
                            <FaTwitter/><span className='sr-only'>Twitter</span>
                        </a>

                        <a  className='m-1 p-1 text-xl sm:p-2 sm:m-2 text-green-300 hover:bg-green-300 hover:text-white transition-colors duration-300 rounded-full '
                            href='#'>
                            <FaEnvelope/><span className='sr-only'>Envelope</span>
                        </a>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Cards;
