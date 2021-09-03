import React from "react"
import styled from '@emotion/styled'
// import styled from 'styled-components'
// import {MenuItem} from "@material-ui/core";


const StyledImage = styled.img`
    ${({galleryImage}) => galleryImage && "width: 200px"};
    ${({galleryImage}) => galleryImage && "height: 200px"};
    ${({galleryImage}) => galleryImage && "border-radius:  25px 0 25px 0"};
     ${({galleryImage}) => galleryImage && "border: 2px solid transparent" };
    ${({galleryImage}) => galleryImage && "box-shadow: none"};
   
    margin: 10px 21px;
    object-fit: cover;
    transition: .5s;
    cursor: pointer;
  
  :hover {
    ${({galleryImage}) => galleryImage && "border: 2px solid transparent"};
    ${({galleryImage}) => galleryImage && "box-shadow: 1px 3px 10px #333"};

  }

`

const Image = (props) => {
    console.log(props, "alll props")
    return (
        <StyledImage {...props}/>

    )
}

export default Image