import { z } from 'zod'

export const createUserRequestBodySchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
  password: z.string().min(6),
})

export const loginUserRequestBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const userSchema = createUserRequestBodySchema.extend({
  id: z.string().uuid(),
})

export const updateUserRequestBodySchema = z.object({
  name: z.string().optional(),
  age: z.number().optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
})

export const updateUserInputSchema = updateUserRequestBodySchema
  .extend({
    userId: z.string().uuid(),
  })
  .refine(
    data => {
      return data.name || data.age || data.email || data.password
    },
    { message: 'At least one of the fields is required!', path: ['name', 'age', 'email', 'password'] }
  )
