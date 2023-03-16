import { CreateUserInput } from '@models'
import { prisma } from '@db'

const userStore = {
  // Getting all users
  getUsers: async () => {
    return prisma.user.findMany()
  },

  // Get a specific user by id
  getUser: async (userId: string) => {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
  },

  // Get a specific user by email
  getUserByEmail: async (email: string) => {
    return prisma.user.findUnique({
      where: {
        email,
      },
    })
  },

  // Create a new user
  createUser: async (user: CreateUserInput) => {
    return prisma.user.create({
      data: user,
    })
  },
}

export default userStore
