import userStore from '@stores/usersStore'
import Boom from '@hapi/boom'
import { CreateUserInput, CreateUserRequestBody, UpdateUserInput } from '@models'
import { createUserRequestBodySchema, updateUserInputSchema } from '../models/users/usersModels.schema'

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

    if (!newUser) throw Boom.internal('Something went wrong!')

    return newUser
  },

  // Updating a user
  updateUser: async (updateUser: UpdateUserInput) => {
    const validation = updateUserInputSchema.safeParse(updateUser)

    if (!validation.success) throw Boom.badRequest('Invalid input!', validation.error)

    const user = await userStore.getUser(updateUser.userId)

    if (updateUser.email) {
      const oldUser = await userStore.getUserByEmail(updateUser.email)
      if (oldUser) throw Boom.conflict('Email is already taken!')
    }

    if (!user) throw Boom.notFound('User not found!')

    const updatedUser = await userStore.updateUser(updateUser)

    if (!updatedUser) throw Boom.internal('Something went wrong!')

    return updatedUser
  },

  // Deleting a user
  deleteUser: async (userId: string) => {
    if (!userId) throw Boom.badRequest('User id is required!')

    const user = await userStore.getUser(userId)

    if (!user) throw Boom.notFound('User not found!')

    const deletedUser = await userStore.deleteUser(userId)

    if (!deletedUser) throw Boom.internal('Something went wrong!')

    return deletedUser
  },
}

export default userDomain
