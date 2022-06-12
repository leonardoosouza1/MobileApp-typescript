import React from 'react'
import { StyledView } from './styles'

const View = ({ children, ...props }: {children: React.ReactNode}) => {
  return <StyledView {...props}>{children}</StyledView>
}

export { View }
