import { z } from 'zod'

export const createUserRequestBodySchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
})

export const userSchema = createUserRequestBodySchema.extend({
  id: z.string().uuid(),
})
