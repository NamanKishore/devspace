import { auth, signOut } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

 const questions = [
  {_id:'1', title:'How to learn React', description:'I want to learn react,can anyone help me', 
    tags: [
      {_id:'1',name:'React'},
      {_id:'2',name:'Javascript'}
    ],
    author:{_id:'1',name:'john doe', image:'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'},
    upvotes:10,
    answers:5,
    views:100,
    createdAt:new Date()
  },

  {_id:'2', title:'How to learn Javascript', description:'I want to learn Javascript,can anyone help me', 
    tags: [
      {_id:'1',name:'JavaScript'},
      {_id:'2',name:'React'}
    ],
    author:{_id:'1',name:'Jack Reacher', image:'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'},
    upvotes:10,
    answers:5,
    views:100,
    createdAt:new Date("2021-09-01")
  }
 ]
interface SearchParams {
  searchParams: Promise<{[key:string]: string}>
}
export default async function home({searchParams}:SearchParams) {
 
  const {query = "",filter = ""} = await searchParams;
  const filteredQuestions = questions.filter((question) => {
 const matchesQuery = question.title
  .toLowerCase()
  .includes (query.toLowerCase());
  const matchesFilter = filter
  ? question.tags[0].name?.toLowerCase() === filter.
  toLowerCase()
  : true;
  return matchesQuery && matchesFilter;
  })

  
  return (
    <>
    <section className="flex flex-col-reverse w-full sm:flex-row justify-between gap-4 sm:items-center ">
      <h1 className="text-2xl font-bold text-primary-500 dark text-dark500_light500">All Questions</h1>
      <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900" asChild>
        <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
      </Button>
    </section>
     
    <section className="mt-11">
      <LocalSearch route="/" imgSrc = "/icons/search.svg" placeholder="Search..." otherClasses = "flex-1"/>
    </section>
    <HomeFilter/>
   <div className="mt-10 flex w-full flex-col gap-6">
     {filteredQuestions.map((question) => (
       <QuestionCard key={question._id} question={question}/>
     ))}
   </div>    
    </>
  );
}

