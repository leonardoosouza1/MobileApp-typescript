import React from 'react'
import { StyledText } from './styles'

const Typhography = ({ children, ...props }: {children: React.ReactNode}) => {
  return <StyledText {...props}>{children}</StyledText>
}

export { Typhography }
