import React from 'react'
import { StyledInput } from './styles'

const Input = ({ children, ...props }: {children: React.ReactNode}) => {
  return <StyledInput {...props}>{children}</StyledInput>
}

export { Input }
