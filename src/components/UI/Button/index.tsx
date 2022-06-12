import React from 'react'
import { StyledButton } from './styles'

const Button = ({ children, ...props }: {children: React.ReactNode}) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export { Button }
