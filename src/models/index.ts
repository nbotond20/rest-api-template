import { z } from 'zod'
import { createUserRequestBodySchema, userSchema } from './users/usersModels.schema'

export type User = z.infer<typeof userSchema>
export type CreateUserRequestBody = z.infer<typeof createUserRequestBodySchema>
export type CreateUserInput = z.infer<typeof createUserRequestBodySchema>
