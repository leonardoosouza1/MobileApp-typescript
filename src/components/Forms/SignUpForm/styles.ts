import styled from 'styled-components'
import { Pressable } from 'native-base'
import { Input, View, Typography } from '../../UI'
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
export const SignUpButton = styled(Pressable)`
    width: 230px;
    height: 40px;
    border-radius: 5px;
    background-color: ${({ disabled }) => disabled ? '#ccc' : '#297fc4'};
    color: white;
    justify-content: center;
    align-items: center;
`
export const InputLabel = styled(Typography)`
    margin: 16px 0;
`
