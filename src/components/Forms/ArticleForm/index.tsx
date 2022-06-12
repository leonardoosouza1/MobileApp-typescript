import React from 'react'
import { Input, Button, Typhography, View } from '../../UI'
import { Container } from './styles'

const ArticleForm = ({ children, ...props }: {children: React.ReactNode}) => {
  return <Container {...props}>{children}</Container>
}

export { ArticleForm }
