const {createSlice} = require("@reduxjs/toolkit");


export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        cats: [],
        categories: []
    },
    reducers: {

        addCats(state, action) {
           state.cats = action.payload
            state.cats.length = 0
        },

        addCategories(state, action) {
            // eslint-disable-next-line no-unused-expressions
           state.categories = action.payload

        },
        addMoreCats( state, action) {
           action.payload.map((e) => {
               state.cats.push(e)
            })
        }
    }

});


export default gallerySlice.reducer
export const {addCats, addMoreCats, addCategories} = gallerySlice.actions;
