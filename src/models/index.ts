import { z } from 'zod'
import {
  createUserRequestBodySchema,
  updateUserInputSchema,
  updateUserRequestBodySchema,
  userSchema,
} from './users/usersModels.schema'

export type User = z.infer<typeof userSchema>
export type CreateUserRequestBody = z.infer<typeof createUserRequestBodySchema>
export type CreateUserInput = z.infer<typeof createUserRequestBodySchema>
export type UpdateUserRequestBody = z.infer<typeof updateUserRequestBodySchema>
export type UpdateUserInput = z.infer<typeof updateUserInputSchema>
