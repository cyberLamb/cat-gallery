import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getCategories} from "../features/categories/categorySlice";
import {Box} from "@material-ui/core";
import NavbarMenu from "../features/categories/Category-navBar";


export default function Gallery() {

    const dispatch = useDispatch()




    useEffect(() => {
        // fetchCategories()
        dispatch(getCategories())
    }, [])

        return (
            <div>
                <Box component="div" display="flex">
                   <NavbarMenu />
                </Box>
            </div>
        )
    }