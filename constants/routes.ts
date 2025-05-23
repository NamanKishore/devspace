const ROUTES = {
    HOME: "/",
    SIGNIN: '/sign-in',
    SIGNUP: 'sign-up',
    ASK_QUESTION:"/ask-question",
    PROFILE: (id:string) => "/profile/${id}",
    QUESTION: (id:string) => "/question/${id}",
    TAGS:(id:string) => "/tags/${id}"
}

export default ROUTES