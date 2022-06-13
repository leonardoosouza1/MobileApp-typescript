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
      {test.map(({ title, description, body }, index) => (
        <ArticleCard key={index}>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
          <Typography>{body}</Typography>
          <WrapperButton>
            <Pressable onPress={() => console.log('delete')} >
              <Typography>Delete</Typography>
            </Pressable>
            <Pressable onPress={() => console.log('edit')}>
              <Typography>Edit</Typography>
            </Pressable>
          </WrapperButton>
        </ArticleCard>
      ))}
    </Container>
  )
}

export { Dashboard }
