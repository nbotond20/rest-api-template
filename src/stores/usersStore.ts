import { User } from '@models'

// Mock database
const userDatabase: User[] = [
  { id: '1', name: 'User1', age: 21, email: 'email1@email.com' },
  { id: '2', name: 'User2', age: 22, email: 'email2@email.com' },
  { id: '3', name: 'User3', age: 23, email: 'email3@email.com' },
]

const userStore = {
  // Getting all users
  getUsers: async () => {
    return userDatabase
  },

  // Get a specific user by id
  getUser: async (userId: string) => {
    return userDatabase.find(user => user.id === userId)
  },

  // Create a new user
  createUser: async (user: User) => {
    userDatabase.push(user)
    return user
  },
}

export default userStore
