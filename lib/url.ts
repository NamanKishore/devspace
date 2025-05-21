import { usePathname } from 'next/navigation'
import queryString from 'query-string'
import qs from 'query-string'

interface urlQueryParams {
  params:string,
  key:string ,
  value:string
}
interface removeUrlProps {
  params:string,
  keysToRemove:string[]
}
export const formUrlQuery = ({params,key,value}:urlQueryParams) => {
  const queryString = qs.parse(params)
  
  //{query:react is hard}
  queryString[key] = value
  //{query:react is easy}

  return qs.stringifyUrl({
    url:window.location.pathname,
    query:queryString
  })
  //{the query object at this point will conver into just a simple string which is the value of the key that is "react is easy"}
}

export const removeKeysFromQuery = ({params,keysToRemove}:removeUrlProps) => {
    const queryString = qs.parse(params)
    
    keysToRemove.forEach((key) => {
       delete queryString[key]
    })

    return qs.stringifyUrl({
    url:window.location.pathname,
    query:queryString
  })
}
