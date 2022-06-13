import React from 'react'
import { Text, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'

const CreateArticle = () => {
  const navigation = useNavigation()
  return (
    <Button onPress={() => navigation.navigate('CreateArticle')} >
      <Text style={{ color: 'white' }}>Create article</Text>
    </Button >
  )
}

export { CreateArticle }
