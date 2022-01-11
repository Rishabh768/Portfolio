import React from 'react'
import {FaEnvelope, FaGithub,FaLinkedin, FaTwitter} from 'react-icons/fa'


const Footer = () => {
    return (

        <div className='m-4 flex flex-col'>
            <div className='flex justify-center'>

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
            <div className='text-center'>
                <p>Made By -  <a className='text-blue-700 hover:underline' href='#'> Rishabh Chauhan</a></p>
            </div>
            
        </div>
    )
}

export default Footer
