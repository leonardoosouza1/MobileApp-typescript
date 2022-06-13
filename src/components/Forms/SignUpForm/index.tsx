import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  WrapperInput,
  SignUpInput,
  SignUpButton,
  InputLabel
} from './styles'
// import { useAuth } from '../../../hooks/useAuth'

type TcredencialData = {
  email: string | null,
  username: string | null,
  password: string | null
}
const SignUpForm = () => {
  const navigation = useNavigation()
  // const a = useAuth()
  // console.log(a)
  const [credentials, setCredentials] = useState<TcredencialData>({
    email: null,
    username: null,
    password: null
  })

  return (
    <Container >
      <WrapperInput>
        <InputLabel>E-mail</InputLabel>
        <SignUpInput
          type="text"
          placeholder="email"
          onChangeText={(username:string) => setCredentials({ ...credentials, username })}
        >
          {credentials.email}
        </SignUpInput>
        <InputLabel>Username</InputLabel>
        <SignUpInput
          type="text"
          placeholder="username"
          onChangeText={(username:string) => setCredentials({ ...credentials, username })}
        >
          {credentials.username}
        </SignUpInput>
        <InputLabel>Password</InputLabel>
        <SignUpInput
        type="password"
        placeholder="password"
        onChangeText={(password:string) => setCredentials({ ...credentials, password })}
        >
          {credentials.password}
        </SignUpInput>
      </WrapperInput>
      <SignUpButton>Sign up</SignUpButton>
    </Container>
  )
}

export { SignUpForm }
