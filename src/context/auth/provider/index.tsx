import React from 'react'
import AuthContext from '../context'

const ThemeProvider: React.FC = ({ children }) => {
  const contextValue = {}
  return (
    <AuthContext.Provider value={contextValue} >
      {children}
    </AuthContext.Provider>
  )
}

export default ThemeProvider
