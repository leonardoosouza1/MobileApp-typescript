import AsyncStorage from '@react-native-async-storage/async-storage'
import instance from '../instance'

const authService = () => {
  const login = async (email: string, password: string) => {
    const res = await instance.post('/auth/login', {
      email,
      password
    })

    const { accessToken, refreshToken } = res.data

    await AsyncStorage.multiSet([
      ['token', accessToken],
      ['refreshToken', refreshToken]
    ])

    return res.data
  }
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

export default authService
