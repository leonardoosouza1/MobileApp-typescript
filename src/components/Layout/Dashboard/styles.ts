import styled from 'styled-components'
import { Card, View } from '../../UI'

export const Container = styled(View).attrs({
  flex: 1,
  height: '100%',
  backgroundColor: 'purple'
})``
export const ArticleCard = styled(Card).attrs({
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  width: '80%',
  height: '250px',
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
