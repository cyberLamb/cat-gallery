import React from "react"
import styled from '@emotion/styled'
// import styled from 'styled-components'
import {MenuItem} from "@material-ui/core";


const StyledLink = styled(MenuItem)`
  a {
    text-decoration: none;
    ${({menu, theme}) => (menu && "color:" + theme.palette.primary.dark)};
    font-size: 18px;
    text-transform: uppercase;
  }

  :hover {
    background-color: ${({theme}) => theme.palette.primary.dark};

    a {
      color: ${({theme}) => theme.palette.common.white};
    }
  }



`

const NavbarLink = (props) => {
    console.log(props)
    return (
        <StyledLink {...props}/>
    )
}

export default NavbarLink