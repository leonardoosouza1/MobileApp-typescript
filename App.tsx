/* eslint-disable camelcase */
import React from 'react'

import { Routes } from './src/routes'
import {
  ThemeProvider,
  AuthProvider
} from './src/contexts'

export default function App () {
  return (
    <AuthProvider>
      <ThemeProvider>
          <Routes />
      </ThemeProvider>
    </AuthProvider>
  )
}
