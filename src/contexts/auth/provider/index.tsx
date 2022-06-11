import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AuthContext from '../context'

type TAuthData = {
  token: string | null,
  refreshToken: string | null,
  name: string | null,
  expoPushToken: string | null,
}

export type TAuthProvider = {
  login: (token: string, refreshToken: string, name: string | null) => void
  logout: () => void
  name: string | null
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
}

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<TAuthData>({
    name: null,
    token: null,
    refreshToken: null,
    expoPushToken: null
  })

  useEffect(() => {
    (async () => {
      const [
        token,
        refreshToken,
        name,
        expoPushToken
      ] = await AsyncStorage.multiGet([
        'token',
        'refreshToken',
        'name',
        'expoPushToken'
      ])

      setAuthData({
        token: token[1] || null,
        refreshToken: refreshToken[1] || null,
        name: name[1] || null,
        expoPushToken: expoPushToken[1] || null
      })
    })()
  }, [])

  const login = (token: string, refreshToken: string, name: string | null) => {
    AsyncStorage.multiSet([
      ['token', token],
      ['refreshToken', refreshToken],
      ['name', name || '']
    ])

    setAuthData({
      ...authData,
      token,
      refreshToken,
      name
    })
  }

  const logout = async () => {
    AsyncStorage.multiRemove([
      'token',
      'refreshToken',
      'name',
      'expoPushToken'
    ])

    setAuthData({
      token: null,
      refreshToken: null,
      name: null,
      expoPushToken: null
    })
  }

  const contextValue = {
    login,
    logout,
    ...authData,
    isAuthenticated: !!authData.token && !!authData.refreshToken && !!authData.name
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider