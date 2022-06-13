import React from 'react'
import { Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { Typography } from '../../UI'
import { Container, ArticleCard, WrapperButton, Thumbnail } from './styles'
import { useArticles } from '../../../hooks/'
const Dashboard = () => {
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
      {articles?.map(({ title, description, thumbnail, id, body }, index) => (
        <ArticleCard key={index}>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
          <Thumbnail
            alt={title}
            source={{ uri: thumbnail }} />
          <WrapperButton>
            <Pressable onPress={() => handleDelete(id)} >
              <Typography>Delete</Typography>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('CreateArticle', {
              isEdit: true,
              id,
              title,
              description,
              body
            })}>
              <Typography>Edit</Typography>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ViewArticle', {
              id,
              title,
              description,
              body,
              thumbnail
            })}>
              <Typography>View</Typography>
            </Pressable>
          </WrapperButton>
        </ArticleCard>
      ))}
    </Container>
  )
}

export { Dashboard }
