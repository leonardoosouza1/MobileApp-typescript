import styled from 'styled-components'
import { Image } from 'native-base'
import { ScrollView, Card, View, Button } from '../../UI'

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
  width: '85%',
  height: 'auto',
  margin: '16px 0px',
  borderRadius: '8px'
})``
export const WrapperButton = styled(View).attrs({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '40px',
  borderRadius: '8px'

})``

export const Thumbnail = styled(Image).attrs({
  width: '100%',
  height: '150px',
  marginTop: '16px',
  marginBottom: '16px',
  borderRadius: '8px'

})``

export const StyledButton = styled(Button)`
  width: 80px;
  height: 30px;
  padding: 0px;
  border-radius: 8px;
  background-color: ${({ bg }) => bg};
`
