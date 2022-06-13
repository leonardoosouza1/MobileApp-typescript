import React from 'react'
import { Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { Typography } from '../../UI'
import { Container, ArticleCard, StyledTitle, StyledDescription, StyledBody, Thumbnail } from './styles'
import { useArticles } from '../../../hooks'

const ViewArtitcle = ({ params }) => {
  const { title, description, thumbnail, id, body } = params
  const navigation = useNavigation()
  const { articles, deleteArticle } = useArticles()
  const handleDelete = (id:string) => {
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

  if (!articles?.length) {
    return (
      <Container>
        <Typography>You don't have any articles</Typography>
      </Container>
    )
  }

  return (
    <Container>
        <ArticleCard >
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <StyledBody>{body}</StyledBody>
          <Thumbnail
            alt={title}
            source={{ uri: thumbnail }} />
        </ArticleCard>
    </Container>
  )
}

export { ViewArtitcle }
