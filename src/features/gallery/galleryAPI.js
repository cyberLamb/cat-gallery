import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getImages = createAsyncThunk(
    'gallery/getImages',
    async (category_id) => {
        const response = await axios
            .get(`${process.env.REACT_APP_API_KEY}images/search?limit=10&page=1&category_ids${category_id ? "=" + category_id : ''}`)
        return await response.data
    }
)


export const getPages = createAsyncThunk(
    'pages/getPages',
    async ([category_id, page]) => {
        console.log("mtav fetch", category_id, page)

        const response = await axios
            .get(`${process.env.REACT_APP_API_KEY}images/search?limit=10&page=${page}&category_ids${category_id ? "=" + category_id : ''}`)
        // console.log(response.data, '  es el datan')
        // dispatch(getPages([category_id, page]))
        return await response.data
    }
)

