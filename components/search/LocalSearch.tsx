'use client'
import React,{useEffect, useState} from 'react'
import { Input } from '../ui/input'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery, removeKeysFromQuery } from '@/lib/url'

interface props {
  route:string,
  imgSrc:string,
  placeholder:string,
  otherClasses:string,
}

const LocalSearch = ({route,imgSrc,placeholder,otherClasses}: props) => {
  const router  = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
  const [searchUrlQuery, setSearchUrlQuery] = useState(query)
  useEffect(() => {
    const delayedSearchFn = setTimeout(() => {
      if(searchUrlQuery){
            const newUrl = formUrlQuery({
              params:searchParams.toString(),
              key:'query',
              value:searchUrlQuery
            })
            router.push(newUrl,{scroll:false})
          }
          else {
            if(pathname === route){
              const newUrl = removeKeysFromQuery({
                params:searchParams.toString(),
                keysToRemove:['query']
              })
              router.push(newUrl,{scroll:false})
            }
          }
    },300)
    
    return () => clearTimeout(delayedSearchFn)
  },[searchUrlQuery,router,route,searchParams,pathname])
   
  return (
    <div className={`background-light800_dark:gradient flex min-h-[56px] items-center gap-4 grow  rounded-[10px] px-4 ${otherClasses}`}>
      <Image
      src={imgSrc}
      alt='Search'
      height={24}
      width={24}
      className='cursor-pointer'
      />
      <Input
      type='text'
      placeholder={placeholder}
      value={searchUrlQuery}
      onChange={(e) => setSearchUrlQuery(e.target.value)}
      className='paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none'
      />
    </div>
  )
}

export default LocalSearch