import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Theme from './Theme'

const Navbar = () => {
  return (
    <nav className='flex-between dark .text-dark500_light400 background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 '>
      <Link href='/' className='flex item-center gap-1'>
       <Image
        src = "/images/site-logo.svg"
        width={25}
        height={25}
        alt="DevSpace Logo" 
        />
        <p className='h2-bold font-space-grotestk text-dark500_light300 max-sm:hidden'>Dev<span className='text-primary-500'>Space</span></p>
      </Link>  

      <p>Global Search</p> 

      <div className='flex-between gap-5'><Theme/></div>
    </nav>


    
  )
}

export default Navbar