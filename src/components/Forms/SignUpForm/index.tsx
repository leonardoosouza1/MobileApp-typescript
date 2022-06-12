import React from 'react'
import { Input, Button, Typography, View } from '../../UI'

const SignUpForm = ({ children, ...props }: {children: React.ReactNode}) => {
  return (
    <View {...props}>
      <Typography>b</Typography>
      <Input>aa</Input>
      <Input>aa</Input>
      <Button>Register</Button>
    </View>
  )
}

export { SignUpForm }
