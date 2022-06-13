import React from 'react'
import { KeyboardAvoidingView } from 'native-base'
import { Platform } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'

import Ionicons from 'react-native-vector-icons/Ionicons'

import { SignInForm } from '../../components/Forms'
import { Container, Logo } from './styles'
const SignIn = () => {
  const headerHeight = useHeaderHeight()

  return (
    <KeyboardAvoidingView
    behavior= {(Platform.OS === 'ios') ? 'padding' : undefined}
    keyboardVerticalOffset={headerHeight}
    >
      <Container>
        <Logo>
          <Ionicons
            name='person-circle-outline'
            color={'black'}
            size={120}
          />
        </Logo>
        <SignInForm />
      </Container>
    </KeyboardAvoidingView>
  )
}

export { SignIn }
