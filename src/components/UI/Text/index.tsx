import React from 'react'
import { StyledText } from './styles'

const Typography = ({ children, ...props }: {children: React.ReactNode}) => {
  return <StyledText {...props}>{children}</StyledText>
}

export { Typography }
