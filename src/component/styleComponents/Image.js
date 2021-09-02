import React from "react"
import styled from '@emotion/styled'
// import styled from 'styled-components'
// import {MenuItem} from "@material-ui/core";


const StyledImage = styled.img`
    ${({galleryImage}) => galleryImage && "width: 400px"};
    ${({galleryImage}) => galleryImage && "height: 400px"};
    margin: 10px 21px;
    object-fit: cover;

`

const Image = (props) => {
    console.log(props)
    return (
        <StyledImage {...props}/>
    )
}

export default Image