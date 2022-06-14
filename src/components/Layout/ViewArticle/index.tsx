import React from 'react'
import { Typography } from '../../UI'
import { Container, ArticleCard, StyledTitle, StyledDescription, StyledBody, Thumbnail } from './styles'
import { useArticles } from '../../../hooks'

const ViewArtitcle = ({ params }) => {
  const { title, description, thumbnail, body } = params
  const { articles } = useArticles()

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
