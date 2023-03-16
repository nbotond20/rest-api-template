import { CreateUserInput, UpdateUserInput } from '@models'
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

  // Update a user
  updateUser: async (updateUser: UpdateUserInput) => {
    return prisma.user.update({
      where: {
        id: updateUser.userId,
      },
      data: {
        name: updateUser.name,
        age: updateUser.age,
        email: updateUser.email,
      },
    })
  },

  // Delete a user
  deleteUser: async (userId: string) => {
    return prisma.user.delete({
      where: {
        id: userId,
      },
    })
  },
}

export default userStore
