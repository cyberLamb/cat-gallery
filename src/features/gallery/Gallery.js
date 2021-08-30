import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import axios from "axios";
import {addCategories, addCats} from "./gallerySlice";
import {Box} from "@material-ui/core";
import NavbarMenu from "../../component/NavbarMenu";


export default function Gallery() {

    const dispatch = useDispatch()


    const fetchCategories = async () => {
        const response = await axios
            .get(`${process.env.REACT_APP_API_KEY}categories`)
            .catch((err) => {
                console.log(err, ': error')
            });
        console.log(response, 'ban')
        dispatch(addCategories(response.data))

    }
    useEffect(() => {
        fetchCategories()
    }, [])

        return (
            <div>
                <Box component="div" display="flex">
                   <NavbarMenu />
                </Box>
            </div>
        )
    }