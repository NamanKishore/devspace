import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Image from "next/image";



export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <>
    <h1 className="text-2xl font-bold text-primary-500 dark text-dark500_light500">Welcome to the world of Next.Js</h1>
    <form 
     action={async() => {
      "use server"
      await signOut({redirectTo:ROUTES.SIGNIN})
     }}>
    <Button className="px-14 mt-18 ml-11">Log out</Button>
    </form>
    </>
  );
}
