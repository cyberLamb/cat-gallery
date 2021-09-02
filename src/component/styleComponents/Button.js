import React from "react"
import styled from '@emotion/styled'
// import styled from 'styled-components'
import {Button} from "@material-ui/core";


// const StyledButton = styled((Button),{
//         backgroundColor: props =>  props.variant ? props.theme.palette.primary.light  : props.theme.palette.primary.dark
//     }
//     // [`:hover `]: {
//     //
//     // }
// )
const StyledButton = styled(Button)`
    border: 3px solid ${({variant,theme}) =>  !variant  ? theme.palette.primary.light  : theme.palette.primary.dark};
    ${({variant,theme}) => variant && "color:" + theme.palette.primary.dark};
    ${({variant}) => variant && "background-color: transparent"};
      &:hover {
        background-color: ${({variant,theme}) =>  variant ? theme.palette.primary.dark  : theme.palette.primary.light};
        color: ${({variant,theme}) =>  variant ? theme.palette.common.white  : theme.palette.primary.light}
      }
  
`


const ButtonWrapper = (props) => {
    console.log(props)
    return (
        <div>
            {/*<StyledButton variant = {variant} onClick = {onClick}>{text}</StyledButton>*/}
            <StyledButton {...props}>{props.text}</StyledButton>
        </div>
    )
}

export default ButtonWrapper
