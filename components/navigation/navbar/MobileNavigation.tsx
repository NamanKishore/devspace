import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import ROUTES from '@/constants/routes'
import { Button } from '@/components/ui/button'
import NavLinks from './NavLinks'
  

const MobileNavigation = () => {
  return (
    <>
        <Sheet>
        <SheetTrigger asChild>
            <Image 
            src='/icons/hamburger.svg'
            height={36}
            width={36}
            alt='Menu'
            className='invert-color sm:hidden'
            />
        </SheetTrigger>
        <SheetContent className='background-light900_dark200 border-none px-4' side='left'>

            <SheetTitle className='hidden'>Navigation</SheetTitle>
            
            <Link href='/' className='flex item-center gap-1'>
             <Image
              src='/images/site-logo.svg'
              height={23}
              width={23}
              alt='Logo'
             />
             <p className='h2-bold font-space-grotestk text-dark500_light300'>Dev<span className='text-primary-500 '>Space</span></p>
            </Link>

            <div className='no-scrollbar flex flex-col h-[calc(100vh-80px)] justify-between overflow-y-auto'>
            <SheetClose asChild>
                <section className='flex h-full flex-col gap-6 pt-16'>
                    <NavLinks isMobileNav/>
                </section>
            </SheetClose>
            <div className='flex flex-col gap-3 mt-2'>
                <SheetClose asChild>
                  <Link href={ROUTES.SIGNIN}>
                   <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none '>
                    <span className='primary-text-gradient'>Log In</span>
                   </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href={ROUTES.SIGNUP}>
                   <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none'>
                     Sign Up
                   </Button>
                  </Link>
                </SheetClose>

            </div>
            </div>
        </SheetContent>
        </Sheet>

  </>
  )
}

export default MobileNavigation