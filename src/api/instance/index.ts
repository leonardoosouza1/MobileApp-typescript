import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
  baseURL: 'https://test-api.atom6studio.com'
})

const refreshToken = async () => {
  const res = await instance.post('/auth/refresh', {
    refresh: await AsyncStorage.getItem('refreshToken')
  })

  const { acessToken, refreshToken } = res.data

  await AsyncStorage.multiSet([
    ['token', acessToken],
    ['refreshToken', refreshToken]
  ])
}

instance.interceptors.request.use(async (req) => {
  const token = await AsyncStorage.getItem('token')
  if (token && req.headers) {
    req.headers.Authorization = `Bearer ${token}`
  }

  return req
})

instance.interceptors.response.use(
  (res) => {
    return res
  },
  async ({ req }) => {
    const accessToken = await AsyncStorage.getItem('token')
    if (req.status === 401 && accessToken) {
      await refreshToken()

      return instance(req)
    }
    return Promise.reject(req)
  }
)

export default instance
