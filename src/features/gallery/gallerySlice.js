import { getImages, getPages} from "./galleryAPI";

const {createSlice} = require("@reduxjs/toolkit");


export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        cats: [],
        status: null
    },
    reducers: {},
    extraReducers: {
        [getImages.fulfilled]: (state, action) => {
            state.cats.length = 0
            state.cats = action.payload
        },
        [getPages.fulfilled]: (state, action) => {
            action.payload.map((e) => {
                state.cats.push(e)
            })
        }
    }

});


export default gallerySlice.reducer

// export const {addMoreCats} = gallerySlice.actions;
