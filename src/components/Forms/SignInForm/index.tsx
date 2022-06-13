import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  WrapperInput,
  SignUpInput,
  SignUpButton,
  InputLabel,
  RegisterLabel
} from './styles'
// import { useAuth } from '../../../hooks/useAuth'

type TcredencialData = {
  username: string | null,
  password: string | null
}
const SignInForm = () => {
  const navigation = useNavigation()
  // const a = useAuth()
  // console.log(a)
  const [credentials, setCredentials] = useState<TcredencialData>({
    username: null,
    password: null
  })

  return (
    <Container >
      <WrapperInput>
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
      <SignUpButton>Sign in</SignUpButton>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <RegisterLabel>Register account</RegisterLabel>
      </Pressable>

    </Container>
  )
}

export { SignInForm }
