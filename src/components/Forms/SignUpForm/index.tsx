import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  WrapperInput,
  SignUpInput,
  SignUpButton,
  InputLabel
} from './styles'
import { useAuth } from '../../../hooks/useAuth'
import { authService } from '../../../api/auth'
import { isValid } from '../../../utils/validators'
import { Text } from 'native-base'

type TcredencialData = {
  email: string | null,
  username: string | null,
  password: string | null
}
const SignUpForm = () => {
  const { saveUserData } = useAuth()
  const { createUser } = authService()
  const navigation = useNavigation()

  const [credentials, setCredentials] = useState<TcredencialData>({
    email: null,
    username: null,
    password: null
  })
  const { email, username, password } = credentials

  const handleSubmit = async () => {
    if (isValid(email, username, password)) {
      await createUser(email, username, password)
        .then(async ({ data }) =>
          await saveUserData(data.access.token, data.access.refresh_token)
        )
        .catch((error) => console.error(error))
    }
  }
  return (
    <Container >
      <WrapperInput>
        <InputLabel>E-mail</InputLabel>
        <SignUpInput
          type="text"
          placeholder="email"
          onChangeText={(email:string) => setCredentials({ ...credentials, email })}
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
      <SignUpButton onPress={() => handleSubmit()} >
        <Text color='white'>Sign Up</Text>
      </SignUpButton>
    </Container>
  )
}

export { SignUpForm }
