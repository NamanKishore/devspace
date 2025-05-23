
import ROUTES from '@/constants/routes'
import Link from 'next/link'
import React from 'react'
import { formatDistanceToNow } from "date-fns";
import TagCards from './TagCards';

import Image from 'next/image';
import Metric from '../Metric';

interface Props {
   question: Question
}

const QuestionCard = ({question : {_id,title,tags,author,createdAt,upvotes,answers,views}}:Props) => {
   
    const result = formatDistanceToNow(createdAt)
  return (
    <div className='rounded-[10px] p-9 border-2 sm:px-11'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-grow'>
        <div>
            <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>{result}</span>
            <Link href={ROUTES.QUESTION(_id)}>
             <h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'>{title}</h3>
            </Link>
        </div>
     </div>
     <div className='flex mt-3.5 flex-wrap w-full gap-2'>
      {tags.map((tag:Tags) => (
        <TagCards
         key={tag._id}
         _id={tag._id}
         name={tag.name}
         compact
        />
      ))}
     </div>

     <div className='flex-between mt-6 w-full flex-wrap gap-3'>
       <Metric
       imageUrl={author.image}
       alt={author.name}
       value={author.name}
       title={`asked ${result}`}
       href={ROUTES.PROFILE(author._id)}
       textStyles="body-medium text-dark400_light700"
       isAuthor
       />

       <div className='flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start'>
         <Metric
         imageUrl="/icons/like.svg"
         alt="like"
         value={upvotes}
         title="Votes"
         textStyles="small-medium text-dark400_light800"
         />
          <Metric
         imageUrl="/icons/message.svg"
         alt="answers"
         value={answers}
         title="Answer"
         textStyles="small-medium text-dark400_light800"
         />
          <Metric
         imageUrl="/icons/eye.svg"
         alt="views"
         value={views}
         title="Views"
         textStyles="small-medium text-dark400_light800"
         />
       </div>
     </div>
    </div>
  )
}

export default QuestionCard