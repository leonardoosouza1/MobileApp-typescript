import styled from 'styled-components'
import { Image } from 'native-base'
import { ScrollView, Card, View, Typography } from '../../UI'

export const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  }
})``
export const ArticleCard = styled(Card).attrs({
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  width: '90%',
  height: 'auto',
  margin: '16px 0px',
  borderRadius: '8px'
})``
export const StyledTitle = styled(Typography).attrs({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px'

})``

export const StyledDescription = styled(Typography).attrs({
  fontSize: '12px',
  color: 'neutral.gray',
  fontWeight: 'light',
  marginBottom: '16px'

})``

export const StyledBody = styled(Typography).attrs({
  fontSize: '12px',
  marginBottom: '16px'

})``

export const Thumbnail = styled(Image).attrs({
  width: '100%',
  height: '250px',
  marginTop: '16px',
  marginBottom: '16px',
  borderRadius: '8px'

})``
