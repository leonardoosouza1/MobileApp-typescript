import React from 'react'
import { Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { Typography } from '../../UI'
import { Container, ArticleCard, WrapperButton, StyledButton, Thumbnail } from './styles'
import { useArticles } from '../../../hooks/'
const Dashboard = () => {
  const navigation = useNavigation()
  const { articles, deleteArticle, loading } = useArticles()
  const handleDelete = (id: string) => {
    Alert.alert('Delete article', ' you are sure?', [
      {
        text: 'Cancel'
      },
      {
        text: 'OK',
        onPress: async () => await deleteArticle(id)
      }
    ])
  }

  if (!articles?.length && !loading) {
    return (
      <Container>
        <Typography>You don't have any articles</Typography>
      </Container>
    )
  }

  return (
    <Container>
      {articles?.map(({ title, description, thumbnail, id, body }, index) => (
        <ArticleCard key={index}>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
          <Thumbnail
            alt={title}
            source={{ uri: thumbnail }} />
          <WrapperButton>
            <StyledButton
              onPress={() => handleDelete(id)}
              bg='red'
            >
              Delete
            </StyledButton>
            <StyledButton
              onPress={() => navigation.navigate('CreateArticle', {
                isEdit: true,
                id,
                title,
                description,
                body
              })}
              bg='gray'
            >
              Edit
            </StyledButton>
            <StyledButton
              bg='gray'
              onPress={() => navigation.navigate('ViewArticle', {
                id,
                title,
                description,
                body,
                thumbnail
              })}
            >
              View
            </StyledButton>
          </WrapperButton>
        </ArticleCard>
      ))}
    </Container>
  )
}

export { Dashboard }
