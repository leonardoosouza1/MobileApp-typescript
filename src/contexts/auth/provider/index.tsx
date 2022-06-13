import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AuthContext from '../context'

type TAuthData = {
  token: string | null,
  refreshToken: string | null,
  isAuthenticated: boolean | null,
}

export type TAuthProvider = {
  saveUserData: (token: string, refreshToken: string | null) => void
  logout: () => void
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
}

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [authData, setAuthData] = useState<TAuthData>({
    token: null,
    refreshToken: null,
    isAuthenticated: false
  })

  useEffect(() => {
    (async () => {
      const [
        token,
        refreshToken
      ] = await AsyncStorage.multiGet([
        'token',
        'refreshToken',
        'name'
      ])

      setAuthData({
        token: token[1] || null,
        refreshToken: refreshToken[1] || null,
        isAuthenticated: !!token[1]
      })
    })()
  }, [])

  const saveUserData = (token: string, refreshToken: string) => {
    AsyncStorage.multiSet([
      ['token', token],
      ['refreshToken', refreshToken]
    ])

    setAuthData({
      ...authData,
      token,
      refreshToken
    })
  }

  const logout = async () => {
    AsyncStorage.multiRemove([
      'token',
      'refreshToken'
    ])
    setAuthData({
      token: null,
      refreshToken: null,
      isAuthenticated: null
    })
  }

  const contextValue = {
    saveUserData,
    logout,
    token: authData.token,
    refreshToken: authData.refreshToken,
    isAuthenticated: !!authData.token && !!authData.refreshToken
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
