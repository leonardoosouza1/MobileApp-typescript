import { createContext } from 'react'

import { TAuthProvider } from '../provider'

// @ts-expect-error no need for a default value in createContext
const AuthContext = createContext<TAuthProvider>()
export { AuthContext }
