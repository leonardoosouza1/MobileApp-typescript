/* eslint-disable camelcase */
import React from 'react'

import { Routes } from './src/routes'
import {
  ThemeProvider,
  AuthProvider,
  ArticlesProvider
} from './src/contexts'

export default function App () {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ArticlesProvider>
          <Routes />
        </ArticlesProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
