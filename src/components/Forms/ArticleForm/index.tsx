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
  title: string | null,
  description: string | null,
  body: string | null
}
const ArticleForm = () => {
  const navigation = useNavigation()
  // const a = useAuth()
  // console.log(a)
  const [article, setArticle] = useState<TcredencialData>({
    title: null,
    description: null,
    body: null
  })

  return (
    <Container >
      <WrapperInput>
        <InputLabel>Title</InputLabel>
        <SignUpInput
          type="text"
          placeholder="title"
          onChangeText={(title:string) => setArticle({ ...article, title })}
        >
          {article.title}
        </SignUpInput>
        <InputLabel>Description</InputLabel>
        <SignUpInput
        type="description"
        placeholder="description"
        onChangeText={(description:string) => setArticle({ ...article, description })}
        >
          {article.description}
        </SignUpInput>
        <InputLabel>Body</InputLabel>
        <SignUpInput
        type="body"
        placeholder="body"
        onChangeText={(body:string) => setArticle({ ...article, body })}
        >
          {article.body}
        </SignUpInput>
      </WrapperInput>
      <SignUpButton>Create</SignUpButton>
    </Container>
  )
}

export { ArticleForm }
