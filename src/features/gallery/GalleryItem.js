import React, {useEffect, useState} from "react";
import {Box, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getImages, getPages} from "./galleryAPI";


function GalleryItem() {

    const {id} = useParams();
    const [page, setPages] = useState(1)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.gallery.cats)

    // debugger

    const moreCats = () => {
        setPages(page + 10)
        console.log(page)
    }

    useEffect(() => {
        dispatch(getImages(id))

    }, [id])

    useEffect(() => {
        // fetchMoreCats(id, page)
        if (page > 10){
            console.log(id, page)
            dispatch(getPages([id, page]))
        }

    }, [page])

    return (
        <div>
            {
                data.map((image) => {
                    // console.log(e)
                    return (
                        <Box component="span" key={image.id + Math.random()}>
                            <img src={image.url} style={{width: '150px', height: "150px"}} alt="something"/>
                        </Box>
                    )
                })
            }
            <Button onClick={moreCats}>see more</Button>
        </div>
    )
}

export default GalleryItem