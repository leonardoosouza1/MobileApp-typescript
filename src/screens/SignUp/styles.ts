import styled from 'styled-components'
import {
  ScrollView,
  View
} from 'native-base'

export const Container = styled(ScrollView).attrs({
  height: '100%',
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 15
  }
})``
export const Logo = styled(View)`
    width: 100%;
    height: 150px;
    align-items: center;
    justify-content: center;
`
