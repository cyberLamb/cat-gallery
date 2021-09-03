import { combineReducers, configureStore} from '@reduxjs/toolkit';
import gallerySlice from "../features/gallery/gallerySlice";
import categorySlice from "../features/categories/categorySlice";
import AllcategoriesSlice from "../features/all-categories/allCategoriesSlice";

export const rootReducer = combineReducers({
    gallery: gallerySlice,
    category: categorySlice,
    all: AllcategoriesSlice

})
export const store = configureStore({
    reducer: rootReducer,
});
