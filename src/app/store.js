import { combineReducers, configureStore} from '@reduxjs/toolkit';
import gallerySlice from "../features/gallery/gallerySlice";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from "@reduxjs/toolkit/dist/devtoolsExtension";

export const galleryReducers = combineReducers({
    gallery: gallerySlice
})
export const store = configureStore({
    reducer: galleryReducers,
    // composeWithDevTools(applyMiddleware(thunk))
});
