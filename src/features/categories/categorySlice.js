import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getCategories = createAsyncThunk(
    'category/getCategories',
    async () => {
        const response = await axios
            .get(`${process.env.REACT_APP_API_KEY}categories`)
        // const categories = getState().gallery.categories
        return await response.data
    }
)


export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: []
        // categories
    },
    reducers: {},
    extraReducers:  {
        [getCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
            console.log(state.categories)
            console.log("mtav")
        },

    }
});


export default categorySlice.reducer

