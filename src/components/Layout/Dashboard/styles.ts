import styled from 'styled-components'
import { Image } from 'native-base'
import { ScrollView, Card, View } from '../../UI'

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
  width: '80%',
  height: 'auto',
  margin: '16px 0px',
  borderRadius: '8px'
})``
export const WrapperButton = styled(View).attrs({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '30px',
  borderRadius: '8px',
  backgroundColor: 'neutral.gray2'

})``

export const Thumbnail = styled(Image).attrs({
  width: '100%',
  height: '150px',
  marginTop: '16px',
  marginBottom: '16px',
  borderRadius: '8px'

})``
