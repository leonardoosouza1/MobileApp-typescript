import instance from '../instance'

const authService = () => {
  const login = async (username: string, password: string) =>
    await instance.post('/auth/signin', {
      username,
      password
    })

  const createUser = async (email: string, username: string, password: string) =>
    await instance.post('/auth/signup', {
      email,
      username,
      password
    })

  const deleteUser = async (id: string) =>
    await instance.delete(`/auth/delete/${id}`)

  return {
    login,
    createUser,
    deleteUser
  }
}

export { authService }
