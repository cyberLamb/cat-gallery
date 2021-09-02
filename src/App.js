import React, {useEffect} from 'react';
import {ThemeProvider as MuiThemeProvider} from "@material-ui/core";
import {ThemeProvider} from "@emotion/react"
import CssBaseline from '@material-ui/core/CssBaseline'
import CategoryNavBar from "./features/categories/Category-navBar";
import theme from './theme'
import {useDispatch} from "react-redux";
import {getCategories} from "./features/categories/categorySlice";





function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        // fetchCategories()
        dispatch(getCategories())
    }, [])

    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <CategoryNavBar/>
            </ThemeProvider>
        </MuiThemeProvider>

    )
}

export default App;
