import { createTheme }  from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff'
        },
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
})

export default theme