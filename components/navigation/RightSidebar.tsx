import ROUTES from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'
import TagCards from '../cards/TagCards'

const RightSidebar = () => {

    const topQuestions = [
        {
            _id: "1",
            title: 'How to use Next.js with Tailwind CSS?',
        },
        {
            _id: "2",
            title: 'What is the best way to learn React?',
        },
        {
            _id: "3",
            title: 'How to deploy a Next.js application?',
        },
        {
            _id: "4",
            title: 'What is the difference between React and Vue?',
        },
        {
            _id: "5",
            title: 'How to use TypeScript with React?',
        }
    ]

const popularTags = [
  { _id: "1", name: "react", questions: 100 },
  { _id: "2", name: "nextjs", questions: 85 },
  { _id: "3", name: "nodejs", questions: 95 },
  { _id: "4", name: "javascript", questions: 120 },
  { _id: "5", name: "typescript", questions: 75 },
  { _id: "6", name: "mongodb", questions: 60 }
];
 return (
    <section className="pt-36 custom-scrollbar
    background-light900_dark200 light-border sticky right-0 top-0
    flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l
    p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
        <div>
            <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
            <div className=' flex flex-col w-full gap-[30px] mt-6'>
               {topQuestions.map(({_id,title}) => (
                 <Link key={_id}  href={ROUTES.PROFILE(_id)} className='flex cursor-pointer items-center justify-between gap-7'>
                   <p className='body-medium text-dark500_light700'>{title}</p>
                   <Image
                    src="/icons/chevron-right.svg"
                    alt='chevron'
                    height={20}
                    width={20}
                    className='invert-colors'
                   />
                 </Link> 
               ))}
             
            </div>
        </div>

        <div className='mt-16'>
           <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
           <div className="mt-7 flex flex-col gap-4">
              {popularTags.map(({_id,name,questions}) => (
                 <TagCards key={_id} _id={_id} name={name} questions={questions} showCount compact/>
              ))}
           </div>
        </div>
    </section>
  )
}

export default RightSidebar