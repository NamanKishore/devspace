'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Toaster } from '../ui/sonner'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import ROUTES from '@/constants/routes'

const SocialAuthForm = () => {

  const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-2 py-3.5"
  const handleSignIn = async (providers: 'github' | 'google') => {
    try {
      await signIn('provider',{
        redirectTo: ROUTES.HOME,
        redirect:false
      })
    } catch (error) {
      console.log(error)

      toast("Sign-in Failed", {
        description: error instanceof Error ? error.message: "A error has occured during sign-in",
      })
      
    }
  }
  return (
    <div className='mt-5 flex flex-wrap gap-2.5'>
        <Button className={buttonClass} onClick={() => handleSignIn('github')}>
            <Image
             src="/icons/github.svg"
             alt='Github Logo'
             height={20}
             width={20}
             className='invert-colors mr-2.5 object-contain'
            />
            <span>Login With Github</span>
        </Button>

        <Button className={buttonClass} onClick={() => handleSignIn('google')}>
            <Image
             src="/icons/google.svg"
             alt='Google Logo'
             height={20}
             width={20}
             className=' mr-2.5 object-contain'
            />
            <span>Login With Google</span>
        </Button>
    </div>
  )
}

export default SocialAuthForm