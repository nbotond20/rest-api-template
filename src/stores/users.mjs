import uuid4 from 'uuid4'

const userDatabase = [
  { id: '1', name: 'User1', age: 21 },
  { id: '2', name: 'User2', age: 22 },
  { id: '3', name: 'User3', age: 23 },
]

const userStore = {
  getUsers: async () => {
    return userDatabase
  },

  getUser: async (userId) => {
    return userDatabase.find((user) => user.id === userId)
  },

  addUser: async (user) => {
    const newUser = { ...user, id: uuid4() }
    userDatabase.push(newUser)
    return newUser
  },
}

export default userStore
