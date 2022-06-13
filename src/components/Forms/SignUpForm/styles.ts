import styled from 'styled-components'
import { Input, Button, View, Typography } from '../../UI'
export const Container = styled(View)`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`
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
