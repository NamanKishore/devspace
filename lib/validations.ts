import { z } from "zod";

export const signInSchema = z.object({
    email:z
    .string()
    .min(1,{message:"Email is required"})
    .email({message:"please privide a valid email address"}),
    password:z
    .string()
    .min(6,{message:"Passeword must of atleast 6 character"})
    .max(100,{message:"Password cannot exceed 100 characters"}),

})

export const signUpSchema = z.object({
    username:z
    .string()
    .min(3,{message:"Username must be of atleast 3 characters long"})
    .max(30,{message:"Username must not exceed 30 characters"})
    .regex(/^[a-zA-z0-9_]*$/,{message:"Username can only contain letters,numbers and underscore",}),
    
    name:z
    .string().
    min(1,{message:"Name must be of atleast 1 characters long"})
    .max(50,{message:"Name must not exceed 50 characters"})
    .regex(/^[a-zA-Z\s]*$/,{message:"Name can only contain letters and spaces.",}),
    
    email:z
    .string()
    .min(1,{message:"Email is required"})
    .email({message:"please privide a valid email address"}),
    
    password:z
    .string()
    .min(6,{message:"Passeword must of atleast 6 character"})
    .max(100,{message:"Password cannot exceed 100 characters"})
    .regex(/^[A-Z]/,{message:"Passeword must contain atleast one uppercase character"})
    .regex(/^[a-z]/,{message:"Passeword must contain atleast one lowecase character"})
    .regex(/^[0-9]/,{message:"Passeword must contain atleast one number"})
    .regex(/[^a-zA-Z0-9]/,{message:"Passeword must contain special characters"})
    
})