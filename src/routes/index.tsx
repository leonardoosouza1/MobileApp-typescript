import React from 'react'
import { useAuth } from '../hooks'

import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'
const Routes = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />
}

export { Routes }
