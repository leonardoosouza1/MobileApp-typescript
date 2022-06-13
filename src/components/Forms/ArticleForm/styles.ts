import styled from 'styled-components'
import { Input, Button, View, Typography, ScrollView } from '../../UI'

export const Container = styled(ScrollView).attrs({
  flex: 1,
  height: '100%',
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})``

export const WrapperInput = styled(View)`
    width: 80%;
    height: auto;
`

export const SignUpInput = styled(Input)`
    width: 230px;
    height: 50px;
`
export const SignUpButton = styled(Button)`
    width: 230px;
`
export const InputLabel = styled(Typography)`
    margin: 16px 0;
`
export const RegisterLabel = styled(Typography)`
    margin: 16px 0;
`
