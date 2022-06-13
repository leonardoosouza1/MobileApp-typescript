import React from 'react'
import { StyledScroll } from './styles'

const ScrollView = ({ children, ...props }: {children: React.ReactNode}) => {
  return <StyledScroll {...props}>{children}</StyledScroll>
}

export { ScrollView }
