import userStore from '@stores/usersStore'
import Boom from '@hapi/boom'
import { CreateUserInput, CreateUserRequestBody } from '@models'
import { createUserRequestBodySchema } from '../models/users/usersModels.schema'

const userDomain = {
  // Getting all users
  getUsers: async () => {
    const users = await userStore.getUsers()

    if (!users) throw Boom.notFound('No users found!')

    return users
  },

  // Getting a specific user by id
  getUser: async (userId: string) => {
    if (!userId) throw Boom.badRequest('User id is required!')

    const user = await userStore.getUser(userId)

    if (!user) throw Boom.notFound('User not found!')

    return user
  },

  // Adding a new user
  createUser: async (createUser: CreateUserRequestBody) => {
    const validation = createUserRequestBodySchema.safeParse(createUser)

    if (!validation.success) throw Boom.badRequest('Invalid input!', validation.error)

    const oldUser = await userStore.getUserByEmail(createUser.email)
    if (oldUser) throw Boom.conflict('User already exists!')

    const user: CreateUserInput = {
      name: createUser.name,
      age: createUser.age,
      email: createUser.email,
    }

    const newUser = await userStore.createUser(user)

    if (!newUser) return null

    return newUser
  },
}

export default userDomain
