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
import { useAuth } from '../../../hooks/useAuth'
import { authService } from '../../../api/auth'

type TcredencialData = {
  username: string | null,
  password: string | null
}
const SignInForm = () => {
  const [credentials, setCredentials] = useState<TcredencialData>({
    username: null,
    password: null
  })
  const navigation = useNavigation()
  const service = authService()
  const { saveUserData } = useAuth()

  const handleLogin = async () => {
    await service.login(credentials.username, credentials.password)
      .then(async ({ data }) => {
        const { access } = data
        await saveUserData(access.token, access.refresh_token)
      })
  }

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
      <SignUpButton onPress={() => handleLogin()} >Sign in</SignUpButton>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <RegisterLabel>Register account</RegisterLabel>
      </Pressable>

    </Container>
  )
}

export { SignInForm }
