import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { KeyboardAvoidingView } from 'native-base'

import { Container, Logo } from './styles'
import { SignUpForm } from '../../components/Forms'
const SignUp = () => {
  return (
    <KeyboardAvoidingView>
      <Container>
        <Logo>
          <Ionicons
            name='person-add-outline'
            color={'black'}
            size={120}
          />
        </Logo>
        <SignUpForm />
      </Container>
    </KeyboardAvoidingView>
  )
}

export { SignUp }
