import React, {useEffect, useState} from "react";
import {Box} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import axios from "axios";
import {addCats, addMoreCats} from "../features/gallery/gallerySlice";



function GalleryItem() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.gallery.cats)
    const [page, setPages] = useState(1)

    const fetchCats = async (category_id) => {
            const response = await axios
                .get(`${process.env.REACT_APP_API_KEY}images/search?limit=10&page=1&category_ids=${category_id}`)
            dispatch(addCats(response.data))
    }

    debugger
    const moreCats = () => {
        setPages(page + 10)
    }
    const fetchMoreCats = async (category_id, page) => {

        const response = await axios
            .get(`${process.env.REACT_APP_API_KEY}images/search?limit=10&page=${page}&category_ids=${category_id}`)
            .catch((err) => {
                console.log(err, ': error')
            });
        // console.log(response.data, 'response data')
        dispatch(addMoreCats(response.data))
    };


    const {id} = useParams();
    // console.log(id)

    useEffect(() => {
        fetchCats(id)

    }, [id])

    useEffect(() => {
        fetchMoreCats(id, page)
    }, [id, page])

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
            <button onClick={moreCats}>see more</button>
        </div>
    )
}

export default GalleryItem