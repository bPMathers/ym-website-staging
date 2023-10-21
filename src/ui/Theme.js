import { createTheme } from '@material-ui/core/styles';

// const yulRed = '#FF0000'; // TODO: rename to gold
const yulRed = '#756300';
// const yulGold = '#756300';
// const yulBlack = '#1c1c1c';
const yulBlack = '#0d0d0d';
const yulWhite = '#ededed';
const yulYellow = '#ededed';
// const yulYellow = '#F5EE9E';
const yulGold = '#FFD700';

export default createTheme({
    palette: {
        common: {
            red: yulRed,
            gold: yulGold,
        },
        primary: {
            main: yulBlack,
        },
        secondary: {
            main: yulWhite,
        },
        accent: {
            main: yulYellow,
        },
    },
    typography: {
        tab: {
            fontFamily: 'Roboto',
            textTransform: 'none',
            fontWeight: 700,
            color: 'white',
            fontSize: '1rem',
        },
        menuItem: {
            fontFamily: 'Lato',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white',
        },
        h1: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '12rem',
            color: yulGold,
            // lineHeight: 1.5,
            textDecorationLine: 'none',
        },
        h2: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '3.5rem',
            color: yulWhite,
            // lineHeight: 1.5,
            textDecorationLine: 'none',
        },
        h3: {
            fontFamily: 'Roboto',
            fontSize: '2.5rem',
            color: yulWhite,
        },
        h4: {
            fontFamily: 'Roboto',
            fontSize: '1.75rem',
            color: yulWhite,
            fontWeight: 400,
            textTransform: 'uppercase',
        },
        h5: {
            fontFamily: 'Roboto',
            fontSize: '1.25rem',
            color: yulWhite,
            fontWeight: 300,
        },
        h6: {
            fontWeight: 500,
            fontFamily: 'Roboto',
            color: yulWhite,
        },
        subtitle1: {
            fontSize: '1.0rem',
            fontWeight: 500,
            letterSpacing: '4px',
            color: yulWhite,
        },
        subtitle2: {
            fontFamily: 'Roboto',
            color: 'white',
            fontWeight: 300,
            fontSize: '1.25rem',
        },
        body1: {
            fontSize: '1.25rem',
            color: yulWhite,
            fontWeight: 300,
        },
        body2: {
            fontFamily: 'Roboto',
            fontSize: '1rem',
            color: yulWhite,
            fontWeight: 400,
        },
        caption: {
            fontSize: '1rem',
            fontWeight: 300,
            color: yulWhite,
        },
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: yulWhite,
                fontSize: '1rem',
            },
        },
        MuiInput: {
            root: {
                color: yulWhite,
                fontWeight: 300,
            },
            underline: {
                '&:before': {
                    borderBottom: `2px solid ${yulRed}`,
                },
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottom: `2px solid ${yulRed}`,
                },
            },
        },
    },
    projGridWidth: 4,
});
