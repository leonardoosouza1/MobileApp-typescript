import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  WrapperInput,
  SignUpInput,
  SignUpButton,
  InputLabel
} from './styles'
import { useArticles } from '../../../hooks/useArticles'
import { articleServices } from '../../../api/article'

type TcredencialData = {
  title: string | null,
  description: string | null,
  body: string | null
}
const ArticleForm = ({ params = {} }) => {
  const articleService = articleServices()
  const { updateArticle, createArticle } = useArticles()
  const navigation = useNavigation()

  if (params.isEdit) {
    navigation.setOptions({ headerTitle: 'Edit Article' })
  }

  const [article, setArticle] = useState<TcredencialData>({
    title: params.title || null,
    description: params.description || null,
    body: params.body || null
  })

  const handleSaveArticle = async () => {
    if (params.isEdit) {
      await articleService
        .updateArticleService(params.id, article.title, article.description, article.body)
        .then(async () => await updateArticle(params.id, article.title, article.description, article.body))
        .catch((error) => console.error(error))

      navigation.goBack()
    } else {
      createArticle(article.title, article.description, article.body)
        .then(async () => await createArticle(article.title, article.description, article.body))
        .catch((error) => console.error(error))

      navigation.goBack()
    }
  }

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
      <SignUpButton onPress={() => handleSaveArticle()}>{ params.isEdit ? 'Edit' : 'Create'}</SignUpButton>
    </Container>
  )
}

export { ArticleForm }
