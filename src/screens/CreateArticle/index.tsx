import React from 'react'
import { KeyboardAvoidingView } from 'native-base'
import { Platform } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'

import { ArticleForm } from '../../components/Forms'
const CreteArticle = () => {
  const headerHeight = useHeaderHeight()

  return (
    <KeyboardAvoidingView
    flex={1}
    behavior= {(Platform.OS === 'ios') ? 'padding' : undefined}
    keyboardVerticalOffset={headerHeight}
    >
      <ArticleForm />
    </KeyboardAvoidingView>
  )
}

export { CreteArticle }
