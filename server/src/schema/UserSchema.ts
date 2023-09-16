import { z } from "zod"

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(3, { message: 'Name must be greater than 3 characters'}),
    password: z.string().min(8, { message: "Password must be greater than 8 characters"})
  })
})

export const updateUserSchema = z.object({
  params: z.object({id: z.string()}),
  body: z.object({
    name: z.string().min(3, { message: 'Name must be greater than 3 characters'}),
    password: z.string().min(8, { message: "Password must be greater than 8 characters"})
  })
})