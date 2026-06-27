import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          
          {/*------Left Section----------*/}
          <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>
              Prescripto is a reliable platform designed to make healthcare simple, accessible, and convenient. 
              We connect patients with highly qualified doctors across multiple specialties, allowing you to 
              book appointments anytime, anywhere. Whether you need routine checkups, specialist consultations, 
              or quick medical advice, DocBook ensures a seamless and trustworthy experience
            </p>
          </div>

          {/*------Center Section----------*/}
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/*------Right Section----------*/}
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>+1-212-456-7890</li>
              <li>prescripto.com</li>
            </ul>
          </div>
        </div>

        {/*---------Copyright-----------*/}
        <div className='text-center text-gray-600 text-sm'>
          <hr className='mb-2'/>
          <p>Copyright 2024@ Prescripto - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
