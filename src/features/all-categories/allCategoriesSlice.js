import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getAllCategories = createAsyncThunk(
    'allCategory/getAllCategories',
    async (page) => {
        const response = await axios
            .get(`${process.env.REACT_APP_API_KEY}images/search?limit=10&page=${page}&category_ids`)
        // const categories = getState().gallery.categories
        console.log(response.data, "all cats")
        return await response.data
    }
)


export const categorySlice = createSlice({
    name: 'allCategory',
    initialState: {
        allCats: []
        // categories
    },
    reducers: {},
    extraReducers:  {
        [getAllCategories.fulfilled]: (state, action) => {
            state.allCats.length = 0
            state.allCats = action.payload
        },
        [getAllCategories.fulfilled]: (state, action) => {
            action.payload.map((e) => {
                state.allCats.push(e)
            })
        },
    }
});


export default categorySlice.reducer