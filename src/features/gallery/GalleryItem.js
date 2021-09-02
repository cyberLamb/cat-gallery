import React, {useEffect, useState} from "react";
import {Box} from "@material-ui/core";
import ButtonWrapper from "../../component/styleComponents/Button";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getImages, getPages} from "./galleryAPI";
import Image from "../../component/styleComponents/Image";


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
        if (page > 10) {
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
                        <Image key={image.id + Math.random()} galleryImage src={image.url}/>
                    )
                })
            }
            <ButtonWrapper variant onClick={moreCats} text={'See More'}/>
        </div>
    )
}

export default GalleryItem