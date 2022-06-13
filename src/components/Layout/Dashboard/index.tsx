import React from 'react'
import { Pressable, FlatList } from 'native-base'
import { Typography } from '../../UI'
import { Container, ArticleCard, WrapperButton } from './styles'

const Dashboard = () => {
  const test = [
    { id: '0', title: 'Title', description: 'some description', body: 'test' },
    { id: '1', title: 'Title', description: 'some description', body: 'test' },
    { id: '2', title: 'Title', description: 'some description', body: 'test' },
    { id: '3', title: 'Title', description: 'some description', body: 'test' },
    { id: '4', title: 'Title', description: 'some description', body: 'test' },
    { id: '5', title: 'Title', description: 'some description', body: 'test' },
    { id: '6', title: 'Title', description: 'some description', body: 'test' },
    { id: '7', title: 'Title', description: 'some description', body: 'test' },
    { id: '8', title: 'Title', description: 'some description', body: 'test' },
    { id: '9', title: 'Title', description: 'some description', body: 'test' }
  ]

  return (
    <Container>
      <FlatList
      data={test}
      renderItem={({ item, index }) => (
        <ArticleCard key={index}>
          <Typography>{item.title}</Typography>
          <Typography>{item.description}</Typography>
          <Typography>{item.body}</Typography>
          <WrapperButton>
            <Pressable onPress={() => console.log('delete', item.id)} >
              <Typography>Delete</Typography>
            </Pressable>
            <Pressable onPress={() => console.log('edit', item.id)}>
              <Typography>Edit</Typography>
            </Pressable>
          </WrapperButton>
        </ArticleCard>
      )}
      />
    </Container>
  )
}

export { Dashboard }
