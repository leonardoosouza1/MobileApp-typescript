import React from 'react'
import { StyledCard } from './styles'

const Card = ({ children, ...props }: {children: React.ReactNode}) => {
  return <StyledCard {...props}>{children}</StyledCard>
}

export { Card }
