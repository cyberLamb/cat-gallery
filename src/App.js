import React from 'react';
import {createTheme, ThemeProvider} from "@material-ui/core";
// import {Route} from "react-router";
import Gallery from "./component/Gallery";

const theme = createTheme(({
    palette: {
        primary: {
            light: '#606dbb',
            main: '#3949ab',
            dark: '#273377',
            contrastText: '#fff'
        },
        typography: {
            htmlFontSize: 17,
            fontSize: 18,

        }
    }
}))

function App() {



    return (
        <ThemeProvider theme={theme}>
            <Gallery />
        </ThemeProvider>
    )
}

export default App;
