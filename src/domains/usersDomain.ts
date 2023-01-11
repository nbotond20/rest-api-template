import userStore from '@stores/usersStore'
import Boom from '@hapi/boom'
import { CreateUserRequestBody, User } from '@models'
import { createUserRequestBodySchema } from '../models/users/usersModels.schema'
import uuid4 from 'uuid4'

const userDomain = {
  // Getting all users
  getUsers: async () => {
    const users = await userStore.getUsers()

    if (!users) return null

    return users
  },

  // Getting a specific user by id
  getUser: async (userId: string) => {
    if (!userId) throw Boom.badRequest('User id is required')

    const user = await userStore.getUser(userId)

    if (!user) return null

    return user
  },

  // Adding a new user
  createUser: async (createUser: CreateUserRequestBody) => {
    const validation = createUserRequestBodySchema.safeParse(createUser)

    if (!validation.success) throw Boom.badRequest('Invalid input', validation.error)

    const user: User = {
      id: uuid4(),
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
