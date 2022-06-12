import React from 'react'
import { useAuth } from '../hooks'

import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'
const Routes = () => {
  // const isAuthenticated = useAuth()
  // console.log('isAuthenticated', isAuthenticated)
  // return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />
  return <PrivateRoutes/>
}

export { Routes }
