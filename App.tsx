/* eslint-disable camelcase */
import React from 'react'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium
} from '@expo-google-fonts/poppins'

import Routes from 'routes'

import {
  ThemeProvider,
  AuthProvider
} from 'contexts'

export default function App () {
  const [loaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium
  })

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <ThemeProvider>
          <Routes />
      </ThemeProvider>
    </AuthProvider>
  )
}
