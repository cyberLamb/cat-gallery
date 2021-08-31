import { combineReducers, configureStore} from '@reduxjs/toolkit';
import gallerySlice from "../features/gallery/gallerySlice";
import categorySlice from "../features/categories/categorySlice";

export const rootReducer = combineReducers({
    gallery: gallerySlice,
    category: categorySlice

})
export const store = configureStore({
    reducer: rootReducer,
});
