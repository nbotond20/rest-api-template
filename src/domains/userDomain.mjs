import userStore from '../stores/userStore.mjs'
import Boom from '@hapi/boom'

const userDomain = {
  // Getting all users
  getUsers: async () => {
    const users = await userStore.getUsers()

    if (!users) return null

    return users
  },

  // Getting a specific user by id
  getUser: async (userId) => {
    if (!userId) throw Boom.badRequest('User id is required')

    const user = await userStore.getUser(userId)

    if (!user) return null

    return user
  },

  // Adding a new user
  addUser: async (user) => {
    if (!user.name || !user.age) throw Boom.badRequest('User name and age are required')

    const newUser = await userStore.addUser(user)

    if (!newUser) return null

    return newUser
  },
}

export default userDomain
